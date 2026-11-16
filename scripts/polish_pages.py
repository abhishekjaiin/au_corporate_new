# -*- coding: utf-8 -*-
"""Second-pass SEO polish: grammatical metas and human page sections."""

from __future__ import annotations

import csv
import json
import re
import urllib.parse
from pathlib import Path

ROOT = Path(r"C:\Users\Mehak\.cursor\AU Corp")
TARGETS = ROOT / "seo-targets.json"
REPORT = ROOT / "SEO-UPDATE-LOG.csv"
SCOPE = {"Blog Post", "Sub-hub", "Country Pillar", "Service"}
SMALL = {"in", "of", "for", "and", "or", "to", "a", "an", "the", "from", "vs", "with", "on", "by", "at"}
NATIONALITY = {
    "australian", "japanese", "singapore", "german", "chinese", "russian",
    "indian", "hong", "kong", "us", "uk", "foreign", "american", "british", "spanish",
}
ACRONYMS = {
    "usa", "uk", "uae", "gst", "fema", "rbi", "roc", "dtaa", "fdi", "icofr", "pan",
    "tan", "llp", "gcc", "oidar", "ca", "agm", "sox", "eu", "fta", "ceta", "ceca",
    "nri", "oci", "eor", "ssa", "gdpr", "dpdp", "pipl", "fc-gpr", "us",
}

COUNTRIES = {
    "USA": ("US", "a US company", "Austin", "The slow piece for a US parent is the state apostille on the board resolution, not the Indian portal. Form 5471 and the group audit pack come after the Indian entity exists."),
    "UK": ("UK", "a UK company", "London", "Companies House papers still need a notary and an apostille before India will rely on them. HMRC questions can wait until the Indian facts are finished."),
    "Australia": ("Australian", "an Australian company", "Sydney", "The Australian year-end is not 31 March. If the group pack is due on the Australian calendar, build the bridge workbook before someone asks for it in June."),
    "Japan": ("Japanese", "a Japanese company", "Tokyo", "Tokyo will want a short Japanese recap of what India just filed. Write that recap when you file, or it becomes a second project."),
    "Singapore": ("Singapore", "a Singapore company", "Singapore", "A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille."),
    "Germany": ("German", "a German company", "Munich", "The Handelsregister extract has to be notarised and apostilled. GDPR and works-council questions travel with the people plan. They do not replace the Indian forms."),
    "China": ("Chinese", "a Chinese company", "Shanghai", "Check the shareholder chain for Press Note 3 before anyone drafts an Indian form. Legalised documents and a certified English translation are the usual long pole."),
    "Hong Kong": ("Hong Kong", "a Hong Kong company", "Hong Kong", "Hong Kong is often the regional signer. The Indian entity still files in its own name, and the Companies Registry extract still needs an apostille."),
    "Russia": ("Russian", "a Russian company", "Moscow", "The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process."),
}


def title_case(keyword: str) -> str:
    out = []
    words = keyword.split()
    for i, w in enumerate(words):
        bare = re.sub(r"[^A-Za-z0-9\-]", "", w).lower()
        if bare in ACRONYMS:
            piece = w.upper() if bare in {"usa", "uk", "eu", "fta", "ceta", "ceca", "gst", "fema", "rbi", "dtaa", "fdi", "icofr", "gcc", "oidar", "eor", "nri", "oci"} else w[:1].upper() + w[1:]
            if bare in ACRONYMS and w.isupper():
                piece = w
            elif bare in {"usa", "uk", "eu", "us"}:
                piece = w.upper()
            elif bare in ACRONYMS and bare.isupper() is False and w.upper() == w:
                piece = w
            else:
                # Keep known short forms uppercase
                if bare in {"gst", "fema", "rbi", "roc", "dtaa", "fdi", "icofr", "pan", "tan", "llp", "gcc", "oidar", "ca", "agm", "sox", "fta", "ceta", "ceca", "nri", "oci", "eor", "ssa", "gdpr", "dpdp", "pipl", "fc-gpr"}:
                    piece = w.upper() if "-" in w or w.isupper() or len(bare) <= 6 else w[:1].upper() + w[1:]
                    if not w.isupper() and bare not in {"fc-gpr"}:
                        piece = bare.upper() if bare != "fc-gpr" else "FC-GPR"
                    else:
                        piece = w if w.isupper() else bare.upper()
                else:
                    piece = w[:1].upper() + w[1:]
        elif i and w.lower() in SMALL:
            piece = w.lower()
        else:
            piece = w[:1].upper() + w[1:]
        out.append(piece)
    if out:
        bare0 = re.sub(r"[^A-Za-z0-9\-]", "", out[0]).lower()
        if bare0 not in ACRONYMS and bare0 not in SMALL:
            out[0] = out[0][:1].upper() + out[0][1:]
    return re.sub(r"\s+", " ", " ".join(out)).strip()


def title_score(title: str, keyword: str) -> int:
    t = title.lower().strip()
    k = (keyword or "").lower().strip()
    score = 0
    usable = k if len(k) <= 59 else ""
    # If the full keyword cannot fit, score the longest prefix that is present.
    if k and k in t:
        score += 30
        score += 25 if t.find(k) == 0 else 12
        usable = k
    elif k and t.startswith(" ".join(k.split()[:4]).lower()):
        score += 28
        score += 22
        usable = " ".join(k.split()[:4])
    n = len(title)
    score += 30 if 50 <= n <= 59 else 18 if 45 <= n <= 59 else 12 if n >= 35 else 4
    if any(w in t for w in ("guide", "checklist", "steps", "2026", "cost", "how", "what", "filing", "timeline")):
        score += 10
    if not usable or t.count(usable) == 1:
        score += 5
    return min(score, 100)


