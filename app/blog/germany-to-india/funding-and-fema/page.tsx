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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "equity", label: "Equity in euros" },
  { id: "debt", label: "Group loans and development-bank finance" },
  { id: "convertibles", label: "Convertible instruments" },
  { id: "reporting", label: "RBI reporting" },
  { id: "german-books", label: "In the German books" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Can a German parent send euros?", a: "Yes. The Indian bank converts them and issues the FIRC." },
  { q: "How long is there to allot shares?", a: "60 days from receipt." },
  { q: "When is FC-GPR filed?", a: "Within 30 days of allotment." },
  { q: "What is the Indian tax on interest paid to a German parent?", a: "Up to 10% under the India-Germany treaty." },
  { q: "Is interest on KfW or DEG loans taxed in India?", a: "It is reported as exempt under the treaty." },
  { q: "Is there a limit on interest deductions in India?", a: "Yes, 30% of EBITDA for debt from non-resident associated enterprises." },
  { q: "Does Press Note 3 apply to German investors?", a: "No, unless a beneficial owner is from a land-border country." },
  { q: "What is the FLA return?", a: "An annual RBI return due by 15 July." },
]

const relatedCards = [
  { title: "Repatriating Profits to Germany", desc: "Dividends and the Section 8b exemption.", href: "/germany-to-india/repatriating-profits" },
  { title: "Incorporation Steps", desc: "Before the money moves.", href: "/germany-to-india/incorporation-steps" },
  { title: "India-Germany DTAA", desc: "Treaty rates on interest.", href: "/germany-to-india/india-germany-dtaa" },
  { title: "German Parent Obligations", desc: "German tax and reporting.", href: "/germany-to-india/german-parent-obligations" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding an Indian Subsidiary from Germany: Equity, Convertible Instruments, ECB Loans and RBI Reporting"
        description="FDI funding and FEMA compliance for German companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before money moves."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Funding an Indian Subsidiary from Germany: Equity, ECB, Hermes-Covered Loans and FEMA Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Money in: funding and FEMA"
        title="Funding an Indian Subsidiary from Germany: Equity, Convertible Instruments, ECB Loans and RBI Reporting"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German parent usually funds its Indian subsidiary with equity sent in euros, allotted within 60 days at no less than fair value and reported in Form FC-GPR within 30 days. German groups also have an unusual debt option: interest on loans from KfW or DEG, and on Hermes-guaranteed loans, is reported as exempt from Indian tax under the treaty, which can make development-bank debt cheaper than an ordinary parent loan.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Currency", "EUR, converted by the Indian bank, which issues the FIRC"],
                ["Route", "Automatic Route; Press Note 3 does not apply"],
                ["Allotment", "Within 60 days of receipt"],
                ["FC-GPR", "Within 30 days of allotment"],
                ["Group loan interest", "Indian tax capped at 10% under the treaty; 30% of EBITDA deduction cap"],
                ["KfW, DEG, Hermes-guaranteed loans", "Interest reported as exempt in India under the treaty"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="equity" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Equity in euros</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Treasury remits euros from the German parent&apos;s account. The Indian bank converts at its rate and issues the FIRC. The board allots shares within 60 days at a price not below fair value, and the share count follows the rupee credit actually received, so fix the price per share before sending and let the number of shares follow.
        </p>
        <h2 id="debt" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Group loans and development-bank finance</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Source</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on interest</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Points to note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">German parent loan</th>
                <td className="border border-gray-300 p-3">Up to 10% under the treaty</td>
                <td className="border border-gray-300 p-3">ECB conditions; 30% of EBITDA interest cap; transfer pricing</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">KfW or DEG loan</th>
                <td className="border border-gray-300 p-3">Reported as exempt under the treaty</td>
                <td className="border border-gray-300 p-3">ECB conditions still apply</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Hermes-guaranteed loan</th>
                <td className="border border-gray-300 p-3">Reported as exempt under the treaty</td>
                <td className="border border-gray-300 p-3">Export-credit terms</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian bank loan with parent guarantee</th>
                <td className="border border-gray-300 p-3">Domestic interest</td>
                <td className="border border-gray-300 p-3">Guarantee fee at arm&apos;s length</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="convertibles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Convertible instruments</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Compulsorily convertible preference shares or debentures suit staged funding and joint ventures. The conversion price or formula is fixed at issue and cannot be below fair value then. Optionally convertible instruments are treated as debt and must meet the ECB rules.
        </p>
        <h2 id="reporting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">RBI reporting</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Report receipt of funds on FIRMS within 30 days.</li>
          <li>Allot within 60 days or refund within 15 more days.</li>
          <li>File FC-GPR within 30 days of allotment.</li>
          <li>File ECB returns monthly for any external loan.</li>
          <li>File the FLA return by 15 July.</li>
        </ol>
        <h2 id="german-books" className="text-2xl font-bold text-gray-900 mt-12 mb-4">In the German books</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The participation is recorded at euro cost under HGB, and IFRS where the group reports under it.</li>
          <li>Interest received on a parent loan is taxable in Germany with credit for Indian tax.</li>
          <li>Germany&apos;s own interest barrier and transfer pricing rules apply to the parent&apos;s side of the loan.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We plan the euro remittance, arrange the valuation, handle allotment and FC-GPR, and structure ECB loans, including development-bank finance.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/funding-and-fema" />
        <GuideCTA
          title="Funding your Indian subsidiary from Germany?"
          description="Tell us the amount and source, and we will map the route and filings."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "KfW Development Bank", href: "https://www.kfw.de" },
            { label: "DEG", href: "https://www.deginvest.de" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a German team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for FDI funding and FEMA compliance for German companies, start with the decision a German company has to make. The form name is the second conversation, not the first. If the parent team asks about FC-GPR filing, answer it from this same file. It is not a separate project. Keep ECB from parent in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put FIRMS portal on the checklist before the first filing, not after someone asks where it went. pricing guidelines sits on the critical path more often than people expect. Leave a line for it in the working paper. The Handelsregister extract has to be notarised and apostilled. GDPR and works-council questions travel with the people plan. They do not replace the Indian forms. If the parent is itself owned by another foreign company, draw the chain before you file.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The form asks about that chain, and guessing is visible. Keep SWIFT copies, the valuation and the board minute together. The reporting is a pack, not a single upload. A delay is cheaper to explain early. Compounding later is a process, and it is not a favour you want to need. Share capital and a loan from the parent are different products. Do not put both stories in one transfer and expect the bank to sort the label out.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The reporting clock for a share issue starts when the shares are allotted, not when the money hits the account. Keep those two dates on the memo. Price the shares in a way you can explain. A round number chosen on a Thursday afternoon is not a valuation, and it will be the number someone asks about. File the annual foreign-liability return even in a quiet year. The year you skip is the year it stops feeling optional.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Tell the bank the purpose in the same words you will use on the form. A cheerful payment reference and a formal purpose that disagree will stall the credit. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/fema-rbi-compliance" className="font-semibold text-blue-800 underline">FEMA and RBI compliance</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Funding an Indian Subsidiary from Germany?"
        description="Tell us the amount and whether it is equity or a loan, and we'll map the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
