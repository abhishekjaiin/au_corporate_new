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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "routes", label: "The three routes" },
  { id: "flow", label: "The money flow from China" },
  { id: "chinese-points", label: "Points specific to Chinese funding" },
  { id: "valuation", label: "Pricing and valuation" },
  { id: "penalty", label: "Late filing and compounding" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How do I fund an Indian subsidiary from China?", a: "Remit equity from the parent's own account after the Press Note 3 approval and the Chinese SAFE registration, then allot shares within 60 days and file FC-GPR within 30 days of allotment." },
  { q: "Does the Chinese side need to approve the remittance?", a: "Yes. Outbound investment needs NDRC and MOFCOM approval or filing and foreign exchange registration through the bank before funds go out. Confirm with Chinese counsel." },
  { q: "What is the pricing rule for shares issued to a Chinese parent?", a: "At or above fair value, supported by a valuation from a Chartered Accountant or merchant banker." },
  { q: "Can the Indian subsidiary borrow from the Chinese parent?", a: "Yes, as an ECB, within the RBI's rules on lender, maturity and cost, and subject to the Press Note 3 and Chinese rules." },
  { q: "What happens if I miss the 60-day allotment limit?", a: "The funds must be refunded through the same channel, otherwise the receipt is a FEMA contravention to be regularised." },
  { q: "Is the FLA return required every year?", a: "Yes. The annual return on foreign liabilities and assets is due by 15 July." },
  { q: "Can funds come from a related company that is not the investor?", a: "Not safely. Remit from the approved investor's own account, to match the approval and the bank records." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "What a Chinese Parent Must Do at Home: Outbound Investment Filings, SAFE Registration and Tax Credit for Indian Tax", desc: "The Chinese-side steps for a parent investing in India: NDRC and MOFCOM outbound investment approval or filing, SAFE foreign exchange registration through the bank, state-owned enterprise approvals, export controls on technology and tax credit.", href: "/china-to-india/chinese-parent-obligations" },
  { title: "Getting Money Out of India to a Chinese Parent: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Chinese parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Chinese tax credit, scrutiny of related-party payments and the documents banks ask for.", href: "/china-to-india/repatriating-profits" },
  { title: "Compliance Calendar: Indian Deadlines and the Chinese Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Chinese parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Chinese-side reports.", href: "/china-to-india/compliance-calendar" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR"
        description="FDI funding and FEMA compliance for Chinese companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. We map the steps."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Funding the Indian Subsidiary: Equity, ECB Loans and RBI Reporting for Chinese Investors" },
        ]}
      />

      <GuideHero
        eyebrow="Money in: funding and FEMA"
        title="Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Chinese parent can fund its Indian subsidiary with equity, compulsorily convertible instruments or
          an external commercial borrowing, and each route has its own pricing, reporting and tax result. For a
          Chinese investor, funding has two extra steps: the Press Note 3 approval must be in hand, and the
          Chinese SAFE registration must allow the remittance. Once the money lands in India, shares must be
          allotted within 60 days and Form FC-GPR filed within 30 days of allotment. ₹10 lakh is about CNY
          70,000 at an indicative ₹14.30 per yuan (July 2026 rate; check the live rate before remitting).
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Equity", "Equity shares and compulsorily convertible preference shares or debentures are FDI instruments"],
                ["Pricing", "Unlisted shares issued at or above fair value, supported by a valuation from a registered valuer or Chartered Accountant"],
                ["ECB loans", "Loans from a foreign equity holder or recognised lender subject to minimum maturity, cost ceilings and registration"],
                ["Chinese side", "Approval and SAFE registration through the Chinese bank before remittance"],
                ["Indian side", "Press Note 3 approval; inward remittance certificate; purpose code"],
                ["60 / 30 clocks", "Allot within 60 days of receipt; FC-GPR within 30 days of allotment"],
                ["FLA return", "Annual return by 15 July"],
                ["Currency", "CNY converted to INR by the bank; remit in a freely convertible currency as the bank and SAFE require"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The three routes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Reporting</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax effect</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Equity share capital", "The parent subscribes for shares at or above fair value", "FC-GPR; valuation certificate", "Dividends, with Withholding Tax at the treaty rate; no deduction for the subsidiary"],
                ["Compulsorily convertible preference shares or debentures", "Fixed return, must convert to equity; pricing fixed at the start", "FC-GPR; valuation at issue", "Coupon taxed as dividend or interest depending on the instrument"],
                ["External commercial borrowing", "Loan with a minimum average maturity and an all-in cost ceiling set by the RBI", "Loan registration number; monthly returns", "Interest deductible subject to limits; Withholding Tax at the treaty rate"],
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

        <h2 id="flow" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The money flow from China</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Chinese outbound approvals and SAFE registration are complete, and the Indian Press Note 3 approval is in hand.</li>
          <li>The Chinese parent remits from its own account to the Indian company&apos;s account through the authorised dealer bank. Funds should not come from a third party.</li>
          <li>The Indian bank issues a foreign inward remittance certificate that records the purpose code and the sender. Keep it with the allotment file.</li>
          <li>The Indian company allots shares within 60 days of receipt, or refunds the money.</li>
          <li>It files Form FC-GPR within 30 days of allotment, with the valuation certificate and the bank certificate.</li>
          <li>It files the FLA return by 15 July each year.</li>
        </ol>

        <h2 id="chinese-points" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Points specific to Chinese funding</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Amount and use:</strong> the amount remitted and the use of funds should match the Chinese filings and the Indian approval. A mismatch invites questions from both banks.</li>
          <li><strong>Exchange timing:</strong> fix the exchange rate on the date of conversion; the rupee price per share on allotment drives the reporting.</li>
          <li><strong>Third-party payments:</strong> do not accept funds from related companies that are not on the approved ownership chart.</li>
          <li><strong>Loans from Chinese banks or group companies:</strong> an ECB must meet the Indian rules on lender eligibility and cost, and be consistent with Chinese outbound rules. Check the lender is eligible before agreeing terms.</li>
          <li><strong>Convertible loans:</strong> optionally convertible instruments are debt and must meet the ECB rules.</li>
        </ul>

        <h2 id="valuation" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pricing and valuation</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Shares issued to a non-resident must be priced at or above fair value. A valuation report from a Chartered Accountant or merchant banker supports the price.</li>
          <li>Transfers of shares between residents and non-residents follow the same pricing principle, in opposite directions for buy and sell.</li>
          <li>Keep the valuation date close to the allotment date. Old valuations may be rejected.</li>
          <li>For a JV, the price paid by the Chinese party should match the approved terms.</li>
        </ul>

        <h2 id="penalty" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Late filing and compounding</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A late FC-GPR, a late allotment, a missing FLA return or an investment without approval is a FEMA
          contravention. Late submission fees apply for delays in reporting. Serious breaches need compounding,
          which takes months, and in the worst case the investment is unwound. Build the clocks into the project
          calendar from the day funds are sent. See{" "}
          <Link href="/china-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/funding-and-fema" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
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
            { label: "SAFE (China)", href: "https://www.safe.gov.cn/en/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Chinese team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for FDI funding and FEMA compliance for Chinese companies, start with the decision a Chinese company has to make. The form name is the second conversation, not the first. If the parent team asks about FC-GPR filing, answer it from this same file. It is not a separate project. Keep ECB from parent in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put FIRMS portal on the checklist before the first filing, not after someone asks where it went. pricing guidelines sits on the critical path more often than people expect. Leave a line for it in the working paper. Check the shareholder chain for Press Note 3 before anyone drafts an Indian form. Legalised documents and a certified English translation are the usual long pole. If the parent is itself owned by another foreign company, draw the chain before you file.
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
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/fema-rbi-compliance" className="font-semibold text-blue-800 underline">FEMA and RBI compliance</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Funding an Indian Subsidiary from China?"
        description="Tell us the amount and whether it is equity or a loan, and we'll map the approval, the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
