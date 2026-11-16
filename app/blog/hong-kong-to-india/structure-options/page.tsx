import Link from "next/link"
import { Breadcrumb } from "@/components/Breadcrumb"
import { GuideHero } from "@/components/guide/GuideHero"
import { GuideAnswerBox } from "@/components/guide/GuideAnswerBox"
import { GuideTOC } from "@/components/guide/GuideTOC"
import { GuideFaqList } from "@/components/guide/GuideFaqList"
import { GuideRelatedCards } from "@/components/guide/GuideRelatedCards"
import { GuideCTA } from "@/components/guide/GuideCTA"
import { GuideServiceBox } from "@/components/guide/GuideServiceBox"
import { GuideLeadForm } from "@/components/guide/GuideLeadForm"
import { GuideSources } from "@/components/guide/GuideSources"
import { GuideArticleSchema } from "@/components/guide/GuideArticleSchema"
import { GuideCountryContext } from "@/components/guide/GuideCountryContext"

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "compare", label: "Comparison" },
  { id: "subsidiary", label: "Wholly owned subsidiary" },
  { id: "branch", label: "Branch, liaison and project offices" },
  { id: "jv", label: "Joint venture" },
  { id: "choose", label: "How to choose" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the best structure for a Hong Kong company in India?", a: "For most, a wholly owned private limited company, because it limits liability and is easy to fund and exit." },
  { q: "Can I use an LLP?", a: "In sectors with 100% automatic FDI and no performance-linked conditions, subject to the Press Note 3 approval for Hong Kong investors." },
  { q: "What do I need for a branch office?", a: "A net worth of USD 100,000 and a profit record for the preceding five years, with RBI approval." },
  { q: "What do I need for a liaison office?", a: "A net worth of USD 50,000 and a profit record for three years, with RBI approval. It cannot earn income." },
  { q: "Can a liaison office sell products?", a: "No. It can only represent the parent, promote exports and imports and communicate." },
  { q: "Is a joint venture easier?", a: "It can open access to a partner and market, but it needs strong governance terms and pricing compliance." },
  { q: "How are branches taxed?", a: "As foreign companies on Indian profits at the higher foreign company rate, with surcharge and cess; check the current rates." },
]