def build_title(primary: str, h1: str) -> str:
    raw = (primary or "").strip()
    if raw in {"", "—", "-", "None", "none"}:
        raw = (h1 or "India setup guide").strip()
    base = title_case(raw)
    if len(base) <= 59 and raw.lower() in base.lower():
        if 50 <= len(base) <= 59:
            return base
        pads = [
            ": Documents, Deadlines and Filing Steps",
            ": Documents, Deadlines and Next Steps",
            ": A Plain Guide for Foreign Companies",
            " for Foreign Companies: 2026 Guide",
            ": Documents, Timing and Filing Steps",
            ": What Foreign Companies Should File",
            ": Documents and Filing Deadlines",
            ": A Practical 2026 Filing Guide",
            ": Timeline, Documents and Filings",
            ": Key Steps for Foreign Companies",
            " Checklist for Foreign Companies",
            ": 2026 Guide for Foreign Firms",
            ": Documents and Deadlines",
            ": A Practical 2026 Guide",
            ": Timeline and Filings",
            ": What to File in 2026",
            " for Foreign Companies",
            ": Key Filing Steps",
            " Checklist for 2026",
            ": 2026 Filing Guide",
            ": A 2026 Guide",
            ": 2026 Guide",
            ": Key Steps",
            " in 2026",
            ": Filings",
            ": Guide",
            ": Notes",
            " Guide",
            " 2026",
        ]
        fits = []
        for pad in pads:
            cand = base + pad
            if 50 <= len(cand) <= 59 and raw.lower() in cand.lower():
                fits.append(cand)
        if fits:
            def rank(c: str) -> tuple:
                pad = c[len(base):]
                smooth = 0 if pad.startswith(":") or pad.startswith(" for") or pad.startswith(" in ") else 1
                return (smooth, abs(len(c) - 55))
            return sorted(fits, key=rank)[0]
        return base
    words = base.split()
    while words and len(" ".join(words)) > 59:
        words.pop()
    while words and (words[-1].lower() in SMALL or words[-1].lower() in NATIONALITY):
        words.pop()
    title = " ".join(words).strip()
    pads = [": 2026 Guide", ": Key Steps", " Guide", " Steps", ": Filings"]
    for pad in pads:
        cand = title + pad
        if 50 <= len(cand) <= 59:
            return cand
    if len(title) > 59:
        title = title[:59].rsplit(" ", 1)[0]
    return title


KIND_MIDDLE = {
    "liaison": "It explains what the office may do, how the parent funds expenses, and when the permission has to be renewed.",
    "branch": "It explains the RBI permission, the activity you are allowed to carry on, and how profits are sent home.",
    "project": "It explains how the permission follows one contract, what the bank will ask for, and when the office must close.",
    "payroll": "It explains who the legal employer is, how salary and PF run, and what an expat arrangement has to show.",
    "people": "It explains which visa fits the stay, who must employ the person, and which contract the authorities will read.",
    "audit": "It explains the Indian statutory audit, what the parent auditor still wants, and how to prepare the file.",
    "tax": "It explains corporate tax, GST and intercompany charges, and which calendar your finance lead should actually track.",
    "fema": "It explains how share capital is reported, how a parent loan is different, and which clock starts on allotment.",
    "repatriation": "It explains when profits can be sent home, what the bank asks for, and which document has to exist first.",
    "setup": "It explains the structure choice, the papers your parent signs, and the order of the Indian filings that follow.",
}

TAILS = [
    "",
    " Read it before you file.",
    " Start with the signed papers.",
    " AU Corporate maps the steps.",
    " Keep one owner and one folder.",
    " A CA-led firm can run the filing.",
    " Most of the wait is the home-country papers.",
    " We confirm scope before any form is filed.",
    " Put the dates on one shared calendar.",
    " Your parent should see status without a chase.",
    " Save the acknowledgement, not only the form.",
    " Do this before anyone promises a start date.",
    " The useful output is a date, an owner and the missing paper.",
    " Ask for the document list before you book a courier.",
    " A fixed scope beats an open ended India project.",
    " Check the activity you registered against the work you do.",
    " The bank pack and the filing pack should be the same set.",
    " Tell the parent the same day if a date moves.",
    " Names on the form must match the passport, letter for letter.",
    " Open the bank conversation before you promise a salary date.",
    " Use the Indian entity's legal name on every contract and invoice.",
    " Collect the parent documents while the Indian name is in process.",
    " One shared folder for the year beats a chain of email attachments.",
    " Write down who signs in the home country and who signs in India.",
    " If a step needs wet ink, do not leave it until a director is travelling.",
    " We would rather pause three days than file a director name that does not match.",
]


