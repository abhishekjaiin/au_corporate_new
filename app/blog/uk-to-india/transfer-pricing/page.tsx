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

const PAGE_URL = "https://www.theaucorp.com/uk-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "what", label: "What counts as an international transaction" },
  { id: "models", label: "The common UK-to-India models and how they are priced" },
  { id: "process", label: "The annual process, in order" },
  { id: "uk-india", label: "Where the UK and Indian regimes differ" },
  { id: "audits", label: "Audits, safe harbours and advance agreements" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is transfer pricing in India?", a: "Rules requiring transactions between the Indian company and its foreign group companies to be priced as if between independent parties. They apply to services, royalties, loans, guarantees and cost sharing." },
  { q: "What is Form 48?", a: "Form 48 (previously Form 3CEB) is a Chartered Accountant's report on international transactions with associated enterprises, filed before the income tax return due date." },
  { q: "Does a small UK company need transfer pricing for its Indian subsidiary?", a: "In the UK, small and medium-sized enterprises are generally exempt, but India has no such exemption. The Indian subsidiary still needs documentation and a Form 48 report if it has international transactions with the UK group." },
  { q: "What mark-up should a captive Indian services company earn?", a: "The mark-up must be supported by benchmarking against comparable independent companies, so there is no fixed number. The range depends on the functions, risks and the comparables chosen each year." },
  { q: "Can a UK-Indian advance pricing agreement be obtained?", a: "Yes, including a bilateral agreement with HMRC. It fixes the method for several years but takes time and cost, so it suits stable, larger operations." },
  { q: "What if India adjusts the subsidiary profit?", a: "The adjustment is taxed in India. You can ask the UK for a corresponding adjustment under Article 10 of the treaty, and use the mutual agreement procedure under Article 27 if that fails." },
]

