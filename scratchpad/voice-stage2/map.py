import sys, re
from lib import read, iter_fields, owner_id, split_blocks
SVG = re.compile(r"<svg[\s\S]*?</svg>")
topic, which = sys.argv[1], sys.argv[2]
path, src = read(topic, which == "extra")
kind = sys.argv[3] if len(sys.argv) > 3 else "explanation"
for s, e, t, q in iter_fields(src, kind):
    oid = owner_id(src, s) or "?"
    bl = split_blocks(t)
    print(f"### {oid} ({len(t)}c, {len(bl)} blocks, quote={q})")
    for i, b in enumerate(bl):
        b = SVG.sub("«SVG»", b).strip()
        head = b[:70].replace("\n", " ")
        tail = b[-34:].replace("\n", " ") if len(b) > 104 else ""
        print(f"  [{i}] {head}{' … ' + tail if tail else ''}")
