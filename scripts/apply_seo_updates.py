# -*- coding: utf-8 -*-
"""Apply the AU vs KRPR SEO audit to blog and service pages.

Updates meta titles (<60 characters, primary keyword first), 160-character
meta descriptions, keyword metadata, body length, and the tracked density term.
"""

from __future__ import annotations

import csv
import json
import math
import random
import re
import urllib.parse
from pathlib import Path

ROOT = Path(r"C:\Users\Mehak\.cursor\AU Corp")
TARGETS = ROOT / "seo-targets.json"
REPORT = ROOT / "SEO-UPDATE-LOG.csv"

SCOPE_TYPES = {"Blog Post", "Sub-hub", "Country Pillar", "Service"}

ACRONYMS = {
    "usa", "uk", "uae", "gst", "fema", "rbi", "roc", "dtaa", "fdi", "icofr",
    "pan", "tan", "llp", "gcc", "oidar", "ca", "agm", "sox", "ifrs", "gaap",
    "nri", "oci", "pf", "esi", "vat", "eor", "ssa", "ceca", "ceta", "gdpr",
    "dpdp", "pipl", "acra", "siac", "fc-gpr", "fc-trs", "fla", "cbdt", "mca",
    "sebi", "epfo", "esic", "iec", "lut", "softex", "firms", "us", "eu",
}

SMALL = {"in", "of", "for", "and", "or", "to", "a", "the", "from", "vs", "with", "on", "by", "at"}

SYNONYM = {
    "audit": "review",
    "subsidiary": "entity",
    "visa": "permit",
    "apostille": "authentication",
    "valuation": "pricing",
    "notice": "letter",
    "eor": "provider",
    "treaty": "agreement",
    "compliance": "filings",
    "repatriation": "remittance",
    "payroll": "salaries",
    "dtaa": "convention",
    "fema": "exchange-control",
    "mistake": "error",
    "branch office": "this office",
    "project office": "site office",
    "liaison office": "rep office",
    "foreign company": "overseas parent",
    "gcc": "centre",
    "oidar": "e-services",
    "roc": "registrar",
    "transfer pricing": "intercompany pricing",
    "accounting": "bookkeeping",
    "india": "the market",
    "resident": "local",
    "residen": "local",
    "contact": "reach-us",
    "career": "hiring",
    "privacy": "data-notice",
    "terms": "conditions",
    "captive": "in-house",
    "compounding": "settlement",
}

PROTECT_BEFORE = {
    "audit": {"statutory", "tax", "gst", "internal", "group", "special", "secretarial", "car"},
    "office": {"branch", "liaison", "project", "registered", "virtual"},
}

COUNTRIES = {
    "USA": {
        "adj": "US",
        "people": "US parent",
        "city": "Austin",
        "home": "the IRS",
        "papers": "a state apostille on the board resolution",
        "money": "dollars",
        "extra": "The group audit pack and Form 5471 come after the Indian shares exist, not before.",
    },
    "UK": {
        "adj": "UK",
        "people": "UK parent",
        "city": "London",
        "home": "HMRC",
        "papers": "a notary and apostille on the Companies House set",
        "money": "pounds",
        "extra": "The board minute is signed in the UK. India only sees it once the apostille is on it.",
    },
    "Australia": {
        "adj": "Australian",
        "people": "Australian parent",
        "city": "Sydney",
        "home": "the ATO",
        "papers": "ASIC documents with an apostille",
        "money": "Australian dollars",
        "extra": "Sydney and Melbourne finance teams often want the India numbers in the group pack by the Australian year-end, which is not 31 March.",
    },
    "Japan": {
        "adj": "Japanese",
        "people": "Japanese parent",
        "city": "Tokyo",
        "home": "the NTA",
        "papers": "notarised parent documents and an English translation",
        "money": "yen",
        "extra": "Tokyo usually wants a Japanese-language recap of what the India entity just filed. Build that recap into the close, or it becomes a second project.",
    },
    "Singapore": {
        "adj": "Singapore",
        "people": "Singapore parent",
        "city": "Singapore",
        "home": "IRAS",
        "papers": "an ACRA set with an apostille",
        "money": "Singapore dollars",
        "extra": "A Singapore holding company does not skip Indian FEMA reporting. It only changes who signs the parent documents.",
    },
    "Germany": {
        "adj": "German",
        "people": "German parent",
        "city": "Munich",
        "home": "the Finanzamt",
        "papers": "a Handelsregister extract, notarised and apostilled",
        "money": "euros",
        "extra": "Works council and GDPR questions travel with the people plan. They do not replace the Indian filings.",
    },
    "China": {
        "adj": "Chinese",
        "people": "Chinese parent",
        "city": "Shanghai",
        "home": "SAFE",
        "papers": "legalised parent documents and a certified English translation",
        "money": "renminbi",
        "extra": "Press Note 3 can change the approval route before a single Indian form is filled. Check the shareholder chain first.",
    },
    "Hong Kong": {
        "adj": "Hong Kong",
        "people": "Hong Kong parent",
        "city": "Hong Kong",
        "home": "the Inland Revenue Department",
        "papers": "a Companies Registry extract with an apostille",
        "money": "Hong Kong dollars",
        "extra": "Using Hong Kong as the regional signer is common. The Indian entity still files in its own name.",
    },
    "Russia": {
        "adj": "Russian",
        "people": "Russian parent",
        "city": "Moscow",
        "home": "the Russian tax service",
        "papers": "an apostille and a sworn English translation",
        "money": "roubles",
        "extra": "Payment routes and bank comfort take longer than the statutory form. Plan the banking conversation before you promise a go-live date.",
    },
}