const relatedCards = [
  { title: "How to Incorporate a Private Limited Company in India as a Hong Kong Parent: Approval, SPICe+, Bank Account and Post-Incorporation Filings", desc: "Step-by-step route for a Hong Kong parent to set up an Indian private limited company: Press Note 3 approval, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/hong-kong-to-india/incorporation-steps" },
  { title: "Funding Your Indian Subsidiary from Hong Kong: Equity, Preference Shares, External Borrowing and FEMA Reporting", desc: "How a Hong Kong parent can fund an Indian company: equity share and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, Press Note 3 and reporting through the authorised dealer bank.", href: "/hong-kong-to-india/funding-and-fema" },
  { title: "Getting Money Out of India to a Hong Kong Parent: Dividends at 5%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Hong Kong parent receives money from an Indian subsidiary: 5% treaty withholding on dividends, 10% on interest, royalties and fees, Section 393, Forms 41, 145 and 146, Hong Kong tax treatment and the documents banks ask for.", href: "/hong-kong-to-india/repatriating-profits" },
  { title: "Exiting an Indian Subsidiary from Hong Kong: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit", desc: "How a Hong Kong parent exits or restructures an Indian business: sale of shares, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off and the treaty position.", href: "/hong-kong-to-india/exit-and-restructuring" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure for a Hong Kong Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        description="Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Structure Options in India for a Hong Kong Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: structure"
        title="Choosing an Indian Structure for a Hong Kong Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          For most Hong Kong companies the wholly owned private limited company is the practical choice:
          separate legal entity, limited liability, flexible funding and a clean exit. A liaison or branch
          office can suit a narrow purpose, but the RBI conditions are strict (a branch needs a USD 100,000 net
          worth and a five-year profit record; a liaison office USD 50,000 and three years), and the Press Note
          3 approval route applies whichever structure you pick. A joint venture adds a partner and governance
          terms. Choose on liability, tax, approval, funding and exit, not on set-up speed.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Private limited company", "Separate entity, limited liability; default choice"],
                ["LLP", "Allowed in sectors with 100% automatic FDI and no performance-linked conditions; approval still applies for Hong Kong investors"],
                ["Branch office", "Net worth USD 100,000 and 5-year profit record; limited activities; RBI approval"],
                ["Liaison office", "Net worth USD 50,000 and 3-year profit record; no commercial activity; RBI approval"],
                ["Project office", "For a specific contract; conditions on funding and approval"],
                ["Joint venture", "Shareholders' agreement with an Indian partner; sector cap and pricing rules apply"],
                ["Press Note 3", "Applies to any structure with Hong Kong or land-border ownership"],
                ["Tax difference", "Branch taxed as a foreign company at a higher rate than a domestic company (confirm the current rate); subsidiary at the domestic company rate"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Comparison</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Option</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liability</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Activities</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main drawback</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Private limited company", "Limited to share capital", "Any permitted business", "Domestic company rate; dividends taxed on distribution", "Compliance burden; two directors and shareholders"],
                ["LLP", "Limited to contribution", "Services and permitted sectors", "Taxed as a firm; no dividend distribution tax", "Less familiar to investors; FDI conditions; limited exit via shares"],
                ["Branch office", "Parent liable", "Narrow, permitted activities", "Foreign company rate on profits", "Strict RBI eligibility; Hong Kong parent exposed"],
                ["Liaison office", "Parent liable", "Representation and communication only; no income", "No Indian income; costs funded by parent", "No revenue allowed; PE risk if it exceeds its remit"],
                ["Project office", "Parent liable", "A specific contract", "Taxed as a foreign company", "Limited life; conditions on use"],
                ["Joint venture company", "Limited to share capital", "Agreed scope", "Domestic company rate", "Partner disputes; exit and deadlock terms"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="subsidiary" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Wholly owned subsidiary</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Suited to sales, services, manufacturing, GCC and trading models.</li>
          <li>Funding by equity, preference shares or compliant external commercial borrowing. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li>Profits can be repatriated as dividends after tax, subject to the treaty. See <Link href="/hong-kong-to-india/repatriating-profits" className="text-blue-800 font-semibold hover:underline">repatriating profits</Link>.</li>
          <li>Exit by share sale or buy-back. See <Link href="/hong-kong-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.</li>
        </ul>

        <h2 id="branch" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Branch, liaison and project offices</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A branch can carry out specified activities such as export and import, professional services, research, and representing the parent, but not manufacturing.</li>
          <li>A liaison office cannot earn income. All costs are met from inward remittance.</li>
          <li>A branch office is a PE of the parent, and profits are taxed in India as a foreign company.</li>
          <li>The conditions and the Press Note 3 approval make these routes slower than they look.</li>
        </ul>

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint venture</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Agree reserved matters, deadlock, transfer restrictions, non-compete and exit terms before signing.</li>
          <li>Pricing rules apply to share transfers between a Hong Kong investor and an Indian resident. See <Link href="/hong-kong-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</li>
          <li>Consider governing law and arbitration seat early. See <Link href="/hong-kong-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts, courts and arbitration</Link>.</li>
        </ul>

        <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to choose</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Start with the business model: contracts and revenue in India point to a subsidiary.</li>
          <li>Check the sector cap and the Press Note 3 route.</li>
          <li>Compare liability: a branch exposes the Hong Kong parent.</li>
          <li>Plan the exit and the repatriation route from day one.</li>
        </ol>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/structure-options" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
          seeAllLabel="See all 157 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "Ministry of Corporate Affairs (India)", href: "https://www.mca.gov.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Hong Kong team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for subsidiary vs branch vs liaison office in India, start with the decision a Hong Kong company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry structure for Hong Kong companies, answer it from this same file. It is not a separate project. Keep LLP vs private limited in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put tax rate on the checklist before the first filing, not after someone asks where it went. Hong Kong is often the regional signer. The Indian entity still files in its own name, and the Companies Registry extract still needs an apostille. Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters. Do not hire a role whose only job is to close Indian revenue.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            That hire is the moment the office stops looking like a liaison office. Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected. If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough. When you renew, file what you actually did. A renewal that describes a different office from the one you ran is a problem you wrote yourself.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure. Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech. Fund the office with expense remittances from the parent, and keep the permission letter in the bank file. The bank will ask why the money arrived.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before. Give the work a single name that both offices recognise.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project. Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list. You will need them again, and you will not want to hunt a phone. When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version. A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the parent wants a dashboard, give them five dates and a red or a green. A dashboard with forty rows is where real blockers go to hide. Keep the signed pack in one shared folder this week.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/liaison-office-registration" className="font-semibold text-blue-800 underline">liaison office registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Subsidiary, LLP, Branch or Joint Venture?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Hong Kong company and its owners."
      />
    </main>
  )
}
