"""Per-field view: full text for blocks that carry a voice tell or that open the
passage; head/tail only for the rest."""
import sys, re
from lib import read, iter_fields, owner_id, split_blocks
SVG = re.compile(r"<svg[\s\S]*?</svg>")
TELL = re.compile(r"trap|interviewer|sanity check|Distractor analysis|follow-?up|In practice|That said|Crucially|Importantly|worth noting|comes down to|real-world|This is why|whole question|whole point|worth naming|honest caveat|&mdash;|—|Note the|Read the", re.I)
topic, which = sys.argv[1], sys.argv[2]
kind = sys.argv[3] if len(sys.argv) > 3 else "explanation"
lo = int(sys.argv[4]) if len(sys.argv) > 4 else 0
hi = int(sys.argv[5]) if len(sys.argv) > 5 else 10**6
path, src = read(topic, which == "extra")
for n, (s, e, t, q) in enumerate(iter_fields(src, kind)):
    if not (lo <= n < hi):
        continue
    oid = owner_id(src, s) or f"{kind}[{n}]"
    bl = split_blocks(t)
    print(f"### {n} {oid} ({len(t)}c)")
    for i, b in enumerate(bl):
        b = SVG.sub("«SVG»", b).strip()
        if TELL.search(b) or (i == 0 and 'class="eq"' not in b) or i == len(bl) - 1:
            print(f"  [{i}] {b}")
        else:
            print(f"  [{i}]~ {b[:60]} … {b[-26:]}" if len(b) > 90 else f"  [{i}]~ {b}")