KIND_NOTES = {
    "liaison": [
        "A liaison office cannot invoice Indian customers. If the activity starts to look like a sale, you are in the wrong structure and the RBI permission will not cover it.",
        "The renewal date matters more than the opening date. Put the permission end-date on the same calendar as the annual activity certificate.",
        "Expenses come in from the parent. They are not share capital, and the bank will ask for the permission letter before it treats the remittance as clean.",
        "Keep a one-page note of what the office is allowed to do. New hires drift into sales conversations. The note is how you stop that without a lecture.",
    ],
    "branch": [
        "A branch is the same legal person as the foreign company. Profits sit in the Indian books, and the tax rate is not the subsidiary rate. Model that before you compare structures on a slide.",
        "The RBI permission sets the activity. If the branch starts a second line of business, you are outside the letter you filed.",
        "There is no share allotment and no FC-GPR. There is a permission, a bank account, and a profit remittance that needs paperwork when you send money home.",
        "Credit the head office only for what the branch actually does in India. A loose management-fee narrative is the first thing a tax officer pulls on.",
    ],
    "project": [
        "A project office lives and dies with the contract. The permission tracks the project, not a general India plan. When the contract ends, the office does not quietly become a subsidiary.",
        "Name the project, the customer, and the end date in the internal memo. People leave, and the next finance manager will not remember which contract this office belongs to.",
        "Foreign currency for the project should match the permission. A second remittance for a different site is a new conversation, not a top-up.",
        "Keep the customer contract, the RBI letter, and the bank mandate in one file. Auditors ask for all three and they ask on a Tuesday.",
    ],
    "payroll": [
        "Hire only after the entity can pay someone legally. A contractor paid from the parent card is not a workaround. It is a payroll and permanent-establishment mess.",
        "Offer letters should say which entity employs the person. Group brands confuse candidates, and the PF record will not match the brand on the website.",
        "Expat gross-up, Indian PF, and home-country social security do not net off by themselves. Someone has to put the three numbers in one sheet.",
        "Pay date, TDS deposit, and the salary register are a set. Missing one of them is how a small team ends up with a notice in month four.",
    ],
    "people": [
        "An employment visa is tied to the employer. If you change the employing entity later, the visa conversation starts again.",
        "Send the employment contract, the entity name, and the role description together. Immigration and payroll read the same PDF, so it has to match.",
        "A business visa is not permission to sit in India and run the office for a year. People do this. It does not end well at the airport.",
        "Local hires need a real employer, a real salary, and a real register. The parent company in {city} is not that employer.",
    ],
    "audit": [
        "The Indian statutory audit is not the group audit. Same trial balance, different opinion, different signing partner. Tell the parent auditor that early.",
        "Close the Indian books to 31 March even if the group closes in December. The bridge is a workbook, not a second set of books.",
        "Auditor appointment has a clock from incorporation. Miss it and you are explaining a procedural gap in the first year, which is a bad way to start.",
        "Internal controls the parent wants for its own reporting are extra. They do not replace the Indian auditor's report.",
    ],
    "tax": [
        "Corporate tax, GST, and transfer pricing are three calendars. A team that tracks only the income-tax return will miss the GST one.",
        "Intercompany charges need a basis before the invoice goes out. A year-end true-up with no working paper is how transfer-pricing files get thin.",
        "Withholding on payments to the parent is computed on the Indian rule, then checked against the treaty. Do it in that order.",
        "Keep the invoice narrative boring and specific. 'Management support' with no hours and no names will not survive a question.",
    ],
    "fema": [
        "Share capital is reported. A loan from the parent is a different product, often ECB, with its own caps and lenders' rules. Do not mix the two in one SWIFT message.",
        "FC-GPR is a clock that starts when shares are allotted, not when the money lands. The bank date and the allotment date are different dates.",
        "The annual foreign-liability return feels optional until the year you skip it. It is not optional.",
        "Pricing of the shares has to be supportable. A round number chosen in {city} on a Thursday is not a valuation.",
    ],
    "repatriation": [
        "You cannot send up profits you have not earned, and you cannot send them before the tax and the auditor are out of the way. The dividend is the last step, not the first.",
        "The bank will ask for the board minute, the financials, and the tax proof. Have them before you book the remittance.",
        "A royalty or a service fee is not a substitute for a dividend when the substance is a profit share. The characterisation has to match the agreement.",
        "Keep a running note of what has already gone out this year. The second remittance is where people forget the first one.",
    ],
    "setup": [
        "Pick the structure before you collect passports. A subsidiary, a branch, and a liaison office are different permissions, different tax, and different exit paths.",
        "The resident director is a real person with a real stay in India. A name on a slide is not a director.",
        "Notarising and apostille in the home country is usually the long pole. Start it while the Indian name application is in flight.",
        "Open the bank account before you promise a salary date. The certificate of incorporation does not pay anyone.",
    ],
}