def kind_for(url: str, primary: str) -> str:
    blob = f"{url} {primary}".lower()
    if "liaison" in blob:
        return "liaison"
    if "project-office" in url.lower() or "project office" in primary.lower():
        return "project"
    if "branch" in blob:
        return "branch"
    if any(x in blob for x in ("visa", "expat", "employee", "relocate")):
        return "people"
    if "payroll" in blob or "hiring" in blob or "eor" in blob:
        return "payroll"
    if "audit" in blob or "accounting" in blob or "icofr" in blob:
        return "audit"
    if any(x in blob for x in ("tax", "gst", "transfer", "dtaa", "treaty")):
        return "tax"
    if any(x in blob for x in ("fema", "fc-gpr", "funding", "rbi")):
        return "fema"
    if "repatriat" in blob:
        return "repatriation"
    return "setup"


def clean(text: str) -> str:
    text = re.sub(r"\s+", " ", text or "").strip()
    return text.replace('"', "'").replace("{", "").replace("}", "").replace("<", "").replace(">", "")


DESC_STEMS = {
    "liaison": "It covers what the office may do, how expenses are funded and when you renew",
    "branch": "It covers the RBI permission, the activity limit and how profits go home",
    "project": "It covers the contract, the permission, the bank file and the closing steps",
    "payroll": "It covers the employer, the pay date, provident fund and the expat papers",
    "people": "It covers the right visa, the employer on the contract and the papers to carry",
    "audit": "It covers the Indian statutory audit, the parent pack and how to prepare the file",
    "tax": "It covers corporate tax, GST, intercompany charges and the calendar to track",
    "fema": "It covers share-capital reporting, parent loans and the clock that starts on allotment",
    "repatriation": "It covers when profits can go home, the bank pack and what must exist first",
    "setup": "It covers the structure, the papers your parent signs and the filings that follow",
}

DESC_INSERTS = [
    "",
    " for you",
    " today",
    " this year",
    " in writing",
    " in practice",
    " for your team",
    " before you file",
    " on one page",
    " with clear dates",
    " for a foreign parent",
    " without a site visit",
    " before money moves",
    " with one named owner",
    " so the dates stay honest",
    ", including the usual timing",
    " and the proof you should keep",
    " for finance and legal teams",
    " before anyone promises a date",
    ", with the bank pack included",
    " so your parent is not guessing",
    ", including who signs each paper",
    " and how long the papers usually take",
    ", written for finance leads",
    ", with the waiting time shown",
    " so the group calendar does not slip",
    ", in the order a parent can follow",
    " before the bank is asked to move money",
]


def exact_follow(n: int, kind: str) -> str:
    """A complete follow-on sentence of exactly n characters."""
    stem = DESC_STEMS.get(kind, DESC_STEMS["setup"])
    options = [stem + a + "." for a in DESC_INSERTS]
    exact = [o for o in options if len(o) == n and o.endswith(".")]
    if exact:
        exact.sort(key=lambda o: (o.count(" and"), len(o)))
        return exact[0]
    # Grow a grammatical sentence until it is at least n, then step back by
    # whole words and finish with a short closer that hits n exactly.
    closers = {
        1: ".",
        5: " now.",
        6: " too.",
        7: " today.",
        8: " in 2026.",
        9: " quickly.",
        10: " in India.",
        11: " this year.",
        12: " in writing.",
        13: " in practice.",
        14: " for your team.",
        15: " before filing.",
        16: " with clear dates.",
        17: " for your parent.",
        18: " before you file.",
        19: " on a single page.",
        20: " before money moves.",
        21: " with one named owner.",
        22: " so dates stay honest.",
        23: " for the parent company.",
        24: " including the usual timing.",
        25: " and the proof you should keep.",
    }
    body = stem
    if len(body) + 1 == n:
        return body + "."
    for closer_len, closer in sorted(closers.items()):
        room = n - closer_len
        if room < 20:
            continue
        words = body.split()
        kept = []
        for w in words:
            trial = " ".join(kept + [w])
            if len(trial) <= room:
                kept.append(w)
            else:
                break
        while kept and kept[-1].lower() in SMALL:
            kept.pop()
        if not kept:
            continue
        cand = " ".join(kept) + closer
        if len(cand) == n and cand.endswith("."):
            return cand
    # Combinations missed this length. Use the stem and a closer, then
    # report via a slightly longer grammatical sentence trimmed later.
    return stem + "."


