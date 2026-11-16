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

const PAGE_URL = "https://www.theaucorp.com/singapore-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "rules", label: "The Indian rules in short" },
  { id: "services", label: "Common Singapore-India intercompany flows" },
  { id: "singapore-diff", label: "Where Singapore differs from India" },
  { id: "safe", label: "Safe harbour, APAs and disputes" },
  { id: "practice", label: "A practical annual cycle" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Does India have a small-company exemption from transfer pricing?", a: "No. Form 48 is needed for any international transaction with an associated enterprise, whatever the value. Detailed documentation is required above prescribed value thresholds, which your Indian adviser should confirm each year." },
  { q: "Does Singapore's routine support services mark-up work in India?", a: "Not automatically. IRAS accepts a defined mark-up for routine support services, but India needs its own benchmarking of the Indian entity's margin." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB, filed with the tax return under the Income-tax Act, 2025." },
  { q: "Can a Singapore parent get an advance pricing agreement for India?", a: "Yes. India has a unilateral and bilateral APA program, and a bilateral agreement involves both competent authorities." },
  { q: "Is a management fee from Singapore deductible in India?", a: "Only to the extent it is at arm's length and supported by proof that the Indian entity received a service it needed." },
  { q: "What happens if India makes a transfer pricing adjustment?", a: "The Indian income rises, penalty may apply, and the Singapore side may claim relief through the mutual agreement procedure within three years of first notice." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/singapore-to-india/india-singapore-dtaa" },
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/singapore-to-india/repatriating-profits" },
  { title: "What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.", href: "/singapore-to-india/singapore-parent-obligations" },
  { title: "Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk", desc: "How Singapore headquartered groups build captive centres in India: build-operate-transfer, captive subsidiary and hybrid models, cost-plus pricing, GST on exports, PE risk, MAS third-party rules and talent.", href: "/singapore-to-india/gcc-for-singapore-companies" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs"
        description="Transfer pricing India for Singapore parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track this year. We map the steps."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/singapore-to-india" },
          { label: "Transfer Pricing Between Singapore and India: Form 48, Benchmarking and IRAS Differences" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between a Singapore parent and its Indian subsidiary must be priced at arm&apos;s
          length for Indian tax. India has no small-company exemption: transactions above a modest threshold
          need an accountant&apos;s report in Form 48 (previously Form 3CEB) and detailed documentation, and
          penalties for failures are heavy. Singapore has its own documentation thresholds and accepts a fixed
          mark-up for routine support services, which India does not, so the two sets of papers must agree.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Arm's length rule", "Prices between related parties must match what independent parties would agree"],
                ["Form 48", "Accountant's report (previously Form 3CEB) required for any international transaction with an associated enterprise, whatever its value"],
                ["Local documentation", "Required above prescribed value thresholds; confirm the current figures with your Indian adviser"],
                ["Master file", "For groups with large consolidated revenue and large Indian transactions, in the prescribed form"],
                ["Country-by-country report", "Prepared by the ultimate parent; Singapore requires it from groups with consolidated revenue above SGD 1.125 billion"],
                ["Singapore", "Contemporaneous documentation above defined thresholds; accepted mark-up on routine support services"],
                ["Disputes", "Mutual agreement procedure under Article 27 of the treaty; bilateral APA programs in both countries"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rules" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian rules in short</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Methods:</strong> comparable uncontrolled price, resale price, cost plus, profit split and the transactional net margin method, which is the most used for service entities.</li>
          <li><strong>Benchmarking:</strong> a search of independent comparables, updated each year, supports the margin earned by the Indian entity.</li>
          <li><strong>Form 48:</strong> the accountant&apos;s report on international transactions, filed with the tax return. Under the Income-tax Act, 2025, the form names and sections are new.</li>
          <li><strong>Penalties:</strong> failure to keep documents or report transactions attracts a percentage of the transaction value, and adjustments attract penalty on the under-reported income.</li>
          <li><strong>Secondary adjustment:</strong> an upward adjustment may require the excess money to be repatriated or treated as a deemed loan.</li>
        </ul>

        <h2 id="services" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Singapore-India intercompany flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical pricing</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What India checks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian subsidiary provides software or support services to Singapore", "Cost plus a mark-up from the benchmarking", "Margin in line with comparables; export of services conditions"],
                ["Singapore provides management or IT services to India", "Cost allocation or cost plus", "Actual benefit; duplication; shareholder activity exclusion"],
                ["Intercompany loan", "Interest rate in line with credit rating and currency", "Arm's length rate; ECB ceiling; interest limitation"],
                ["Licence of brand or software", "Royalty as a percentage of sales or fixed fee", "Whether the brand adds value; benchmark; treaty rate"],
                ["Secondment of Singapore staff", "Reimbursement with or without mark-up", "PE risk and Withholding Tax on reimbursements"],
                ["Cost-sharing pool", "Allocation key based on use", "Proof of benefit"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="singapore-diff" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where Singapore differs from India</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Routine support services:</strong> IRAS accepts a fixed mark-up on a published list of routine support services without benchmarking, subject to conditions. India has no equivalent blanket rule, so the Indian entity needs its own benchmarking.</li>
          <li><strong>Documentation thresholds:</strong> Singapore requires documentation above set related-party transaction values and gross revenue; India&apos;s threshold is separate and applies to the Indian entity regardless of group size.</li>
          <li><strong>Transaction-level:</strong> India examines each type of international transaction separately; mark-ups that look acceptable in aggregate can fail on a line-by-line basis.</li>
          <li><strong>Timing:</strong> Indian transfer pricing runs on a 31 March year end. Align the year end or prepare a reconciliation.</li>
        </ul>

        <h2 id="safe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour, APAs and disputes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>India&apos;s safe harbour rules offer defined margins for certain transactions and sectors, but the conditions and the rates have been changed over time. Check the current rules before relying on them.</li>
          <li>An advance pricing agreement fixes the method for up to several years and rollback years. A bilateral APA with Singapore involves both competent authorities.</li>
          <li>If an adjustment leads to double tax, a mutual agreement procedure case can be filed within three years of first notification under Article 27 of the treaty. India has not accepted MLI mandatory arbitration.</li>
        </ul>

        <h2 id="practice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical annual cycle</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Fix the intercompany agreements before the year starts.</li>
          <li>Review actual margins at half-year and adjust the billing to stay inside the range.</li>
          <li>Run the benchmarking study and update the file after year end.</li>
          <li>Prepare Form 48 and local documentation before the filing date.</li>
          <li>Check the Singapore documentation obligations and align the numbers.</li>
          <li>Keep invoices, time records and emails that show who did what.</li>
        </ol>

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

        <GuideServiceBox path="/singapore-to-india/transfer-pricing" />
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
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "IRAS: transfer pricing", href: "https://www.iras.gov.sg/" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
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
            If you are here for transfer pricing India for Singapore parent companies, start with the decision a Singapore company has to make. The form name is the second conversation, not the first. If the parent team asks about intercompany pricing India, answer it from this same file. It is not a separate project. Keep Form 3CEB in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put arm's length on the checklist before the first filing, not after someone asks where it went. safe harbour sits on the critical path more often than people expect. Leave a line for it in the working paper. A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille. Once a year, read the intercompany agreements against the invoices.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Contracts and billing drift apart, and the drift is what gets questioned. Corporate tax, GST and transfer pricing are three calendars. A team that watches only the income-tax return will miss a GST date, and the GST date is monthly. Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin. Compute withholding on the Indian rule, then check the treaty.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Doing it the other way round is how a rate gets applied to the wrong payment. Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do. Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later. GST registration should follow the activity, not a guess in the first week.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Registering too early creates returns with nothing on them. Registering late creates a different problem. Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            You will need them again, and you will not want to hunt a phone. Keep the signed pack in one folder.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/corporate-tax-gst-transfer-pricing" className="font-semibold text-blue-800 underline">tax and transfer pricing</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Transfer Pricing Between Singapore and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your IRAS file."
      />
    </main>
  )
}
