import json
import collections
import openpyxl

wb = openpyxl.load_workbook(
    r"c:\Users\Mehak\Downloads\AU_Corporate_vs_KRPR_SEO_Audit (2).xlsx",
    data_only=True,
)


def rows(name):
    ws = wb[name]
    data = list(ws.iter_rows(values_only=True))
    header = [str(c).strip() if c else "" for c in data[2]]
    out = []
    for r in data[3:]:
        if not r or r[0] is None:
            continue
        d = {}
        for i, h in enumerate(header):
            if h:
                d[h] = r[i] if i < len(r) else None
        out.append(d)
    return out


services = rows("AU Service Pages")
hubs = rows("AU Country Hubs")
blogs = rows("AU Country Blog Posts")
print("counts", len(services), len(hubs), len(blogs))


def summarize(items, label):
    gap = 0
    under = 0
    title_long = 0
    meta_bad = 0
    actions = collections.Counter()
    types = collections.Counter()
    for d in items:
        wg = d.get("Word gap") or 0
        try:
            wg = int(wg)
        except Exception:
            wg = 0
        gap += wg
        if wg > 0:
            under += 1
        act = str(d.get("Recommended action") or "")
        actions[act[:90]] += 1
        types[str(d.get("Page type"))] += 1
        try:
            if int(d.get("Title len") or 0) > 60:
                title_long += 1
        except Exception:
            pass
        try:
            ml = int(d.get("Meta len") or 0)
            if ml < 150 or ml > 165:
                meta_bad += 1
        except Exception:
            pass
    print("---", label)
    print("under length", under, "total word gap", gap)
    print("title >60", title_long, "meta outside 150-165", meta_bad)
    print("types", dict(types))
    print("actions:")
    for a, c in actions.most_common(20):
        print(f"  {c:4} {a}")


summarize(services, "services")
summarize(hubs, "hubs")
summarize(blogs, "blogs")

allp = []
for src, items in [("service", services), ("hub", hubs), ("blog", blogs)]:
    for d in items:
        allp.append(
            {
                "src": src,
                "country": d.get("Country"),
                "type": d.get("Page type"),
                "url": d.get("URL"),
                "title": d.get("Title tag"),
                "title_len": d.get("Title len"),
                "meta_len": d.get("Meta len"),
                "h1": d.get("H1"),
                "primary": d.get("Primary keyword"),
                "secondary": d.get("Secondary keywords"),
                "lsi": d.get("LSI keywords (target)"),
                "lsi_missing": d.get("Target LSI missing"),
                "wc": d.get("Current word count"),
                "req": d.get("Required word count"),
                "gap": d.get("Word gap"),
                "density_term": d.get("Density term"),
                "occ": d.get("Term occurrences"),
                "density": d.get("Current density %"),
                "req_density": d.get("Required density"),
                "primary_count": d.get("Primary exact-match count"),
                "action": d.get("Recommended action"),
            }
        )

out = r"C:\Users\Mehak\.cursor\AU Corp\seo-targets.json"
with open(out, "w", encoding="utf-8") as f:
    json.dump(allp, f, ensure_ascii=False, default=str)
print("wrote", len(allp))

print("\nSERVICE PAGES")
for d in services:
    wg = d.get("Word gap") or 0
    print(
        f"gap={wg} req={d.get('Required word count')} wc={d.get('Current word count')} "
        f"dens={d.get('Current density %')}->{d.get('Required density')} "
        f"term={d.get('Density term')} primary={d.get('Primary keyword')} | {d.get('URL')}"
    )

buckets = collections.Counter()
for d in blogs:
    wg = d.get("Word gap") or 0
    try:
        wg = int(wg)
    except Exception:
        wg = 0
    if wg == 0:
        buckets["0"] += 1
    elif wg < 200:
        buckets["1-199"] += 1
    elif wg < 500:
        buckets["200-499"] += 1
    elif wg < 1000:
        buckets["500-999"] += 1
    else:
        buckets["1000+"] += 1
print("blog gap buckets", dict(buckets))

hub_buckets = collections.Counter()
for d in hubs:
    wg = d.get("Word gap") or 0
    try:
        wg = int(wg)
    except Exception:
        wg = 0
    print(
        f"HUB gap={wg} req={d.get('Required word count')} wc={d.get('Current word count')} "
        f"primary={d.get('Primary keyword')} | {d.get('URL')}"
    )
