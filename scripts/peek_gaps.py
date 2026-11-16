import csv

rows = list(csv.DictReader(open(r"C:\Users\Mehak\.cursor\AU Corp\SEO-UPDATE-LOG.csv", encoding="utf-8")))
rows.sort(key=lambda r: -int(r["words_added_target"]))
print("top gaps")
for r in rows[:18]:
    path = r["url"].replace("https://www.theaucorp.com", "")
    print(f"{int(r['words_added_target']):5} {r['type'][:14]:14} {path}")
adds = [int(r["words_added_target"]) for r in rows]
print("add>0", sum(1 for n in adds if n > 0), "add==0", sum(1 for n in adds if n == 0))
print("median", sorted(adds)[len(adds) // 2], "mean", round(sum(adds) / len(adds)))