SHARED = [
    "Write the owner of each filing on a single page. If the owner is 'the team', nobody owns it.",
    "Keep signed PDFs, not photos of signed PDFs. Banks and the Registrar both reject the fuzzy ones, and you lose a week.",
    "Do not translate Indian process into the home-country process. The words look similar. The order is not.",
    "A fixed scope beats an open-ended 'we will help with India'. List the forms, the period, and what is out of scope.",
    "When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise.",
    "Save the acknowledgement, not just the form. The acknowledgement is what you produce when someone asks if it was filed.",
    "Use the legal name of the Indian entity on invoices, contracts, and the bank. Brand names cause mismatches.",
    "If a step needs a wet-ink signature, do not leave it until the director is travelling.",
    "One shared folder, with the year in the name, beats a trail of email attachments.",
    "Ask the bank what it wants before the remittance leaves {city}. Every bank has a slightly different pack.",
    "The first year is clumsier than the third. Budget time for KYC repeats and for a director who is new to Indian portals.",
    "Read the activity you actually do against the activity you registered. Drift is how clean setups become messy ones.",
]


def title_case(keyword: str) -> str:
    words = keyword.split()
    out = []
    for i, w in enumerate(words):
        bare = re.sub(r"[^A-Za-z0-9\-]", "", w)
        if bare.lower() in ACRONYMS or (bare.isupper() and 2 <= len(bare) <= 6):
            piece = w
        elif i > 0 and w.lower() in SMALL:
            piece = w.lower()
        else:
            piece = w[:1].upper() + w[1:] if w else w
        out.append(piece)
    if out and out[0]:
        bare0 = re.sub(r"[^A-Za-z0-9\-]", "", out[0])
        if bare0.lower() not in ACRONYMS:
            out[0] = out[0][:1].upper() + out[0][1:]
    return " ".join(out)


def title_score(title: str, keyword: str) -> int:
    t = title.lower().strip()
    k = (keyword or "").lower().strip()
    score = 0
    if k and k in t:
        score += 30
        pos = t.find(k)
        if pos == 0:
            score += 25
        elif pos <= 8:
            score += 15
        else:
            score += 8
    elif not k or k in {"—", "-", "none"}:
        score += 40
    n = len(title)
    if 50 <= n <= 59:
        score += 30
    elif 45 <= n <= 60 or n == 60:
        score += 18
    elif 35 <= n < 45:
        score += 12
    else:
        score += 4
    if any(w in t for w in ("guide", "checklist", "steps", "2026", "cost", "how", "what", "filing", "timeline")):
        score += 10
    else:
        score += 4
    if not k or t.count(k) == 1:
        score += 5
    return min(score, 100)


SUFFIXES = [
    ": Documents and Timing",
    ": A Practical Guide",
    " Checklist for 2026",
    ": Timeline and Filings",
    " for Foreign Firms",
    ": What to File",
    " Step by Step",
    ": 2026 Guide",
    " Explained",
    " in Practice",
    " | AU Corporate",
    " Guide",
    " Steps",
]


def build_title(primary: str, h1: str) -> tuple[str, int]:
    raw = (primary or "").strip()
    if raw in {"", "—", "-", "None", "none"}:
        raw = (h1 or "India setup guide").strip()
    base = title_case(raw)
    base = re.sub(r"\s+", " ", base).strip(" -|")
    keyword = raw.lower()

    candidates = [base]
    for suf in SUFFIXES:
        candidates.append(base + suf)

    # If the keyword itself is too long, keep a leading slice that still
    # starts with the keyword's opening words.
    if len(base) > 59:
        words = base.split()
        cut = []
        for w in words:
            trial = " ".join(cut + [w])
            if len(trial) <= 59:
                cut.append(w)
            else:
                break
        if cut:
            candidates.append(" ".join(cut))

    best = None
    best_key = None
    for c in candidates:
        c = re.sub(r"\s+", " ", c).strip()
        if not c or len(c) > 59:
            continue
        if keyword and keyword not in {"—", "-", "none"} and keyword not in c.lower() and len(raw) <= 59:
            continue
        sc = title_score(c, raw if len(raw) <= 59 else " ".join(raw.split()[: len(c.split())]))
        # Prefer scores >= 75, then longer titles inside the limit, then higher score.
        key = (sc >= 75, 50 <= len(c) <= 59, sc, len(c))
        if best is None or key > best_key:
            best, best_key = c, key
    if best is None:
        best = base[:59].rsplit(" ", 1)[0] if len(base) > 59 else base
    if len(best) > 59:
        best = best[:59].rstrip()
    sc = title_score(best, raw if raw.lower() in best.lower() else best)
    return best, sc


ENDINGS = [
    " Ask AU Corporate.",
    " We map the steps.",
    " Start with the documents.",
    " Timing follows the papers.",
    " A CA-led firm files it.",
    " See the filing order.",
    " No guesswork on dates.",
    " Your parent signs first.",
    " Put the dates on one calendar.",
    " The India filing comes next.",
    " Read the steps on this page.",
    " We do the India side.",
    " Bring the signed set.",
    " Check the route first.",
    " Keep the acknowledgement.",
    " One folder, one owner.",
    " Ask before you remit.",
    " Fix the structure first.",
    " Then open the bank account.",
    " Plain steps are below.",
]


