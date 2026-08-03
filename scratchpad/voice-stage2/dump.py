"""Dump a topic's explanations (block-numbered) for editing.
usage: python3 dump.py <topic> [base|extra] [--qna] [--lesson] [--from N] [--to N]
"""
import sys, re
from lib import read, iter_fields, owner_id, split_blocks

SVG = re.compile(r"<svg[\s\S]*?</svg>")
topic = sys.argv[1]
which = sys.argv[2] if len(sys.argv) > 2 else "base"
args = sys.argv[3:]

extra = which == "extra"
path, src = read(topic, extra)


def show(kind, label_from_id=True):
    for s, e, text, _q in iter_fields(src, kind):
        oid = owner_id(src, s) if label_from_id else kind
        print(f"\n### {oid} [{kind}]")
        for i, b in enumerate(split_blocks(text)):
            print("  [%d] %s" % (i, SVG.sub("«SVG»", b)))


if "--qna" in args:
    show("qna_q"); show("qna_a")
elif "--lesson" in args:
    for s, e, text, _q in iter_fields(src, "intro"):
        print("\n### LESSON INTRO")
        for i, b in enumerate(split_blocks(text)):
            print("  [%d] %s" % (i, SVG.sub("«SVG»", b)))
    for n, (s, e, text, _q) in enumerate(iter_fields(src, "section")):
        print(f"\n### LESSON SECTION {n}")
        for i, b in enumerate(split_blocks(text)):
            print("  [%d] %s" % (i, SVG.sub("«SVG»", b)))
elif "--prompt" in args:
    show("prompt")
else:
    ids = None
    if "--only" in args:
        ids = set(args[args.index("--only") + 1].split(","))
    for s, e, text, _q in iter_fields(src, "explanation"):
        oid = owner_id(src, s)
        if ids and oid not in ids:
            continue
        print(f"\n### {oid}")
        for i, b in enumerate(split_blocks(text)):
            print(f"  [{i}] {b}")
