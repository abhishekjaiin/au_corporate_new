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

const PAGE_URL = "https://www.theaucorp.com/singapore-to-india/funding-and-fema"
const PARENT_URL = "https://www.theaucorp.com/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "routes", label: "The three routes" },
  { id: "pricing", label: "Pricing and valuation" },
  { id: "remittance", label: "Remitting from Singapore" },
  { id: "fcgpr", label: "FC-GPR and the 60/30 clocks" },
  { id: "ecb", label: "ECB loans from a Singapore parent" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How should a Singapore parent fund its Indian subsidiary?", a: "Usually through equity or compulsorily convertible instruments, which are FDI. Loans from the parent are ECB and follow separate rules. A mix is common." },
  { q: "What is the deadline to allot shares after funds arrive?", a: "Within 60 days of receiving the money. If shares are not allotted, the funds must be refunded." },
  { q: "When must FC-GPR be filed?", a: "Within 30 days of the allotment of shares, through the authorised dealer bank." },
  { q: "Can a Singapore parent lend to its Indian subsidiary?", a: "Yes, as an ECB, with a loan registration number before drawdown, minimum average maturity, an all-in-cost ceiling and monthly ECB-2 returns." },
  { q: "Is there a minimum price for shares issued to a Singapore investor?", a: "Yes. Unlisted shares must be issued at or above fair value from a valuation by a registered valuer, a chartered accountant or a merchant banker." },
  { q: "Can capital be sent by UPI-PayNow?", a: "No. The UPI-PayNow link is for small person-to-person transfers. Capital goes through the banking channel with a remittance certificate." },
  { q: "What is the FLA return?", a: "The annual return on foreign liabilities and assets that any Indian company with foreign investment files with the RBI by 15 July." },
]

const relatedCards = [
  { title: "Incorporating a Subsidiary in India from Singapore: Who Does What, in What Order", desc: "A split plan for a Singapore parent forming an Indian private limited company: what the Singapore team does, what the Indian team does, SPICe+, bank account, FC-GPR and the first 180 days.", href: "/singapore-to-india/incorporation-steps" },
  { title: "Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Singapore parent receives money from an Indian subsidiary: dividends at the treaty rate, fees and royalties at arm's length, interest and ECB repayments, Section 393 withholding, Forms 41, 145 and 146.", href: "/singapore-to-india/repatriating-profits" },
  { title: "Using a Singapore Holding Company for Indian Investments: What the Treaty Gives, and What Substance Is Needed to Keep It", desc: "How a Singapore holdco is used to own Indian subsidiaries: treaty positions on dividends and gains, grandfathering, Article 24A limitation of benefits, principal purpose test, POEM, GAAR and indirect transfer risk.", href: "/singapore-to-india/singapore-holdco-for-india" },
  { title: "Compliance Calendar: Indian Dates for the Subsidiary, Beside the Singapore Parent's Dates", desc: "A calendar of Indian monthly, quarterly and annual filings for a subsidiary of a Singapore company, with the Singapore parent's ACRA and IRAS dates alongside and a note on year-end alignment.", href: "/singapore-to-india/compliance-calendar" },
]