def build_description(primary: str, country: str | None, kind: str) -> str:
    raw = (primary or "").strip()
    if raw in {"", "—", "-", "None", "none"}:
        raw = "India market entry and compliance"
    lead = clean(raw[0].upper() + raw[1:]).rstrip(".")
    stem = DESC_STEMS.get(kind, DESC_STEMS["setup"])
    short = "See the papers, the order and the timing"
    candidates = []
    for body in (stem, short):
        for insert in DESC_INSERTS:
            candidates.append(f"{lead}. {body}{insert}.")
            for extra in (" Ask AU Corporate.", " We map the steps.", " Start with the papers."):
                candidates.append(f"{lead}. {body}{insert}.{extra}")
    good = []
    for cand in candidates:
        if len(cand) != 160 or not cand.endswith("."):
            continue
        if any(x in cand for x in ("  ", "and and", ", and before", ", and so ", ", and with", ", and for")):
            continue
        last = cand[:-1].split()[-1].lower().strip(".,")
        if last in SMALL:
            continue
        if primary and primary.lower() not in cand.lower() and len(primary) <= 120:
            continue
        good.append(cand)
    if good:
        good.sort(key=lambda c: (c.count(" and"), c.count("Ask")))
        return good[0]
    # No pre-built sentence hit 160. Start from a complete sentence and add
    # short, real clauses until the character count is exact.
    text = f"{lead}. {stem}."
    if len(text) > 160:
        text = f"{lead}. See the papers, the order and the timing."
    if len(text) > 160:
        text = f"{lead}."
    atoms = [
        " in plain English",
        " with the dates named",
        " for your finance team",
        " before you send money",
        " and with one owner",
        " on a single page",
        " this year",
        " in writing",
        " carefully",
        " today",
        " here",
        " now",
    ]

    def combo(left: int, i: int, acc: str):
        if left == 0:
            return acc
        if left < 0 or i == len(atoms):
            return None
        atom = atoms[i]
        if len(atom) <= left:
            taken = combo(left - len(atom), i + 1, acc + atom)
            if taken is not None:
                return taken
        return combo(left, i + 1, acc)

    if text.endswith(".") and len(text) < 160:
        extra = combo(160 - len(text), 0, "")
        if extra:
            text = text[:-1] + extra + "."
    if len(text) != 160:
        base = f"{lead}. {stem}. Ask AU Corporate."
        if len(base) <= 160 and base.endswith("."):
            extra = combo(160 - len(base), 0, "")
            if extra is not None:
                text = base[:-1] + extra + "."
    return text


def words(text: str) -> list[str]:
    return re.findall(r"[A-Za-z0-9][A-Za-z0-9'’\-\.%]*", text)


# Practical copy. Each string is a full paragraph. Kept specific on purpose.
SHARED = [
    "Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed.",
    "Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare.",
    "Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected.",
    "When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.",
    "Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.",
    "Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team.",
    "If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month.",
    "One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.",
    "Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect.",
    "A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list.",
    "The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.",
    "Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted.",
]

MORE = [
    "Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project.",
    "Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day.",
    "Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread.",
    "Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list. You will need them again, and you will not want to hunt a phone.",
    "When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version.",
    "A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday.",
    "If the parent wants a dashboard, give them five dates and a red or a green. A dashboard with forty rows is where real blockers go to hide.",
    "Budget a week for the thing you have not thought of. In the first India setup it is usually a document in the wrong language, or a signatory who is on leave.",
    "Write the fee and the out-of-pocket items in the same note as the timeline. A timeline without a cost is how a finance controller loses trust in week six.",
    "Do not promise a customer, or a new hire, a date you do not control. Promise the date you control, and describe the date that depends on a government or a bank as a range.",
    "After each filing, write one sentence on what it unlocked. The next person should see why the paper mattered, not only that it was uploaded.",
    "If you already have an Indian contractor or a consultant on the ground, list what they have signed and in whose name. Old arrangements are the usual surprise.",
    "Keep the group's chart of accounts in mind when you open the Indian books. Rebuilding the mapping at the first close is miserable, and it is avoidable.",
    "Say no to a step that belongs to a different structure. Helpful extras are how a liaison office starts selling, or a project office starts hiring for a second client.",
    "Leave a note for the person who will do this next year. What felt obvious in month one is not obvious in month fourteen, and you may be that person.",
    "Check the registered email and the mobile number on the government portals. OTPs go there. If they go to someone who has left, the filing stops for a reason that takes a day to explain.",
    "When a PDF is password protected, put the password in the same folder in a plain text file with a dull name. Auditors do not enjoy treasure hunts, and neither will you.",
    "If the parent has a travel freeze or a hiring freeze, say so. The India plan changes when nobody can visit and nobody can be added to payroll. Pretending otherwise wastes a month.",
    "Number the documents the way the bank will number them. A covering index with ten lines saves a reviewer from opening every PDF to find the board resolution.",
    "If a translation is required, translate the document you will actually file, not an earlier draft. Version mix-ups are a quiet way to submit the wrong share capital.",
    "Put the registered office address on the invoice template before the first invoice goes out. Changing it later means a trail of documents with two addresses, and someone will pick the old one.",
    "Agree who may speak to the bank. If three people call with three versions of the purpose, the account opening slows down for a reason that has nothing to do with the paperwork.",
    "Keep a copy of what you told the parent last week. When the date moves, the explanation should start from that note, not from a reconstructed memory of the call.",
    "Do the name check, the director check and the activity check as three separate lines. Bundling them into 'KYC done' is how a mismatch survives until the filing is rejected.",
    "If the group already has an Indian entity, say whether this work is for that entity or for a new one. Teams have incorporated a second company because nobody checked the first.",
    "Write the escalation in one line: who gets told if a filing is two days from late. A policy that says 'inform management' is not an escalation.",
    "After the bank account is open, send a test description of the first inward remittance to the bank before the parent sends the money. The purpose line is easier to fix in a draft than in a live transfer.",
    "When you close the year, archive the folder and start a new one. Mixing two financial years in one directory is how an acknowledgement from last March gets attached to this March.",
    "Before you call the work finished, read the whole pack as if you were the person who has to defend it six months later. Check the legal name, the dates, the signatory and the activity against each other. If two pages disagree, fix them now. Then send the parent a short note with the acknowledgement, the next date on the calendar and the name of the person who owns that date. That note is the handover. Without it, the knowledge stays in one inbox, and the next filing starts from zero.",
    "Keep one running list of open points, with a date and a name on each line. Close a point only when the acknowledgement is in the folder. A list that lives in someone's head will not survive the first holiday. Review it on the weekly call, cross out what is done, and do not add a point that nobody owns.",
]

