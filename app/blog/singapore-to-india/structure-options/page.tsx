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

const PAGE_URL = "https://www.theaucorp.com/singapore-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "compare", label: "The options side by side" },
  { id: "choose", label: "Choosing by business model" },
  { id: "private-limited", label: "Why a private limited company is the default" },
  { id: "branch-lo", label: "Branch and liaison office: when they make sense" },
  { id: "llp-gift", label: "LLP and GIFT City" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the best way for a Singapore company to enter India?", a: "For most, a wholly owned private limited company. Branches and liaison offices need RBI approval and track records. An EOR suits a first hire, and a GIFT City unit suits financial services." },
  { q: "What net worth does a Singapore company need for an Indian branch office?", a: "A net worth of at least USD 100,000 and a profit record in each of the last five years. For a liaison office the tests are USD 50,000 and three years." },
  { q: "Can a liaison office earn income in India?", a: "No. A liaison office can only liaise. It cannot invoice or earn income, and its costs are met from remittances from the parent." },
  { q: "Can a Singapore company use an Indian LLP?", a: "Yes, where the sector allows 100% FDI under the Automatic Route without performance-linked conditions. The tax treatment in Singapore needs separate review." },
  { q: "When should a Singapore company consider GIFT City?", a: "When the business is financial services, fund management, fintech or related, and serves non-resident clients or other IFSC units. It is not a substitute for an onshore subsidiary for general trading." },
  { q: "Can a Singapore parent use an Employer of Record to start?", a: "Yes, for a first few hires. The EOR is the legal employer, so control is limited, and your staff in India can still create a permanent establishment if they conclude contracts." },
]