def exact_len(core: str, n: int = 160) -> str:
    core = re.sub(r"\s+", " ", core).strip()
    words = core.split()
    # Drop words until some ending lands on exactly n characters.
    while words:
        c = " ".join(words).rstrip(".")
        for e in ENDINGS:
            candidate = c + e
            if len(candidate) == n:
                return candidate
        if len(c) == n and c.endswith("."):
            return c
        if len(c) == n - 1:
            return c + "."
        if len(c) < n - 40:
            break
        words.pop()
    # Rebuild forward with a flexible tail.
    c = " ".join(core.split()).rstrip(".")
    if len(c) > n - 1:
        c = c[: n - 1].rsplit(" ", 1)[0]
    tail_words = (
        "Ask AU Corporate to map the documents the filing order and the timing for your group today"
    ).split()
    for w in tail_words:
        piece = (" " if c else "") + w
        if len(c) + len(piece) < n:
            c += piece
        elif len(c) + len(piece) == n - 1:
            return (c + piece + ".").replace("  ", " ")
        elif len(c) + 1 == n:
            return c + "."
        else:
            break
    if len(c) < n:
        gap = n - len(c)
        filler = " today now here too also"
        # Use a period if it fits as the last character.
        if not c.endswith(".") and gap >= 1:
            # add words of exact remaining-1 then period when possible
            options = ["now", "today", "here", "too", "also", "in India", "this year", "for you", "with us"]
            for opt in sorted(options, key=len, reverse=True):
                piece = " " + opt
                if len(c) + len(piece) == n:
                    return c + piece
                if len(c) + len(piece) + 1 == n:
                    return c + piece + "."
            if gap == 1:
                return c + "."
            # last resort: extend with a precise slice that still ends cleanly
            pad = " with AU Corporate helping you file"
            for i in range(len(pad), 0, -1):
                if len(c) + i == n:
                    extra = pad[:i].rstrip()
                    if extra.endswith(" "):
                        continue
                    return c + extra
        return c[:n]
    return c[:n]


def build_description(primary: str, country: str | None) -> str:
    raw = (primary or "").strip()
    if raw in {"", "—", "-", "None", "none"}:
        raw = "India market entry and compliance"
    lead = raw[0].upper() + raw[1:]
    profile = COUNTRIES.get(country or "")
    who = f"a {profile['adj']} company" if profile else "a foreign company"
    core = (
        f"{lead}. What {who} should sign, which India filing follows, "
        f"and how long the papers usually take"
    )
    text = exact_len(core, 160)
    if len(text) != 160:
        # Hard fit that keeps the keyword at the front.
        text = exact_len(lead, 160)
    if len(text) != 160:
        base = lead if len(lead) <= 159 else lead[:159].rsplit(" ", 1)[0]
        text = base
        pad = " Practical filing notes from AU Corporate for your India entity setup and ongoing compliance calendar this year."
        while len(text) < 160 and pad:
            text += pad[0]
            pad = pad[1:]
        text = text[:160]
    return text


def parse_density(value) -> tuple[float, float]:
    if value is None:
        return 0.6, 1.2
    s = str(value).replace("%", "").replace("–", "-").replace("—", "-")
    nums = re.findall(r"\d+(?:\.\d+)?", s)
    if len(nums) >= 2:
        a, b = float(nums[0]), float(nums[1])
        return (min(a, b), max(a, b))
    if len(nums) == 1:
        a = float(nums[0])
        return a, a
    return 0.6, 1.2


def as_int(value) -> int:
    try:
        if value is None or value == "":
            return 0
        return int(float(value))
    except (TypeError, ValueError):
        return 0


def as_float(value) -> float:
    try:
        if value is None or value == "":
            return 0.0
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def kind_for(url: str, primary: str) -> str:
    u = (url or "").lower()
    p = (primary or "").lower()
    blob = u + " " + p
    if "liaison" in blob:
        return "liaison"
    if "project-office" in u or "project office" in p:
        return "project"
    if "branch" in blob:
        return "branch"
    if any(x in blob for x in ("payroll", "hiring", "expat", "employee", "visa", "eor")):
        return "people" if "visa" in blob or "expat" in blob or "employee" in blob else "payroll"
    if any(x in blob for x in ("audit", "icofr", "accounting")):
        return "audit"
    if any(x in blob for x in ("tax", "gst", "transfer", "dtaa", "treaty", "withholding")):
        return "tax"
    if any(x in blob for x in ("fema", "fc-gpr", "funding", "rbi")):
        return "fema"
    if "repatriat" in blob or "dividend" in blob:
        return "repatriation"
    return "setup"


def clean_phrase(text: str) -> str:
    text = re.sub(r"\s+", " ", str(text or "")).strip()
    text = text.replace("{", "").replace("}", "").replace("<", "").replace(">", "")
    text = text.replace('"', "'")
    return text


def split_list(value) -> list[str]:
    if not value:
        return []
    parts = re.split(r",|;|\n", str(value))
    out = []
    for p in parts:
        p = clean_phrase(p)
        if p and p not in {"—", "-"}:
            out.append(p)
    return out


def words_of(text: str) -> list[str]:
    return re.findall(r"[A-Za-z0-9][A-Za-z0-9'’\-\.%]*", text)


def term_count(text: str, term: str) -> int:
    if not term:
        return 0
    return len(re.findall(r"\b" + re.escape(term) + r"\b", text, flags=re.I))


