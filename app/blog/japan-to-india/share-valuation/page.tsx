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

const PAGE_URL = "https://www.theaucorp.com/japan-to-india/share-valuation"
const PARENT_URL = "https://www.theaucorp.com/japan-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Japanese companies" },
  { id: "rule", label: "The pricing rule" },
  { id: "methods", label: "Methods valuers use" },
  { id: "when", label: "When a new valuation is needed" },
  { id: "yen", label: "Rupee valuation, yen accounting" },
  { id: "transfers", label: "Transfers between the parent and others" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Who can certify the value of shares issued to a Japanese parent?", a: "A Chartered Accountant or a SEBI-registered merchant banker, using an internationally accepted pricing method." },
  { q: "Can shares be issued to the Japanese parent at face value?", a: "At incorporation, usually yes, because face value equals fair value for a new company. Later issues must be at or above the fair value at that time." },
  { q: "Is a valuation needed for every capital increase?", a: "Yes. Each issue of shares or convertible instruments to a non-resident needs a valuation supporting the price." },
  { q: "Which method is used for an operating Indian subsidiary?", a: "Usually discounted cash flow, based on the approved business plan." },
  { q: "What if the share price is below fair value?", a: "The issue breaches FEMA pricing rules and needs to be corrected, often through compounding with the RBI." },
  { q: "Does the yen value of the investment affect the Indian price?", a: "No. The Indian price is fixed in rupees; the yen amount only decides how many shares the rupees buy." },
  { q: "Is a valuation needed when the parent sells shares to an Indian buyer?", a: "Yes. The price cannot exceed fair value, and the transfer is reported in Form FC-TRS." },
  { q: "Does the group's own impairment test replace the FEMA valuation?", a: "No. The accounting review and the FEMA certificate are separate exercises with different purposes." },
]

const relatedCards = [
  { title: "Funding and FC-GPR", desc: "The 60-day allotment and reporting clocks.", href: "/japan-to-india/funding-fema-fc-gpr" },
  { title: "ESOPs for Indian Employees", desc: "Valuation for employee share plans.", href: "/japan-to-india/esop" },
  { title: "Restructuring and Exit", desc: "Pricing on a sale or buyback.", href: "/japan-to-india/restructuring-and-exit" },
  { title: "Japan Parent Obligations", desc: "Group accounting for the investment.", href: "/japan-to-india/japan-parent-obligations" },
]