const relatedCards = [
  { title: "Incorporating a Subsidiary in India from Singapore: Who Does What, in What Order", desc: "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.", href: "/singapore-to-india/incorporation-steps" },
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/singapore-to-india/singapore-holdco-for-india" },
  { title: "Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk", desc: "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.", href: "/singapore-to-india/gcc-for-singapore-companies" },
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/singapore-to-india/funding-and-fema" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record"
        description="Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/singapore-to-india" },
          { label: "Choosing an Indian Structure from Singapore: Subsidiary, Branch, LLP, GIFT City or EOR" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: choose the structure"
        title="Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Singapore companies enter India through a wholly owned private limited company, because it limits
          liability, can hire and invoice freely and is taxed at domestic corporate rates. A branch or liaison
          office needs RBI approval and a track record, a limited liability partnership suits some professional
          or investment cases, a GIFT City unit suits financial firms serving non-residents, and an Employer of
          Record fits a first hire. The right answer depends on whether you sell in India, deliver from India,
          or manage money from India.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Wholly owned subsidiary", "Private limited company; 100% foreign ownership in most sectors under the Automatic Route"],
                ["Branch office", "RBI approval; net worth of the Singapore company at least USD 100,000 and a profit record for the last five years"],
                ["Liaison office", "RBI approval; net worth at least USD 50,000 and a profit record for the last three years; no income-earning activity"],
                ["Project office", "For a specific contract won in India; usually set up without prior approval if conditions are met"],
                ["LLP", "Allowed with foreign investment in sectors where 100% FDI is on the Automatic Route and no performance-linked conditions apply"],
                ["GIFT City IFSC unit", "For financial services and some related services to non-residents, under IFSCA rules"],
                ["Employer of Record", "Third party employs your people in India; no entity required, not a long-term replacement"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main limits</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax outcome in India</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned subsidiary", "Sales, product development, support, captive teams", "Two directors (one resident), audit, ROC and RBI compliance", "Taxed as an Indian company at domestic rates"],
                ["Branch office", "The parent's own consultancy, trade or IT activity", "RBI approval; track-record tests; parent is directly liable", "Taxed as a foreign company at 35% plus surcharge and cess"],
                ["Liaison office", "Market research and liaison only", "No commercial activity, no invoicing; funded from Singapore", "No income; can still raise PE questions if it over-reaches"],
                ["LLP", "Professional services, some investment vehicles", "FDI conditions; fewer public forms; partner roles", "Taxed as an LLP at domestic rates; Singapore side needs review"],
                ["GIFT City IFSC unit", "Fund management, fintech, treasury, shipping finance and similar", "IFSCA licensing; business with non-residents and units in the IFSC", "IFSC tax incentives for qualifying units; FEMA rules differ"],
                ["Employer of Record", "A pilot with one to ten staff", "The EOR is the legal employer; limited control; cost per head", "EOR bears payroll tax; PE risk remains if your staff conclude contracts"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Choosing by business model</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Sell to Indian customers:</strong> a subsidiary. Customers expect an Indian invoice with GST, and an Indian entity can sign contracts and hold licences.</li>
          <li><strong>Deliver services to Singapore or the region from India:</strong> a subsidiary, usually priced on a cost-plus basis and treated as an export of services. See <Link href="/singapore-to-india/gcc-for-singapore-companies" className="text-blue-800 font-semibold hover:underline">Global Capability Centres</Link>.</li>
          <li><strong>Explore the market first:</strong> a liaison office or an EOR pilot, with a plan to convert to a subsidiary at a defined point.</li>
          <li><strong>Manage funds or run financial services:</strong> look at a GIFT City unit. Singapore financial groups already know the model, and the SGX Nifty product was migrated to the exchange in GIFT City in July 2023 as GIFT Nifty.</li>
          <li><strong>Hold several Asian businesses:</strong> consider whether a Singapore holding company should own the Indian shares. See <Link href="/singapore-to-india/singapore-holdco-for-india" className="text-blue-800 font-semibold hover:underline">Using a Singapore holding company for India</Link>.</li>
        </ul>

        <h2 id="private-limited" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a private limited company is the default</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Limited liability for the Singapore parent, except where the parent gives guarantees or directs the business.</li>
          <li>Free to hire, invoice with GST, open bank accounts and own property.</li>
          <li>Dividend repatriation is a clear, documented route under FEMA and the treaty.</li>
          <li>Share capital can be raised in stages, with FC-GPR filed for each issue.</li>
          <li>Easier to sell, restructure or wind up than a branch.</li>
        </ul>

        <h2 id="branch-lo" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Branch and liaison office: when they make sense</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          A branch lets the Singapore company carry on its own activity in India, such as consultancy, research
          or trading, but profits are taxed as a foreign company and the parent is directly liable for its
          debts. A liaison office can only liaise: it cannot earn income, and its costs are met by remittances
          from Singapore. Both need prior RBI approval through an authorised dealer bank, with the net worth and
          track-record tests listed above, and both file annual activity certificates.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Permanent establishment.</strong> A liaison office that starts negotiating or signing
          contracts becomes, in effect, a permanent establishment. Keep its remit documented and monitor staff
          behaviour.
        </div>

        <h2 id="llp-gift" className="text-2xl font-bold text-gray-900 mt-12 mb-4">LLP and GIFT City</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian LLP offers flexible governance and lighter filings than a company, and it can receive
          foreign investment where the sector allows 100% FDI through the Automatic Route with no
          performance-linked conditions. The Singapore side should check how its tax authority treats an LLP,
          because a foreign LLP may be treated as a company or as a transparent entity depending on the facts.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          A unit in the GIFT City International Financial Services Centre is regulated by the IFSCA and serves
          non-residents and other IFSC units in foreign currency. The regime, the tax holiday and the FEMA
          treatment differ from onshore India, so take specific advice before using it for anything other than
          financial services.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.iras.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRAS</a>,{" "}
          <a href="https://www.acra.gov.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">ACRA</a>{" "}
          and the{" "}
          <a href="https://www.sal.org.sg/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Singapore Academy of Law (apostilles)</a>.
        </p>

        <GuideServiceBox path="/singapore-to-india/structure-options" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/singapore-to-india/faq"
          seeAllLabel="See all 143 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India: branch and liaison offices", href: "https://www.rbi.org.in/" },
            { label: "IFSCA: International Financial Services Centres Authority", href: "https://ifsca.gov.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 21 October 2026. General information only, not legal or tax advice. Indian and Singapore
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Singapore team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for subsidiary vs branch vs liaison office in India, start with the decision a Singapore company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry structure for Singapore companies, answer it from this same file. It is not a separate project. Keep LLP vs private limited in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put tax rate on the checklist before the first filing, not after someone asks where it went. A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille. Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters. Do not hire a role whose only job is to close Indian revenue.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            That hire is the moment the office stops looking like a liaison office. Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected. If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough. When you renew, file what you actually did. A renewal that describes a different office from the one you ran is a problem you wrote yourself.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure. Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech. Fund the office with expense remittances from the parent, and keep the permission letter in the bank file. The bank will ask why the money arrived.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Keep the signed pack in one shared folder this week.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/liaison-office-registration" className="font-semibold text-blue-800 underline">liaison office registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Subsidiary, Branch, LLP or GIFT City?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Singapore parent."
      />
    </main>
  )
}