STEPS = {
    "setup": [
        "Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out.",
        "Confirm the parent can own the shares it thinks it can own. The sector, and the shareholder chain above the parent, sometimes change the route.",
        "Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep.",
        "Appoint a resident director who really spends the required time in India. A name on a slide is not a director, and the declaration has to be true.",
        "Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole. Waiting until India asks for it is how timelines slip.",
        "Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back.",
        "Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment. The certificate of incorporation does not pay anyone.",
        "Allot the shares, then report the investment. The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment.",
    ],
    "branch": [
        "Confirm a branch is the right vehicle. It is the same legal person as the foreign company, and the tax on its profits is not the subsidiary rate. Model that before the slide is finished.",
        "Write down the activity in one sentence. The permission will follow that sentence. A second line of business later is a new permission, not a footnote.",
        "Collect the parent documents, the accounts and the net-worth support the bank and the RBI expect. Incomplete packs sit in a queue without anyone calling you.",
        "Name the authorised people in India and the people at the parent who can instruct them. Banks get nervous when those two lists do not match.",
        "Open the bank account only after the permission letter matches the name you will print on invoices. A near-match is a rejection, not a small typo.",
        "Keep a copy of the permission with the sales team. If they sell something the letter does not allow, the problem will not show up until a customer contract is already signed.",
        "Remit profits only with the board paper, the accounts and the tax proof the bank asks for. A SWIFT message is not a substitute for that pack.",
        "Review the activity once a year against the letter. Offices drift. The annual look is cheaper than explaining the drift later.",
    ],
    "liaison": [
        "Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure.",
        "Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech.",
        "Fund the office with expense remittances from the parent, and keep the permission letter in the bank file. The bank will ask why the money arrived.",
        "Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters.",
        "Do not hire a role whose only job is to close Indian revenue. That hire is the moment the office stops looking like a liaison office.",
        "Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected.",
        "If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough.",
        "When you renew, file what you actually did. A renewal that describes a different office from the one you ran is a problem you wrote yourself.",
    ],
    "project": [
        "Tie the office to one contract. Write the customer, the site and the end date in the internal memo. People leave, and the next manager will not remember.",
        "Check that the contract allows the foreign company to do the work in India. The permission cannot rescue a contract that does not.",
        "Send only the money the permission describes. A second site, or a different customer, is a new conversation with the bank and usually a new permission.",
        "Keep the contract, the RBI letter and the bank mandate in one file. Auditors ask for all three, and they ask on a Tuesday.",
        "Hire against the project, not against a vague India plan. When the project ends, those roles end or they move into a different entity on purpose.",
        "Invoice only what the project office is allowed to invoice. A helpful extra service is how a project office starts to look like a branch.",
        "Plan the closure when you plan the opening. Surplus money, people and the bank account all need a last step. Do not discover that in the final month.",
        "If the customer extends the contract, extend the permission before the old end date. Working in the gap is the part you would rather not explain.",
    ],
    "payroll": [
        "Do not pay an India hire from a parent card or a personal account. It feels practical for a month. It is a payroll and a permanent-establishment problem after that.",
        "The offer letter should name the Indian employer. A group brand on the letter and a different company on the PF record will not survive a question.",
        "Set the pay date, the tax deposit and the salary register as one routine. Missing one of them is how a small team meets a notice in month four.",
        "Put expat gross-up, Indian provident fund and any home-country social security on one sheet. They do not net off by themselves.",
        "Contractors are not a quieter way to hire employees. If the person works like staff, treat them as staff and take the registrations that go with that.",
        "Keep contracts, ID and the monthly pay file for the year in one place. The labour inspection, when it comes, does not accept a search through inboxes.",
        "Tell the parent the monthly payroll number in the group format. Do not make a controller in another city rebuild it from Indian payslips.",
        "When someone leaves, finish the full and final settlement and the exit letters. A dangling employee on the register is a small mess that grows.",
    ],
    "people": [
        "Match the visa to the stay. A business visa is for visits. It is not permission to live in India and run the office.",
        "The employment visa follows the employer. If you later move the person to a new entity, the visa conversation starts again. Plan the employer first.",
        "Send one PDF that has the contract, the entity name and the role. Immigration and payroll both read it, so it has to be the same story.",
        "Start the visa work before the person gives notice at home. Document legalisation and appointments take longer than the slide says.",
        "Local hires need a real Indian employer. The parent company abroad is not that employer, even if it pays the group bonus.",
        "Keep passport copies, the visa and the address registration where HR can find them. Do not leave them in the person's own laptop only.",
        "Tax residence and social security are a separate note from the visa. A person can be allowed to work and still create a payroll question you have not modelled.",
        "If the assignment is short, say so in the letter. Open-ended expat letters are how a six-month plan becomes an unplanned local hire.",
    ],
    "audit": [
        "The Indian statutory audit is not the group audit. Same trial balance, different opinion, different signing partner. Say that to the parent auditor in the first call.",
        "Close the Indian books to 31 March even when the group closes in December. The bridge is a workbook. It is not a second set of books.",
        "Appoint the auditor on the clock that runs from incorporation. Missing it means the first year begins with a procedural gap, which is a poor introduction.",
        "Agree the information the parent auditor wants before the Indian fieldwork starts. A request that arrives in the last week is how teams work weekends.",
        "Internal controls the US or other parent wants for its own reporting are extra work. They do not replace the Indian auditor's report, and the Indian report does not replace them.",
        "Keep management representation letters, the trial balance and the supporting schedules in the year folder. The next audit should not begin with a treasure hunt.",
        "Do not use the bookkeeping team as the statutory auditor. Independence is not a style point. It is the condition for the opinion.",
        "If you expect a tax audit or a GST reconciliation as well, put those on the same calendar. They are related, and they are not the same appointment.",
    ],
    "tax": [
        "Corporate tax, GST and transfer pricing are three calendars. A team that watches only the income-tax return will miss a GST date, and the GST date is monthly.",
        "Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin.",
        "Compute withholding on the Indian rule, then check the treaty. Doing it the other way round is how a rate gets applied to the wrong payment.",
        "Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do.",
        "Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later.",
        "GST registration should follow the activity, not a guess in the first week. Registering too early creates returns with nothing on them. Registering late creates a different problem.",
        "Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it.",
        "Once a year, read the intercompany agreements against the invoices. Contracts and billing drift apart, and the drift is what gets questioned.",
    ],
    "fema": [
        "Share capital and a loan from the parent are different products. Do not put both stories in one transfer and expect the bank to sort the label out.",
        "The reporting clock for a share issue starts when the shares are allotted, not when the money hits the account. Keep those two dates on the memo.",
        "Price the shares in a way you can explain. A round number chosen on a Thursday afternoon is not a valuation, and it will be the number someone asks about.",
        "File the annual foreign-liability return even in a quiet year. The year you skip is the year it stops feeling optional.",
        "Tell the bank the purpose in the same words you will use on the form. A cheerful payment reference and a formal purpose that disagree will stall the credit.",
        "If the parent is itself owned by another foreign company, draw the chain before you file. The form asks about that chain, and guessing is visible.",
        "Keep SWIFT copies, the valuation and the board minute together. The reporting is a pack, not a single upload.",
        "A delay is cheaper to explain early. Compounding later is a process, and it is not a favour you want to need.",
    ],
    "repatriation": [
        "You can send profits you have earned, after the tax and the audit steps that apply. You cannot send a number because the parent would like the cash this quarter.",
        "Decide whether the payment is a dividend, a royalty or a service fee before you draft the bank request. The label has to match the agreement.",
        "The bank will ask for the board minute, the financials and the tax proof. Collect them before you book the remittance, not after the bank asks.",
        "Keep a running note of what has already gone out this year. The second remittance is where people forget the first one.",
        "Do not use a service fee as a quiet dividend. If the substance is a share of profit, call it that and take the steps that go with a dividend.",
        "Check the withholding on the way out. The gross the parent expects and the net that arrives are different numbers, and someone has to explain the gap.",
        "Currency and the purpose code should match the paper. A mismatch looks small on the form and large to the bank.",
        "After the money lands, file the note back to the India board pack. The next year's auditor will ask where it went.",
    ],
}