export default function FundingAndFemaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting"
        description="FDI funding and FEMA compliance for Singapore companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/singapore-to-india" },
          { label: "Funding an Indian Subsidiary from Singapore: Equity, ECB and FEMA Reporting" },
        ]}
      />

      <GuideHero
        eyebrow="Money in: funding and FEMA"
        title="Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent funds its Indian subsidiary through equity, compulsorily convertible instruments or
          an external commercial borrowing (ECB) loan, and each route has its own pricing, reporting and tax
          result. Shares must be issued at or above fair value, allotted within 60 days of the money arriving
          and reported on Form FC-GPR within 30 days of allotment. Loans must be registered with the RBI before
          the first drawdown, and the annual FLA return is due by 15 July.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="funding-fema-fc-gpr" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Equity", "Equity shares and compulsorily convertible preference or debentures count as FDI instruments"],
                ["Pricing", "Unlisted shares must be issued at or above fair value from a valuation by a registered valuer or chartered accountant"],
                ["Allotment", "Within 60 days of receiving the funds, or the money must be refunded"],
                ["FC-GPR", "Within 30 days of allotment, filed through an authorised dealer bank"],
                ["Loans", "ECB from a recognised lender such as the equity holder; loan registration number before drawdown; monthly ECB-2 returns"],
                ["Annual return", "FLA return by 15 July each year"],
                ["Currency", "Funds can be sent in SGD, USD or other freely convertible currency; the bank converts to INR"],
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
        <div className="overflow-x-auto mb-6">
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
                ["Equity share capital", "The parent subscribes for shares at or above fair value", "FC-GPR; valuation certificate", "No tax on the receipt; dividends later taxed through Withholding Tax"],
                ["Compulsorily convertible preference shares or debentures", "Fixed return; must convert to equity; pricing fixed at the start", "FC-GPR; valuation at issue", "Coupon taxed as dividend or interest depending on the instrument"],
                ["ECB loan from the parent", "Loan with minimum average maturity and an all-in-cost ceiling set by the RBI", "Loan registration number; ECB-2 monthly", "Interest deductible subject to limits; Withholding Tax at up to 10% to a bank, 15% otherwise under the treaty"],
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

        <div className="bg-secondary/40 border-l-4 border-blue-800 rounded-lg p-4 mb-10 text-sm text-gray-700">
          <strong>Optionally convertible instruments are debt.</strong> A convertible instrument that can be
          repaid or is not compulsorily convertible is treated as an ECB and must meet the loan rules.
        </div>

        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pricing and valuation</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For unlisted shares, FEMA sets a floor: the issue price must be at or above fair value determined by a
          registered valuer, a chartered accountant or a merchant banker using an internationally accepted
          method such as discounted cash flow. Issuing above the floor does not breach FEMA. Keep the valuation
          date close to the issue date and the method documented.
        </p>

        <h2 id="remittance" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Remitting from Singapore</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Send the funds from the parent&apos;s own account at a bank in Singapore to the Indian company&apos;s account, through the authorised dealer bank.</li>
          <li>The Indian bank issues a Foreign Inward Remittance Certificate that records the purpose code and the sender. Keep it with the share allotment papers.</li>
          <li>Mention the purpose, such as &apos;share application money&apos;, so the bank can process FC-GPR.</li>
          <li>Fix the exchange rate on the date of conversion; the rupee price per share on allotment drives the reporting.</li>
          <li>Do not use UPI-PayNow or personal accounts for corporate capital. They are for small retail transfers.</li>
        </ul>

        <h2 id="fcgpr" className="text-2xl font-bold text-gray-900 mt-12 mb-4">FC-GPR and the 60/30 clocks</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Money arrives in the Indian company&apos;s bank account.</li>
          <li>The company allots shares within 60 days of receipt; if it cannot, the funds are refunded through the same channel.</li>
          <li>The company files Form FC-GPR with details of the allotment, the price, the valuer and the investor within 30 days of allotment.</li>
          <li>The company files the annual FLA return by 15 July each year for foreign liabilities and assets.</li>
          <li>Late filing is regularised through the RBI&apos;s late submission fee or compounding process.</li>
        </ol>

        <h2 id="ecb" className="text-2xl font-bold text-gray-900 mt-12 mb-4">ECB loans from a Singapore parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Eligible lender:</strong> a resident of a jurisdiction that complies with FATF and IOSCO standards. The equity holder counts as a recognised lender.</li>
          <li><strong>Minimum maturity:</strong> a minimum average maturity applies by purpose; check the current Master Direction.</li>
          <li><strong>Cost ceiling:</strong> the RBI sets an all-in-cost cap over a benchmark rate. Check the current spread before pricing the loan.</li>
          <li><strong>Process:</strong> sign the agreement, obtain the loan registration number through the dealer bank, draw down, then file monthly returns.</li>
          <li><strong>Tax:</strong> interest is subject to Withholding Tax under Section 393; the treaty can reduce it to 10% or 15%. Transfer pricing applies to the interest rate.</li>
          <li><strong>Currency risk:</strong> a loan in SGD or USD exposes the subsidiary to rupee depreciation; consider hedging.</li>
        </ul>

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

        <GuideServiceBox path="/singapore-to-india/funding-and-fema" />
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
            { label: "Reserve Bank of India: FEMA, ECB and FDI reporting", href: "https://www.rbi.org.in/" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
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
            If you are here for FDI funding and FEMA compliance for Singapore companies, start with the decision a Singapore company has to make. The form name is the second conversation, not the first. If the parent team asks about FC-GPR filing, answer it from this same file. It is not a separate project. Keep ECB from parent in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put FIRMS portal on the checklist before the first filing, not after someone asks where it went. pricing guidelines sits on the critical path more often than people expect. Leave a line for it in the working paper. A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille. Price the shares in a way you can explain.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A round number chosen on a Thursday afternoon is not a valuation, and it will be the number someone asks about. File the annual foreign-liability return even in a quiet year. The year you skip is the year it stops feeling optional. Tell the bank the purpose in the same words you will use on the form. A cheerful payment reference and a formal purpose that disagree will stall the credit.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the parent is itself owned by another foreign company, draw the chain before you file. The form asks about that chain, and guessing is visible. Keep SWIFT copies, the valuation and the board minute together. The reporting is a pack, not a single upload. A delay is cheaper to explain early. Compounding later is a process, and it is not a favour you want to need. Share capital and a loan from the parent are different products.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Do not put both stories in one transfer and expect the bank to sort the label out. The reporting clock for a share issue starts when the shares are allotted, not when the money hits the account. Keep those two dates on the memo. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Chasing a director through an airport lounge is how a simple filing takes a month.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/fema-rbi-compliance" className="font-semibold text-blue-800 underline">FEMA and RBI compliance</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Funding an Indian Subsidiary from Singapore?"
        description="Tell us the amount and whether it is equity or a loan, and we'll map the valuation, FC-GPR or ECB filing and the timeline."
      />
    </main>
  )
}
