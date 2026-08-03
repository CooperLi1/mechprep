"""Shared helpers: pull the prose fields out of a content/library TS file,
split each into top-level HTML blocks, and write edited blocks back."""
import re, sys, os

LIB = "/Users/yl526/engtest/content/library"

# ---- field extraction -------------------------------------------------------
# Content fields are either backtick template literals (which never contain a
# backtick) or ordinary double-quoted strings with \" escapes. Handle both.
KEYS = {
    "explanation": "explanation: ",
    "prompt": "prompt: ",
    "qna_a": "\n      a: ",
    "qna_q": "\n      q: ",
    "intro": "\n    intro: ",
    "section": "html: ",
    "eqformula": "formula: ",
}

ID_RE = re.compile(r'\n\s+id: "([a-z0-9-]+)"')


def read(topic, extra=False):
    p = os.path.join(LIB, f"{topic}{'.extra' if extra else ''}.ts")
    return p, open(p, encoding="utf8").read()


def _scan_string(src, i):
    """src[i] is a quote char. Return (body_decoded, end_index_after_quote, quote)."""
    q = src[i]
    j = i + 1
    buf = []
    while True:
        c = src[j]
        if c == "\\":
            nxt = src[j + 1]
            if nxt == '"':
                buf.append('"')
            elif nxt == "\\":
                buf.append("\\")
            elif nxt == "n":
                buf.append("\n")
            else:
                buf.append("\\" + nxt)
            j += 2
            continue
        if c == q:
            return "".join(buf), j + 1, q
        buf.append(c)
        j += 1


def _encode(body, q):
    if q == "`":
        return "`" + body + "`"
    return '"' + body.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def iter_fields(src, kind):
    """yield (start, end, decoded_text, quote) spanning the whole literal."""
    key = KEYS[kind]
    i = 0
    while True:
        k = src.find(key, i)
        if k < 0:
            return
        p = k + len(key)
        if src[p] in ('"', "`"):
            body, end, q = _scan_string(src, p)
            yield p, end, body, q
            i = end
        else:
            i = p


def owner_id(src, pos):
    """nearest preceding `id: "..."` before pos"""
    best = None
    for m in ID_RE.finditer(src, 0, pos):
        best = m.group(1)
    return best


# ---- block splitting --------------------------------------------------------
BLOCK_OPEN = re.compile(r"<(p|div|ul|ol|table|figure|h3|h4|blockquote)\b", re.I)


def split_blocks(html):
    """Split an HTML string into top-level element blocks (plus any stray text)."""
    blocks, i, n = [], 0, len(html)
    while i < n:
        m = BLOCK_OPEN.search(html, i)
        if not m:
            rest = html[i:]
            if rest.strip():
                blocks.append(rest)
            break
        if m.start() > i:
            blocks.append(html[i:m.start()])
        tag = m.group(1)
        depth, j = 0, m.start()
        pat = re.compile(rf"</?{tag}\b", re.I)
        while True:
            t = pat.search(html, j)
            if not t:
                j = n
                break
            if html[t.start():t.start() + 2].lower() == "</":
                depth -= 1
                j = html.index(">", t.start()) + 1
                if depth == 0:
                    break
            else:
                depth += 1
                j = html.index(">", t.start()) + 1
        blocks.append(html[m.start():j])
        i = j
    # fold whitespace-only fragments into the neighbouring block so that
    # "".join(split_blocks(x)) == x exactly and indices stay meaningful
    merged = []
    for b in blocks:
        if not b.strip() and merged:
            merged[-1] += b
        else:
            merged.append(b)
    while len(merged) > 1 and not merged[0].strip():
        merged[1] = merged[0] + merged[1]
        merged.pop(0)
    return merged


def join_blocks(blocks):
    return "".join(blocks)


# ---- ops --------------------------------------------------------------------
def apply_ops(html, ops):
    """ops: list of (index, action, payload). index is into the ORIGINAL blocks.
    actions: SET (replace), DROP, AFTER (insert payload after block i),
             BEFORE (insert payload before block i)."""
    blocks = split_blocks(html)
    out = []
    before = {}
    after = {}
    setv = {}
    drop = set()
    for op in ops:
        i, act = op[0], op[1]
        pay = op[2] if len(op) > 2 else None
        if i >= len(blocks):
            raise IndexError(f"block {i} out of range (have {len(blocks)})")
        if act == "SET":
            setv[i] = pay
        elif act == "DROP":
            drop.add(i)
        elif act == "AFTER":
            after.setdefault(i, []).append(pay)
        elif act == "BEFORE":
            before.setdefault(i, []).append(pay)
        else:
            raise ValueError(act)
    for i, b in enumerate(blocks):
        out.extend(before.get(i, []))
        if i in drop:
            pass
        else:
            out.append(setv.get(i, b))
        out.extend(after.get(i, []))
    return "".join(out)


def rewrite_file(topic, extra, edits, kind="explanation"):
    """edits: {owner_id: ops}  applied to the given field kind."""
    path, src = read(topic, extra)
    spans = []
    for s, e, text, q in iter_fields(src, kind):
        oid = owner_id(src, s)
        if oid in edits:
            spans.append((s, e, text, oid, q))
    seen = {o for _, _, _, o, _ in spans}
    missing = set(edits) - seen
    if missing:
        raise SystemExit(f"NOT FOUND in {path}: {sorted(missing)}")
    for s, e, text, oid, q in reversed(spans):
        new = apply_ops(text, edits[oid])
        guard(new)
        src = src[:s] + _encode(new, q) + src[e:]
    open(path, "w", encoding="utf8").write(src)
    return len(spans)


def check_text(t):
    bad = []
    if "`" in t:
        bad.append("backtick")
    if "${" in t:
        bad.append("${")
    return bad


def rewrite_indexed(topic, extra, kind, edits):
    """edits: {ordinal_index_of_field: ops}"""
    path, src = read(topic, extra)
    spans = list(iter_fields(src, kind))
    for k in edits:
        if k >= len(spans):
            raise SystemExit(f"{path}: {kind}[{k}] out of range (have {len(spans)})")
    for k in sorted(edits, reverse=True):
        s, e, t, q = spans[k]
        new = apply_ops(t, edits[k])
        guard(new)
        src = src[:s] + _encode(new, q) + src[e:]
    open(path, "w", encoding="utf8").write(src)
    return len(edits)


def replace_literals(topic, extra, pairs):
    """pairs: list of (old, new) exact strings; each must occur exactly once."""
    path, src = read(topic, extra)
    for old, new in pairs:
        n = src.count(old)
        if n != 1:
            raise SystemExit(f"{path}: literal occurs {n}x, expected 1:\n  {old[:160]}")
        src = src.replace(old, new)
    open(path, "w", encoding="utf8").write(src)
    return len(pairs)


def guard(*texts):
    for t in texts:
        if t is None:
            continue
        if "`" in t or "${" in t:
            raise SystemExit(f"FORBIDDEN backtick/${{ in new text: {t[:120]}")