CALLS = [
    "What is the legal name of the parent, and who above the parent actually owns it? The chain changes the route more often than the brochure does.",
    "What do you want to do in India in the next twelve months, in one sentence? If the sentence has two businesses in it, we split them before we pick a structure.",
    "Who can sign in the home country in the next three weeks? A perfect form with no signatory is a form that waits.",
    "Is there already an Indian contractor, employee or bank account? Existing arrangements are where the surprises sit.",
    "Which group calendar are we serving, the Indian year or the parent's year? The work can serve both, but only if we say so at the start.",
    "What would you like to tell your board this is going to cost and how long it will take? We would rather correct that number now.",
]


def service_link(url: str, primary: str) -> tuple[str, str]:
    mapping = {
        "liaison": ("/liaison-office-registration", "liaison office registration"),
        "branch": ("/branch-office-registration", "branch office registration"),
        "project": ("/project-office-registration", "project office registration"),
        "payroll": ("/payroll-expat-services", "payroll and expat support"),
        "people": ("/payroll-expat-services", "payroll and expat support"),
        "audit": ("/accounting-reporting-audit-support", "accounting and audit support"),
        "tax": ("/corporate-tax-gst-transfer-pricing", "tax and transfer pricing"),
        "fema": ("/fema-rbi-compliance", "FEMA and RBI compliance"),
        "repatriation": ("/fema-rbi-compliance", "FEMA and RBI compliance"),
        "setup": ("/india-subsidiary-registration", "Indian subsidiary registration"),
    }
    href, label = mapping[kind_for(url, primary)]
    path = urllib.parse.urlparse(url).path
    if href.strip("/") and href.strip("/") == path.strip("/"):
        return "/contact", "contact AU Corporate"
    return href, label


def split_list(value) -> list[str]:
    if not value:
        return []
    out = []
    for part in re.split(r",|;|\n", str(value)):
        part = clean(part)
        if part and part not in {"—", "-"} and len(part) < 80:
            out.append(part)
    return out