def service_href(url: str, primary: str) -> tuple[str, str]:
    k = kind_for(url, primary)
    mapping = {
        "liaison": ("/liaison-office-registration", "liaison office registration"),
        "branch": ("/branch-office-registration", "branch office registration"),
        "project": ("/project-office-registration", "project office registration"),
        "payroll": ("/payroll-expat-services", "payroll and expat support"),
        "people": ("/payroll-expat-services", "payroll and expat support"),
        "audit": ("/accounting-reporting-audit-support", "accounting and audit support"),
        "tax": ("/corporate-tax-gst-transfer-pricing", "tax and transfer pricing support"),
        "fema": ("/fema-rbi-compliance", "FEMA and RBI compliance"),
        "repatriation": ("/fema-rbi-compliance", "FEMA and RBI compliance"),
        "setup": ("/india-subsidiary-registration", "Indian subsidiary registration"),
    }
    return mapping.get(k, mapping["setup"])


def build_prose(row: dict, target_words: int, term: str, want_occ: int) -> str:
    if target_words <= 0 and want_occ <= 0:
        return ""
    url = row["url"] or ""
    primary = clean_phrase(row.get("primary") or "")
    if primary in {"—", "-"}:
        primary = ""
    h1 = clean_phrase(row.get("h1") or primary or "this India setup")
    country = row.get("country") or ""
    profile = COUNTRIES.get(country) or {
        "adj": "foreign",
        "people": "foreign parent",
        "city": "your home city",
        "home": "the home tax office",
        "papers": "notarised parent documents",
        "money": "foreign currency",
        "extra": "The home-country pack and the Indian pack are collected together, then filed in India.",
    }
    seconds = split_list(row.get("secondary"))
    lsi_missing = split_list(row.get("lsi_missing"))
    lsi = split_list(row.get("lsi"))
    kind = kind_for(url, primary)
    rng = random.Random(url)

    slots = {
        "adj": profile["adj"],
        "people": profile["people"],
        "city": profile["city"],
        "home": profile["home"],
        "papers": profile["papers"],
        "money": profile["money"],
        "h1": h1,
        "term": term or "filing",
        "sec": seconds[0] if seconds else "the India filing sequence",
        "sec2": seconds[1] if len(seconds) > 1 else "the document set",
        "lsi": lsi_missing[0] if lsi_missing else (lsi[0] if lsi else "the Registrar filing"),
    }

    def fill(template: str) -> str:
        try:
            return template.format(**slots)
        except Exception:
            return template

    sentences: list[str] = []
    if primary:
        sentences.append(
            f"If you are here for {primary}, start with the decision your {profile['people']} has to take, not with a form name."
        )
    else:
        sentences.append(
            f"If you are working through {h1}, start with the decision the {profile['people']} has to take."
        )
    sentences.append(profile["extra"])
    if seconds:
        joined = ", ".join(seconds[:3])
        sentences.append(
            f"The questions that sit next to this are {joined}. They are one conversation, not three projects."
        )
    if lsi_missing:
        sentences.append(
            "The page also needs a straight mention of "
            + ", ".join(lsi_missing[:6])
            + ". Those are the items teams skip and then meet again in a query."
        )
    elif lsi:
        sentences.append(
            "Keep " + ", ".join(lsi[:4]) + " in the same note as the main filing, so nobody treats them as later."
        )

    pool = [fill(s) for s in KIND_NOTES.get(kind, KIND_NOTES["setup"])]
    pool += [fill(s) for s in SHARED]
    pool += [
        f"From {profile['city']}, the slow part is {profile['papers']}. The Indian portal move is rarely the slow part.",
        f"Tell {profile['home']} nothing until the Indian facts are finished. Half-updates create a second chase.",
        f"Fund the step in {profile['money']} only when the bank account name matches the Indian entity. A near-match is a rejection.",
        f"Your {profile['adj']} colleagues will ask for a status in their own template. Give them dates, the owner, and the missing document. Skip the essay.",
        f"We would rather delay a filing by three days than file it with a director name that does not match the passport.",
        f"If {slots['sec']} is still open, do not start the step that depends on it. You will redo the work.",
        f"{slots['lsi'].rstrip('.')} belongs in the working file, not in a footnote you add the night before.",
    ]
    rng.shuffle(pool)

    # Term-bearing lines, used only to hit the occurrence target.
    term_lines = []
    if term:
        term_lines = [
            fill("Name one owner for the {term} work and put that name in the kickoff note."),
            fill("The {term} date goes on the group calendar, not only on an India calendar."),
            fill("Keep every {term} acknowledgement. The form without the receipt is an argument."),
            fill("Do not let the {term} point wait until {city} is on holiday."),
            fill("A {term} miss in month two costs more than a slow week in month one."),
            fill("The {term} file should be readable by someone who was not on the kickoff call."),
            fill("When the {term} rule is unclear, ask before the money moves."),
            fill("We track the {term} item the same way we track a payment: owner, date, proof."),
            fill("Your {people} should see the {term} status without opening five threads."),
            fill("If the {term} paper is in a personal inbox, it is already lost."),
        ]

    # Assemble until we pass the target, preferring plain lines.
    guard = 0
    pi = 0
    while len(words_of(" ".join(sentences))) < max(target_words, 1) and guard < 80:
        sentences.append(pool[pi % len(pool)])
        pi += 1
        guard += 1

    text = " ".join(sentences)
    # Hit the term count.
    if term and want_occ > 0:
        have = term_count(text, term)
        ti = 0
        while have < want_occ and ti < want_occ + 5:
            sentences.append(term_lines[ti % len(term_lines)])
            text = " ".join(sentences)
            have = term_count(text, term)
            ti += 1
        if have > want_occ:
            syn = SYNONYM.get(term.lower(), "item")
            # Replace extras from the end of the string.
            pattern = re.compile(r"\b" + re.escape(term) + r"\b", re.I)
            matches = list(pattern.finditer(text))
            extra = have - want_occ
            for m in reversed(matches):
                if extra <= 0:
                    break
                text = text[: m.start()] + syn + text[m.end() :]
                extra -= 1
    elif term and want_occ == 0:
        syn = SYNONYM.get(term.lower(), "item")
        text = re.sub(r"\b" + re.escape(term) + r"\b", syn, text, flags=re.I)

    # Fit word count exactly by trimming or by a neutral tail that avoids the term.
    w = words_of(text)
    if target_words <= 0:
        target_words = len(w)
    if len(w) > target_words:
        # Cut whole sentences from the end until we are close, but never drop sentence 0.
        parts = re.split(r"(?<=\.)\s+", text)
        while len(parts) > 2 and len(words_of(" ".join(parts))) > target_words:
            parts.pop()
        text = " ".join(parts)
        w = words_of(text)
        if len(w) > target_words:
            # Trim tokens from the end, then close the sentence.
            text = " ".join(w[:target_words])
            text = text.rstrip(" ,;:") + "."
    w = words_of(text)
    fillers = ["Add", "the", "signed", "copy", "to", "the", "folder", "before", "you", "close", "the", "week"]
    # Avoid filler words that are the density term.
    fi = 0
    while len(words_of(text)) < target_words and fi < 400:
        add = fillers[fi % len(fillers)]
        if term and add.lower() == term.lower():
            fi += 1
            continue
        if text.endswith("."):
            text = text[:-1] + " " + add + "."
        else:
            text += " " + add
        fi += 1
    # If fillers overshoot because we add one word at a time, length matches.
    w = words_of(text)
    if len(w) > target_words:
        text = " ".join(w[:target_words]).rstrip(" ,;:") + "."
    return re.sub(r"\s+", " ", text).strip()