const relatedCards = [
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/uk-to-india/india-uk-dtaa" },
  { title: "What a UK Parent Must Handle on Its Own Side When It Owns an Indian Subsidiary", desc: "The UK-side tax and compliance duties of a parent with an Indian subsidiary: dividend exemption, CFC rules, foreign tax credit, UK transfer pricing, Pillar Two, and the UK bribery and failure-to-prevent-fraud laws.", href: "/uk-to-india/uk-parent-reporting" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk, talent and governance.", href: "/uk-to-india/gcc-for-uk-companies" },
  { title: "Getting Money Out of India: How a UK Parent Receives Dividends, Service Fees, Royalties and Loan Repayments", desc: "The routes a UK parent has for taking money out of its Indian subsidiary, with the Indian tax, UK tax, forms and timing for each route.", href: "/uk-to-india/repatriating-profits" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK"
        description="Transfer pricing India for UK parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. Start with the papers."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/uk-to-india" },
          { label: "Transfer Pricing for UK-Owned Indian Subsidiaries: Documentation, Methods and Audits" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing in India for UK-Owned Subsidiaries: What the Indian Rules Require and How They Differ from the UK"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between the Indian subsidiary and its UK group must be priced at arm&apos;s length,
          and India requires a transfer pricing report (Form 48) for the year even where the UK side is exempt.
          The usual model is a captive services company paid a cost-plus margin, tested against comparable
          companies. Document the services, the benefit and the margin each year, before the Indian return is
          due.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Principle", "Arm's length pricing for international transactions with associated enterprises"],
                ["Report", "Form 48 (previously Form 3CEB), a Chartered Accountant's report on international transactions, filed before the income tax return due date"],
                ["Documentation", "Required where the aggregate value of international transactions exceeds the prescribed limit (₹1 crore at the last check); master file and country-by-country reporting apply to larger groups"],
                ["Common method", "Transactional net margin method for service and captive models"],
                ["Difference from UK", "UK small and medium-sized enterprises are normally exempt from UK transfer pricing; India has no such exemption"],
                ["Penalties", "Adjustments are taxed; failure to maintain documents or file the report attracts separate penalties"],
                ["Dispute tools", "Advance pricing agreements and the mutual agreement procedure under Article 27 of the India-UK treaty"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What counts as an international transaction</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Any transaction between the Indian company and an associated enterprise outside India: services,
          intellectual property, loans, guarantees, cost allocations, secondments and share issues at below fair
          value. The definition of associated enterprise is wide, and common control by the UK group is enough.
          Even a free service or an interest-free loan is a transaction.
        </p>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The common UK-to-India models and how they are priced</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical pricing method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What the tax officer asks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Captive services company (software, finance, engineering or back office for the UK group)", "Cost plus a mark-up, tested by the transactional net margin method", "Is the cost base complete? Is the margin in the range of comparables? Who bears the risk?"],
                ["Marketing and sales support", "Cost plus or a commission", "Does the Indian team only support, or does it negotiate and conclude contracts (PE risk)?"],
                ["Distribution of UK products", "Resale price or transactional net margin", "Marketing intangibles and advertising spend borne by the Indian company"],
                ["Management and shared service charges from the UK", "Cost allocation, with the benefit test", "Did the Indian company need and receive the service? Is the allocation key reasonable?"],
                ["IP licence from the UK", "Comparable uncontrolled price or profit split", "Who developed and controls the IP? Is the royalty above what unrelated parties pay?"],
                ["Parent loan or guarantee", "Interest benchmarked to comparable loans", "Credit rating, currency and terms; guarantee fees"],
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

        <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The annual process, in order</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>List all transactions with the UK group during the Indian financial year (April to March).</li>
          <li>Check the aggregate value against the documentation limit, and the group&apos;s size against the master file and country-by-country reporting thresholds.</li>
          <li>Choose the method and run a benchmarking study of comparable independent companies.</li>
          <li>Write the local file: functional analysis, assumptions, comparables and conclusion.</li>
          <li>Have a Chartered Accountant certify Form 48 and file it before the income tax return due date.</li>
          <li>Keep the documents ready to be produced on request, usually within a short deadline, and align them with the UK intragroup agreements.</li>
        </ol>

        <h2 id="uk-india" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where the UK and Indian regimes differ</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>SME exemption:</strong> UK small and medium-sized enterprises are normally exempt from UK transfer pricing, but India applies its rules without any size exemption. Prepare for India even if the UK side needs nothing.</li>
          <li><strong>Form and timing:</strong> India requires the report to be filed with the return, with fixed documentation windows, while UK documentation is prepared to support the corporation tax return if asked.</li>
          <li><strong>Consistency:</strong> the intercompany agreement, the UK&apos;s understanding and India&apos;s benchmarking must tell the same story. A mismatch invites an adjustment and double tax.</li>
          <li><strong>Relief:</strong> if India adjusts the profit, the UK can give a corresponding adjustment under Article 10 of the treaty. Use the mutual agreement procedure under Article 27 if it does not.</li>
        </ul>

        <h2 id="audits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Audits, safe harbours and advance agreements</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Transfer pricing cases are referred to a Transfer Pricing Officer. Appeals go to the Dispute
          Resolution Panel or the Commissioner (Appeals) and the Income Tax Appellate Tribunal. Safe harbour
          rules allow certain transactions, such as some IT services, to be accepted at prescribed margins, but
          the margins and the scope change, so check the current rules. An advance pricing agreement, including
          a bilateral one with HMRC, fixes the method for several years and removes most of the audit risk for a
          captive centre with stable operations, at the cost of time and fees.
        </p>

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          We prepare Form 48 and the local file in India. Country-by-country reports are prepared by the UK
          ultimate parent; we help with the Indian notification and filing when the group report exists.
        </div>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideServiceBox path="/uk-to-india/transfer-pricing" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department (India): transfer pricing", href: "https://www.incometax.gov.in" },
            { label: "HMRC: India-UK tax convention, synthesised text", href: "https://www.gov.uk/government/publications/india-tax-treaties/2020-uk-india-synthesised-text-of-the-multilateral-instrument-and-the-1993-double-taxation-convention-in-force" },
            { label: "HMRC International Manual: transfer pricing", href: "https://www.gov.uk/hmrc-internal-manuals/international-manual" },
          ]}
        />

        <p className="mt-6">
          <Link href="/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a UK team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for transfer pricing India for UK parent companies, start with the decision a UK company has to make. The form name is the second conversation, not the first. If the parent team asks about intercompany pricing India, answer it from this same file. It is not a separate project. Keep Form 3CEB in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put APA on the checklist before the first filing, not after someone asks where it went. Companies House papers still need a notary and an apostille before India will rely on them. HMRC questions can wait until the Indian facts are finished. Once a year, read the intercompany agreements against the invoices. Contracts and billing drift apart, and the drift is what gets questioned. Corporate tax, GST and transfer pricing are three calendars.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A team that watches only the income-tax return will miss a GST date, and the GST date is monthly. Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin. Compute withholding on the Indian rule, then check the treaty. Doing it the other way round is how a rate gets applied to the wrong payment.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do. Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later. GST registration should follow the activity, not a guess in the first week. Registering too early creates returns with nothing on them.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Registering late creates a different problem. Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Keep the signed pack in one shared folder before the week ends.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/corporate-tax-gst-transfer-pricing" className="font-semibold text-blue-800 underline">tax and transfer pricing</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Need a Transfer Pricing Study for India?"
        description="Tell us your intercompany transactions with the UK parent — we'll map your transfer pricing documentation and filing obligations."
      />
    </main>
  )
}