def keyword_sentences(row: dict, primary: str) -> list[str]:
    country = row.get("country") or ""
    profile = COUNTRIES.get(country)
    people = profile[1] if profile else "a foreign company"
    lines = []
    if primary:
        lines.append(
            f"If you are here for {primary}, start with the decision {people} has to make. The form name is the second conversation, not the first."
        )
    seconds = split_list(row.get("secondary"))
    frames = [
        "If the parent team asks about {p}, answer it from this same file. It is not a separate project.",
        "Keep {p} in the kickoff note. People use different words for it, and the papers are the same papers.",
    ]
    for phrase, frame in zip(seconds[:2], frames):
        lines.append(frame.format(p=phrase))
    missing = split_list(row.get("lsi_missing")) or split_list(row.get("lsi"))
    lsi_frames = [
        "Put {p} on the checklist before the first filing, not after someone asks where it went.",
        "{p} sits on the critical path more often than people expect. Leave a line for it in the working paper.",
    ]
    for phrase, frame in zip(missing[:2], lsi_frames):
        # Capitalise only when the frame starts with the phrase.
        text = frame.format(p=phrase)
        lines.append(text)
    return lines


def assemble(row: dict, target: int) -> str:
    if target <= 0:
        return ""
    primary = clean(row.get("primary") or "")
    if primary in {"—", "-"}:
        primary = ""
    url = row.get("url") or ""
    kind = kind_for(url, primary)
    country = row.get("country") or ""
    profile = COUNTRIES.get(country)
    rng_seed = sum(ord(c) for c in url)
    paragraphs = keyword_sentences(row, primary)
    if profile:
        paragraphs.append(profile[3])
    # Stable rotation so two countries do not open on the same step.
    steps = STEPS.get(kind, STEPS["setup"])
    shared = SHARED[:]
    calls = CALLS[:]
    rot = rng_seed % len(steps)
    steps = steps[rot:] + steps[:rot]
    rot2 = rng_seed % len(shared)
    shared = shared[rot2:] + shared[:rot2]
    paragraphs.extend(steps)
    paragraphs.extend(shared)
    paragraphs.extend(MORE)
    paragraphs.extend(calls)
    # A second, more specific pass using the city so long pages do not stall.
    if profile:
        city = profile[2]
        paragraphs.append(
            f"From {city}, the useful status update is three lines: what was filed, what is waiting, and who has the next signature. A long note that does not say those three things will be read as no update."
        )
        paragraphs.append(
            f"If a colleague in {city} wants the India work described in the group template, give them the dates and the missing document. Skip the essay. They can ask for the essay if they truly want it."
        )
    chosen = []
    count = 0
    for para in paragraphs:
        w = words(para)
        if count >= target:
            break
        if count + len(w) <= target + 12:
            chosen.append(para)
            count += len(w)
        elif count < target:
            chosen.append(para)
            count += len(w)
            break
    text = " ".join(chosen)
    have = len(words(text))
    if have > target + 18 and len(chosen) > 2:
        shortened = " ".join(chosen[:-1])
        have_short = len(words(shortened))
        if abs(have_short - target) < abs(have - target):
            text = shortened
            have = have_short
    closers = {
        6: "Keep the signed pack in one folder.",
        8: "Keep the signed pack in one shared folder.",
        10: "Keep the signed pack in one shared folder this week.",
        12: "Keep the signed pack in one shared folder before the week ends.",
        14: "Keep the signed pack in one shared folder and send the parent the date.",
        16: "Keep the signed pack in one shared folder and send the parent the date today.",
        18: "Keep the signed pack in one shared folder and send the parent the date before Friday.",
    }
    if have < target:
        need = target - have
        # Prefer an exact closer; otherwise the nearest shorter one.
        pick = None
        for n in sorted(closers):
            if n <= need:
                pick = n
        if pick and need - pick <= 6:
            text = text + " " + closers[pick]
        elif need <= 18 and need in closers:
            text = text + " " + closers[need]
    return re.sub(r"\s+", " ", text).strip()


def render(prose: str, href: str, label: str, h2: str) -> str:
    tokens = prose.split()
    chunks = []
    buf: list[str] = []
    for tok in tokens:
        buf.append(tok)
        if len(buf) >= 70 and tok.endswith("."):
            chunks.append(" ".join(buf))
            buf = []
    if buf:
        chunks.append(" ".join(buf))
    lines = [
        "        {/* seo-expand:start */}",
        '        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">',
        f'          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">{h2}</h2>',
    ]
    for i, chunk in enumerate(chunks):
        if i == 3:
            lines.append(
                '          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>'
            )
        if i == 7:
            lines.append(
                '          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>'
            )
        lines.append('          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">')
        lines.append(f"            {chunk}")
        lines.append("          </p>")
    lines.append('          <p className="text-base leading-relaxed text-gray-700 mb-4">')
    lines.append(
        f'            If you want the filings done rather than only explained, see our <a href="{href}" className="font-semibold text-blue-800 underline">{label}</a>.'
    )
    lines.append("          </p>")
    lines.append("        </section>")
    lines.append("        {/* seo-expand:end */}")
    return "\n".join(lines) + "\n"


def strip_section(text: str) -> str:
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


def extract(text: str, label: str) -> str | None:
    m = re.search(rf'{label}\s*:\s*\n?\s*"((?:\\.|[^"\\])*)"', text)
    if not m:
        m = re.search(rf'{label}\s*:\s*\n?\s*"((?:\\.|[^"\\])*)"', text)
    return m.group(1) if m else None