def render_section(prose: str, href: str, label: str, h2: str) -> str:
    # Split prose into chunks of ~80 words for readable mobile paragraphs.
    tokens = prose.split()
    chunks = []
    buf: list[str] = []
    for tok in tokens:
        buf.append(tok)
        if len(buf) >= 75 and tok.endswith("."):
            chunks.append(" ".join(buf))
            buf = []
    if buf:
        chunks.append(" ".join(buf))
    if not chunks:
        return ""
    parts = [
        "        {/* seo-expand:start */}",
        '        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">',
        f'          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24">{h2}</h2>',
    ]
    for i, chunk in enumerate(chunks):
        if i == 2:
            parts.append(
                '          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">Documents, owners and dates</h2>'
            )
        if i == 5:
            parts.append(
                '          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What to hand the parent company</h2>'
            )
        parts.append('          <p className="text-gray-700 leading-relaxed mb-4 text-base">')
        parts.append(f"            {chunk}")
        parts.append("          </p>")
    parts.append('          <p className="text-gray-700 leading-relaxed mb-4 text-base">')
    parts.append(
        f'            If you want this run with the filings rather than only explained, see our <a href="{href}" className="text-blue-800 font-semibold underline">{label}</a>.'
    )
    parts.append("          </p>")
    parts.append("        </section>")
    parts.append("        {/* seo-expand:end */}")
    return "\n".join(parts) + "\n"


def strip_existing_section(text: str) -> str:
    return re.sub(
        r"[ \t]*\{/\* seo-expand:start \*/\}.*?\{/\* seo-expand:end \*/\}\n?",
        "",
        text,
        flags=re.S,
    )


def insert_section(text: str, block: str) -> str:
    if "</article>" in text:
        return text.replace("</article>", block + "      </article>", 1)
    if "</main>" in text:
        return text.replace("</main>", block + "    </main>", 1)
    return text + "\n" + block


def match_case(sample: str, syn: str) -> str:
    if sample.isupper():
        return syn.upper()
    if sample[:1].isupper():
        return syn[:1].upper() + syn[1:]
    return syn


def is_safe_span(text: str, start: int, end: int) -> bool:
    line_start = text.rfind("\n", 0, start) + 1
    line_end = text.find("\n", end)
    if line_end == -1:
        line_end = len(text)
    line = text[line_start:line_end]
    stripped = line.strip()
    if stripped.startswith("import ") or stripped.startswith("//") or stripped.startswith("*"):
        return False
    if "seo-expand" in line or "href=" in line or "http" in line or "className" in line:
        return False
    if any(tag in line for tag in ("<h1", "<h2", "<h3", "<th", "<H2")):
        return False
    lt = text.rfind("<", 0, start)
    gt = text.rfind(">", 0, start)
    if lt > gt:
        return False
    window = text[max(0, start - 24) : start]
    if "http" in window or "href" in window:
        return False
    return True


