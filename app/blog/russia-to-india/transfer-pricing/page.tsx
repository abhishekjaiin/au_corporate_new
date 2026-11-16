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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/transfer-pricing"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "flows", label: "Russia-India flows" },
  { id: "methods", label: "Methods that fit" },
  { id: "sanctions-effects", label: "When sanctions change the flow" },
  { id: "files", label: "Indian and Russian documentation" },
  { id: "certainty", label: "Safe harbour and disputes" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which transactions with the Russian parent need transfer pricing?", a: "Services, goods, royalties, loans, guarantees and cost allocations with any group company abroad." },
  { q: "What is Form 48?", a: "The accountant's report on international transactions, previously Form 3CEB." },
  { q: "When is documentation required?", a: "When international transactions exceed ₹1 crore in the year." },
  { q: "How are Indian service subsidiaries priced?", a: "Usually at cost plus a mark-up." },
  { q: "Do sanctions affect transfer pricing?", a: "They can change routes, currencies and counterparties, which must be documented and priced consistently." },
  { q: "What royalty rate applies under the treaty?", a: "Indian tax on royalties paid to Russia is capped at 10%." },
  { q: "How are double tax disputes resolved?", a: "Through the Mutual Agreement Procedure under the treaty." },
  { q: "Do the year ends match?", a: "No. India uses 31 March and Russia the calendar year." },
]

const relatedCards = [
  { title: "Goods, Trade and Customs", desc: "Customs value and origin.", href: "/russia-to-india/goods-trade-customs-and-eaeu-fta" },
  { title: "Repatriating Profits", desc: "Paying fees and royalties.", href: "/russia-to-india/repatriating-profits" },
  { title: "India-Russia DTAA", desc: "Treaty rates and MAP.", href: "/russia-to-india/india-russia-dtaa" },
  { title: "Compliance Calendar", desc: "Report dates.", href: "/russia-to-india/compliance-calendar" },
]

export default function TransferPricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours"
        description="Transfer pricing India for Russian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. We map the steps."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Transfer Pricing for Russian Groups in India: Services, Supply Chains and Documentation" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: transfer pricing"
        title="Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Every transaction between the Indian subsidiary and its Russian parent or group companies must be priced at arm&apos;s length and documented, with Form 48 certified by a Chartered Accountant. Russian groups often have engineering, supply-chain and services flows with India, and sanctions can change how those flows are invoiced and paid, so the transfer pricing file should explain any change in route, currency or counterparty.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="transfer-pricing" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Indian law", "Sections 161 to 172 of the Income-tax Act, 2025"],
                ["Indian report", "Form 48 (previously Form 3CEB)"],
                ["Documentation threshold", "International transactions above ₹1 crore"],
                ["Russian side", "Russian transfer pricing rules apply to the parent's side of controlled transactions"],
                ["Treaty", "Mutual Agreement Procedure under the India-Russia treaty"],
                ["Year ends", "India 31 March; Russia 31 December"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="flows" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russia-India flows</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Flow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Typical method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Point to document</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Engineering or design services to the Russian group</th>
                <td className="border border-gray-300 p-3">Cost plus mark-up</td>
                <td className="border border-gray-300 p-3">Cost base and deliverables</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Equipment and spares supplied from Russia</th>
                <td className="border border-gray-300 p-3">Resale price or transactional net margin</td>
                <td className="border border-gray-300 p-3">Customs value consistency</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Licence of Russian technology</th>
                <td className="border border-gray-300 p-3">Comparable royalty</td>
                <td className="border border-gray-300 p-3">Benefit and 10% treaty rate</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Commodity or trading flows through a group company</th>
                <td className="border border-gray-300 p-3">Comparable uncontrolled price where data exists</td>
                <td className="border border-gray-300 p-3">Functions of the trading entity</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Parent loans</th>
                <td className="border border-gray-300 p-3">Market interest benchmark</td>
                <td className="border border-gray-300 p-3">ECB terms and interest cap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Methods that fit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Service subsidiaries are usually rewarded at cost plus a mark-up tested against independent service companies. Indian distributors of Russian equipment are tested on operating margin. Where a group trading company outside Russia sits in the flow, the Indian file must show what that company does and why its margin is justified.
        </p>
        <h2 id="sanctions-effects" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When sanctions change the flow</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If a supply chain is re-routed through a third country, invoiced in a different currency or paid through a different entity because of sanctions, the economic substance may stay the same while the legal form changes. Document the reason, keep pricing consistent with the functions actually performed, and make sure the change does not shift profit away from the Indian company without justification.
        </p>
        <h2 id="files" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian and Russian documentation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Prepare the Indian documentation and Form 48 by the return due date.</li>
          <li>Align margins with the Russian parent&apos;s documentation of the same transactions.</li>
          <li>Bridge the Indian 31 March year and the Russian calendar year for year-end adjustments.</li>
          <li>Keep intercompany agreements signed and up to date.</li>
        </ul>
        <h2 id="certainty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Safe harbour and disputes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          India&apos;s safe harbour rules give fixed margins for some services. Where India and Russia both tax the same profit after an adjustment, the treaty&apos;s Mutual Agreement Procedure lets the two authorities resolve it, although practical engagement can be slower in the current environment.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We benchmark Russia-India flows, prepare the Indian documentation and Form 48, and document changes in route or currency caused by sanctions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">corporate tax, GST and transfer pricing</Link> and <Link href="/accounting-reporting-audit-support" className="text-blue-800 font-semibold hover:underline">accounting, reporting and audit support</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/transfer-pricing" />
        <GuideCTA
          title="Pricing flows between India and Russia?"
          description="Tell us the transactions, and we will propose the method and file."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
          seeAllLabel="See all Russian FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Russian parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
            { label: "Federal Tax Service of Russia", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Russian team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for transfer pricing India for Russian parent companies, start with the decision a Russian company has to make. The form name is the second conversation, not the first. If the parent team asks about intercompany pricing India, answer it from this same file. It is not a separate project. Keep Form 3CEB in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put APA on the checklist before the first filing, not after someone asks where it went. The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process. Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it. Once a year, read the intercompany agreements against the invoices.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Contracts and billing drift apart, and the drift is what gets questioned. Corporate tax, GST and transfer pricing are three calendars. A team that watches only the income-tax return will miss a GST date, and the GST date is monthly. Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin. Compute withholding on the Indian rule, then check the treaty.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Doing it the other way round is how a rate gets applied to the wrong payment. Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do. Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later. GST registration should follow the activity, not a guess in the first week.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Registering too early creates returns with nothing on them. Registering late creates a different problem. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            You will need them again, and you will not want to hunt a phone. When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version. A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday. If the parent wants a dashboard, give them five dates and a red or a green.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A dashboard with forty rows is where real blockers go to hide. Budget a week for the thing you have not thought of. In the first India setup it is usually a document in the wrong language, or a signatory who is on leave. Write the fee and the out-of-pocket items in the same note as the timeline. A timeline without a cost is how a finance controller loses trust in week six.
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
        title="Transfer Pricing Between Russia and India?"
        description="Tell us the intercompany transactions, and we'll map the Indian documentation, Form 48 and how it lines up with your Russian file."
      />
    </main>
  )
}