def current_title(text: str) -> str | None:
    m = re.search(r'absolute:\s*"((?:\\.|[^"\\])*)"', text)
    if m:
        return m.group(1)
    m = re.search(r'title:\s*"((?:\\.|[^"\\])*)"', text)
    return m.group(1) if m else None


def keywords_for(row: dict) -> list[str]:
    items = []
    primary = clean(row.get("primary") or "")
    if primary and primary not in {"—", "-"}:
        items.append(primary)
    for source in (row.get("secondary"), row.get("lsi"), row.get("lsi_missing")):
        for part in split_list(source):
            if part not in items:
                items.append(part)
    return items[:12]


def paths(url: str) -> tuple[Path, Path]:
    path = urllib.parse.urlparse(url).path.strip("/")
    return ROOT / "app" / path / "layout.tsx", ROOT / "app" / path / "page.tsx"


def as_int(value) -> int:
    try:
        return int(float(value))
    except (TypeError, ValueError):
        return 0


def main() -> None:
    rows = [r for r in json.loads(TARGETS.read_text(encoding="utf-8")) if r.get("type") in SCOPE]
    report = []
    problems = []
    for row in rows:
        layout, page = paths(row["url"])
        primary = clean(row.get("primary") or "")
        if primary in {"—", "-"}:
            primary = ""
        kind = kind_for(row["url"], primary)
        title = build_title(primary, clean(row.get("h1") or ""))
        desc = build_description(primary, row.get("country"), kind)
        score = title_score(title, primary)
        if len(title) > 59 or score < 75:
            problems.append(("title", len(title), score, title, primary))
        if len(desc) != 160 or not desc.endswith(".") or (primary and len(primary) <= 120 and primary.lower() not in desc.lower()):
            problems.append(("desc", len(desc), desc[:80], primary[:60]))
        # Layout
        text = layout.read_text(encoding="utf-8")
        old_title = current_title(text)
        old_desc = extract(text, "description")
        if old_title and old_title != title:
            text = text.replace(old_title, title)
            text = text.replace(urllib.parse.quote(old_title, safe=""), urllib.parse.quote(title, safe=""))
        if old_desc and old_desc != desc:
            text = text.replace(old_desc, desc)
        if "keywords:" not in text:
            kw = ", ".join(json.dumps(k, ensure_ascii=False) for k in keywords_for(row))
            text = re.sub(
                r'(description:\s*\n?\s*"(?:\\.|[^"\\])*",)',
                r"\1\n  keywords: [" + kw + "],",
                text,
                count=1,
            )
        layout.write_text(text, encoding="utf-8")
        # Body
        gap = max(0, as_int(row.get("gap")))
        need_primary = bool(primary) and as_int(row.get("primary_count")) <= 0
        target = gap if gap > 0 else (42 if need_primary else 0)
        # Link line is about 14 words. Build prose to the remainder.
        prose_target = max(0, target - 14)
        block = ""
        prose = ""
        if prose_target > 0 or need_primary:
            prose = assemble(row, max(prose_target, 28))
            href, label = service_link(row["url"], primary)
            h2 = "What to do with this in practice"
            if row.get("country"):
                h2 = f"What a {COUNTRIES[row['country']][0]} team should do next"
            block = render(prose, href, label, h2)
        if page.exists():
            body = strip_section(page.read_text(encoding="utf-8"))
            if old_desc and old_desc in body and desc:
                body = body.replace(old_desc, desc)
            if block:
                body = insert_section(body, block)
            # Point the article schema description at the new meta description.
            body = re.sub(
                r'(<GuideArticleSchema\b[\s\S]{0,500}?description=")([^"]*)(")',
                lambda m, d=desc: m.group(1) + d + m.group(3),
                body,
                count=1,
            )
            page.write_text(body, encoding="utf-8")
        added = len(words(prose)) + (14 if block else 0)
        report.append({
            "url": row["url"],
            "type": row["type"],
            "primary": primary,
            "title": title,
            "title_len": len(title),
            "title_score": score,
            "description": desc,
            "desc_len": len(desc),
            "word_target": target,
            "words_in_section": added,
            "kind": kind,
        })
    with REPORT.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(report[0].keys()))
        writer.writeheader()
        writer.writerows(report)
    print("pages", len(report))
    print("problems", len(problems))
    for p in problems[:25]:
        print(p)
    lens = [r["title_len"] for r in report]
    print("titles <50", sum(1 for n in lens if n < 50), "titles >59", sum(1 for n in lens if n > 59))
    print("scores <75", sum(1 for r in report if r["title_score"] < 75))
    print("desc !=160", sum(1 for r in report if r["desc_len"] != 160))
    print("desc no period", sum(1 for r in report if not r["description"].endswith(".")))
    # word closeness
    off = [r for r in report if r["word_target"] and abs(r["words_in_section"] - r["word_target"]) > 30]
    print("sections off by >30 words", len(off))
    for r in sorted(off, key=lambda x: -abs(x["words_in_section"] - x["word_target"]))[:12]:
        print(" WORD", r["word_target"], r["words_in_section"], r["url"].replace("https://www.theaucorp.com", ""))


if __name__ == "__main__":
    main()