export default function ShareValuationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        description="Share valuation for FDI in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers."
        datePublished="2026-10-20"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-JP"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Japan", href: "/japan-to-india" },
          { label: "Share Valuation for Foreign Investment in India" },
        ]}
      />

      <GuideHero
        eyebrow="Fund: valuation"
        title="Share Valuation for Foreign Investment: Pricing Rules and Certificates"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          When an Indian company issues shares to its Japanese parent, the price must be at least the fair value worked out under an internationally accepted pricing method and certified by a Chartered Accountant or a SEBI-registered merchant banker. The valuation is in rupees, so it is separate from the yen value the parent books, and a new certificate is needed for each later issue or transfer.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Japan
          </Link>
        </p>

        <GuideCountryContext country="japan" topic="share-valuation" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Issue to the Japanese parent", "Price not less than fair value"],
                ["Who certifies", "A Chartered Accountant or SEBI-registered merchant banker"],
                ["Usual method", "Discounted cash flow for operating companies; net asset value for a new company with no history"],
                ["Currency", "Fair value is fixed in rupees"],
                ["Transfer from resident to the Japanese parent", "Price not less than fair value"],
                ["Transfer from the Japanese parent to a resident", "Price not more than fair value"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rule" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The pricing rule</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          FEMA protects India&apos;s capital account by setting a floor when shares go to a foreign investor and a ceiling when they come back. For a fresh issue to a Japanese parent, the company cannot issue below fair value. The valuation certificate supports Form FC-GPR and should be close in date to the issue.
        </p>
        <h2 id="methods" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Methods valuers use</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Method</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Used when</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">What drives it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Net asset value</th>
                <td className="border border-gray-300 p-3">A newly incorporated company or a holding company</td>
                <td className="border border-gray-300 p-3">Book or adjusted value of net assets</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Discounted cash flow</th>
                <td className="border border-gray-300 p-3">An operating company with a business plan</td>
                <td className="border border-gray-300 p-3">Projected cash flows, growth and discount rate</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Market multiples</th>
                <td className="border border-gray-300 p-3">Comparable listed companies exist</td>
                <td className="border border-gray-300 p-3">Earnings or revenue multiples</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a first issue at incorporation, face value usually equals fair value because the company has no history. Later rounds, after the business has grown, often need a discounted cash flow valuation using the plan the Japanese parent has approved.
        </p>
        <h2 id="when" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When a new valuation is needed</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Every further issue of shares, convertible instruments or rights to the Japanese parent.</li>
          <li>Conversion of preference shares or debentures, against the price fixed at issue.</li>
          <li>Any transfer between a resident and the Japanese parent or another non-resident.</li>
          <li>A buyback or capital reduction involving the Japanese shareholder.</li>
        </ul>
        <h2 id="yen" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rupee valuation, yen accounting</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian price is fixed in rupees, while the parent records its investment in yen at the exchange rate when it pays. Over time the two diverge with the exchange rate. Group accounting under J-GAAP or IFRS may also require its own fair value or impairment review, which is a separate exercise from the FEMA certificate and can reach a different number.
        </p>
        <h2 id="transfers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Transfers between the parent and others</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If the Japanese parent buys shares from an Indian joint venture partner, it must pay at least fair value. If it sells shares to an Indian buyer, it cannot receive more than fair value. Transfers between the parent and another non-resident, such as a regional holding company, are not priced by FEMA in the same way, but tax valuation rules may still apply.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We arrange the valuation certificate with an eligible valuer, check the price against the FEMA floor or ceiling, and file the FC-GPR or FC-TRS that the issue or transfer requires.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/japan-to-india/share-valuation" />
        <GuideCTA
          title="Issuing new shares to your Japanese parent?"
          description="Tell us the amount and timing, and we will arrange the valuation and filings."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/japan-to-india/faq"
          seeAllLabel="See all Japanese FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for Japanese parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India: Master Direction on Foreign Investment", href: "https://www.rbi.org.in" },
            { label: "Securities and Exchange Board of India", href: "https://www.sebi.gov.in" },
            { label: "Institute of Chartered Accountants of India", href: "https://www.icai.org" },
          ]}
        />

        <p className="mt-6">
          <Link href="/japan-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Japanese team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for share valuation for FDI in India, start with the decision a Japanese company has to make. The form name is the second conversation, not the first. If the parent team asks about DCF valuation FEMA, answer it from this same file. It is not a separate project. Keep registered valuer in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put Rule 11UA on the checklist before the first filing, not after someone asks where it went. pricing guidelines sits on the critical path more often than people expect. Leave a line for it in the working paper. Tokyo will want a short Japanese recap of what India just filed. Write that recap when you file, or it becomes a second project. Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The certificate of incorporation does not pay anyone. Allot the shares, then report the investment. The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment. Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out. Confirm the parent can own the shares it thinks it can own.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The sector, and the shareholder chain above the parent, sometimes change the route. Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep. Appoint a resident director who really spends the required time in India. A name on a slide is not a director, and the declaration has to be true.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole. Waiting until India asks for it is how timelines slip. Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/india-subsidiary-registration" className="font-semibold text-blue-800 underline">Indian subsidiary registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Valuing Shares for a Japanese Investment?"
        description="Tell us the purpose, whether a share issue, a transfer or an exit, and we'll map the valuation method and timeline."
      />
    </main>
  )
}