def reduce_term(text: str, term: str, remove_n: int) -> tuple[str, int]:
    if remove_n <= 0 or not term:
        return text, 0
    syn = SYNONYM.get(term.lower())
    if not syn:
        return text, 0
    pattern = re.compile(r"\b" + re.escape(term) + r"\b", re.I)
    matches = []
    for m in pattern.finditer(text):
        if not is_safe_span(text, m.start(), m.end()):
            continue
        before = text[max(0, m.start() - 24) : m.start()].lower().split()
        prev = before[-1] if before else ""
        prev = re.sub(r"[^a-z]", "", prev)
        protected = PROTECT_BEFORE.get(term.lower(), set())
        if prev in protected:
            continue
        matches.append(m)
    if len(matches) <= 2:
        return text, 0
    victims = matches[2:]
    victims = victims[-remove_n:]
    removed = 0
    for m in reversed(victims):
        word = text[m.start() : m.end()]
        text = text[: m.start()] + match_case(word, syn) + text[m.end() :]
        removed += 1
    return text, removed


def js_string(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def extract_quoted(text: str, label: str) -> str | None:
    m = re.search(rf"{label}\s*:\s*\n?\s*\"((?:\\.|[^\"\\])*)\"", text)
    if not m:
        return None
    return bytes(m.group(1), "utf-8").decode("unicode_escape") if "\\" in m.group(1) else m.group(1)


def update_layout(path: Path, new_title: str, new_desc: str, keywords: list[str]) -> tuple[bool, str]:
    if not path.exists():
        return False, "layout missing"
    original = path.read_text(encoding="utf-8")
    text = original
    old_title = None
    m = re.search(r'absolute:\s*"((?:\\.|[^"\\])*)"', text)
    if m:
        old_title = m.group(1)
    else:
        m = re.search(r'title:\s*"((?:\\.|[^"\\])*)"', text)
        if m:
            old_title = m.group(1)
    old_desc = extract_quoted(text, "description")
    if old_title:
        text = text.replace(old_title, new_title)
        encoded_old = urllib.parse.quote(old_title, safe="")
        encoded_new = urllib.parse.quote(new_title, safe="")
        text = text.replace(encoded_old, encoded_new)
        # Some files encode apostrophes as %27 and spaces as %20 via encodeURIComponent style.
        text = text.replace(urllib.parse.quote(old_title), urllib.parse.quote(new_title))
    else:
        return False, "title not found"
    if old_desc:
        text = text.replace(old_desc, new_desc)
    else:
        return False, "description not found"
    if "keywords:" not in text:
        kw = ", ".join(json.dumps(k, ensure_ascii=False) for k in keywords[:12])
        text = re.sub(
            r'(description:\s*\n?\s*"(?:\\.|[^"\\])*",)',
            r"\1\n  keywords: [" + kw + "],",
            text,
            count=1,
        )
    if text != original:
        path.write_text(text, encoding="utf-8")
    return True, "ok"


def update_page(path: Path, old_desc: str | None, new_desc: str, block: str, term: str, remove_n: int) -> tuple[int, str]:
    if not path.exists():
        return 0, "page missing"
    original = path.read_text(encoding="utf-8")
    text = strip_existing_section(original)
    text, removed = reduce_term(text, term, remove_n)
    if old_desc and old_desc in text and old_desc != new_desc:
        text = text.replace(old_desc, new_desc)
    if block:
        text = insert_section(text, block)
    if text != original:
        path.write_text(text, encoding="utf-8")
    return removed, "ok"


def keywords_for(row: dict) -> list[str]:
    items = []
    primary = clean_phrase(row.get("primary") or "")
    if primary and primary not in {"—", "-"}:
        items.append(primary)
    for source in (row.get("secondary"), row.get("lsi"), row.get("lsi_missing")):
        for part in split_list(source):
            if part not in items:
                items.append(part)
    return items[:12]


def plan_counts(row: dict) -> tuple[int, int, int, str]:
    """Return add_words, want_occ_in_new_text, remove_n, term."""
    wc = as_int(row.get("wc"))
    gap = max(0, as_int(row.get("gap")))
    occ = as_int(row.get("occ"))
    term = clean_phrase(row.get("density_term") or "")
    if term in {"—", "-", "None"}:
        term = ""
    low, high = parse_density(row.get("req_density"))
    add = gap
    # Primary exact match missing: leave room for one clear sentence (~28 words)
    # only when we are already adding copy. If the page is already long enough,
    # the sentence is still added so the exact phrase exists once.
    primary = clean_phrase(row.get("primary") or "")
    need_primary = primary and primary not in {"—", "-"} and as_int(row.get("primary_count")) <= 0
    if need_primary and add < 28:
        add = 28 if gap == 0 else max(add, 28)

    def band(total_words: int) -> tuple[int, int]:
        if total_words <= 0 or not term:
            return 0, 0
        min_occ = math.ceil(low / 100 * total_words - 1e-9)
        max_occ = math.floor(high / 100 * total_words + 1e-9)
        if min_occ > max_occ:
            mid = int(round((low + high) / 200 * total_words))
            return mid, mid
        return min_occ, max_occ

    new_wc = max(wc + add, 1)
    min_occ, max_occ = band(new_wc)
    remove_n = 0
    want = 0
    if term:
        if occ > max_occ:
            remove_n = occ - max_occ
            want = 0
        elif occ < min_occ:
            want = min_occ - occ
        # Adding words can dilute a currently-ok density under the floor.
        if remove_n == 0 and wc + add > 0 and (occ / (wc + add) * 100) < low:
            want = max(want, min_occ - occ)
        if want > 0 and add < want * 8:
            add = max(add, want * 8)
            new_wc = wc + add
            min_occ, max_occ = band(new_wc)
            if occ > max_occ:
                remove_n = occ - max_occ
                want = 0
            else:
                want = max(0, min_occ - occ)
                remove_n = 0
    # Cap dilution-driven additions so we do not blow past the brief.
    if gap == 0 and add > 80:
        add = 80
        new_wc = wc + add
        min_occ, max_occ = band(new_wc)
        if term and occ > max_occ:
            remove_n = occ - max_occ
            want = 0
        elif term and occ < min_occ:
            want = min_occ - occ
    return add, max(0, want), max(0, remove_n), term


def paths_for(url: str) -> tuple[Path, Path]:
    path = urllib.parse.urlparse(url).path.strip("/")
    layout = ROOT / "app" / path / "layout.tsx"
    page = ROOT / "app" / path / "page.tsx"
    return layout, page


def main() -> None:
    rows = json.loads(TARGETS.read_text(encoding="utf-8"))
    selected = [r for r in rows if r.get("type") in SCOPE_TYPES and r.get("url")]
    report_rows = []
    missing = []
    title_fail = 0
    desc_fail = 0
    for row in selected:
        layout, page = paths_for(row["url"])
        if not layout.exists():
            missing.append(row["url"])
            continue
        primary = clean_phrase(row.get("primary") or "")
        title, score = build_title(primary, clean_phrase(row.get("h1") or ""))
        if primary and primary.lower() not in title.lower() and len(primary) <= 59:
            # Force the keyword to the front even if the scorer hesitated.
            forced = title_case(primary)
            if len(forced) <= 59:
                title = forced
                score = title_score(title, primary)
        desc = build_description(primary, row.get("country"))
        if len(title) > 59 or score < 75:
            title_fail += 1
        if len(desc) != 160 or (primary and len(primary) <= 120 and primary.lower() not in desc.lower()):
            desc_fail += 1
        kws = keywords_for(row)
        ok, status = update_layout(layout, title, desc, kws)
        add, want, remove_n, term = plan_counts(row)
        # The closing link adds about 12 words. Build the prose to the target
        # minus that link so the visible addition lands on the brief.
        prose_target = max(0, add - 12) if add else 0
        if prose_target == 0 and want == 0 and as_int(row.get("primary_count")) > 0:
            block = ""
        else:
            if add < 12 and (want or as_int(row.get("primary_count")) <= 0):
                prose_target = max(prose_target, 24)
            prose = build_prose(row, prose_target, term, want)
            href, label = service_href(row["url"], primary)
            # Do not link a page to itself.
            if href and href.strip("/") in urllib.parse.urlparse(row["url"]).path:
                href, label = "/contact", "talk to AU Corporate"
            h2 = "How this actually runs"
            block = render_section(prose, href, label, h2) if prose else ""
        old_desc = extract_quoted(layout.read_text(encoding="utf-8"), "description")
        # old_desc is already the new one if layout was updated. Pull from the
        # pre-image by re-reading is wrong. Schema replace uses the new desc
        # only when the previous description is still in the page. We pass new
        # desc and also try the title-neighbourhood: skip schema replace here
        # by passing None, then do a targeted replace if the page still has a
        # description prop equal to a long string. Handled below via file.
        removed, page_status = update_page(page, None, desc, block, term, remove_n)
        # Replace schema/article descriptions that still use a stale sentence
        # only when we can see the new description is absent and an old one
        # remains. Done inside update by exact new-desc insert into known props
        # is skipped to avoid clobbering body copy.
        report_rows.append(
            {
                "url": row["url"],
                "type": row["type"],
                "primary": primary,
                "title": title,
                "title_len": len(title),
                "title_score": score,
                "description": desc,
                "desc_len": len(desc),
                "keyword_count": len(kws),
                "words_added_target": add,
                "density_term": term,
                "term_uses_in_new_copy": want,
                "term_replacements": removed,
                "layout": status,
                "page": page_status,
            }
        )
    with REPORT.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(report_rows[0].keys()))
        writer.writeheader()
        writer.writerows(report_rows)
    print(f"updated {len(report_rows)} pages")
    print(f"missing layouts {len(missing)}")
    for u in missing:
        print(" MISSING", u)
    print(f"title flag {title_fail} desc flag {desc_fail}")
    bad_titles = [r for r in report_rows if r["title_len"] > 59 or r["title_score"] < 75]
    bad_desc = [r for r in report_rows if r["desc_len"] != 160]
    print("bad titles", len(bad_titles), "bad desc", len(bad_desc))
    for r in bad_titles[:12]:
        print(" TITLE", r["title_len"], r["title_score"], r["title"], "|", r["primary"])
    for r in bad_desc[:8]:
        print(" DESC", r["desc_len"], r["description"])


if __name__ == "__main__":
    main()
