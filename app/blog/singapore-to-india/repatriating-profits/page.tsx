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

const PAGE_URL = "https://www.theaucorp.com/singapore-to-india/repatriating-profits"
const PARENT_URL = "https://www.theaucorp.com/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "routes", label: "The routes compared" },
  { id: "dividends", label: "Dividends: the standard route" },
  { id: "fees", label: "Fees, royalties and recharges" },
  { id: "limits", label: "Limits and traps" },
  { id: "singapore-side", label: "On the Singapore side" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How is a dividend from India taxed on its way to a Singapore parent?", a: "India withholds tax at the treaty rate, 10% if the parent holds 25% or more and 15% otherwise, provided the residency certificate and Form 41 are given. Singapore can exempt the dividend under the foreign-sourced income exemption." },
  { q: "What forms are needed to send money from India to Singapore?", a: "Form 145 (previously 15CA) and, where required, Form 146 (previously 15CB) for the remittance, plus the treaty documents." },
  { q: "Are management fees to a Singapore parent taxable in India?", a: "Only if the fees make technical knowledge available or if the parent has a PE in India. The payment must also be at arm's length and supported by evidence of service." },
  { q: "When is Withholding Tax deposited?", a: "By the 7th of the month following the payment or credit." },
  { q: "Can an Indian subsidiary repay a loan from its Singapore parent at any time?", a: "Principal repayment follows the ECB agreement and the RBI's minimum maturity. Early repayment before the minimum maturity needs care." },
  { q: "Does India limit interest to a foreign parent?", a: "Yes. Interest paid to an associated enterprise abroad is capped under the interest limitation rule and must also meet the RBI cost ceiling and arm's length tests." },
]

const relatedCards = [
  { title: "The India-Singapore Tax Treaty (DTAA), Article by Article: India as Source State, Singapore as Residence State", desc: "The India-Singapore double taxation agreement explained article by article from the Singapore parent's point of view: rates table, permanent establishment, share gains, limitation of benefits and how to claim.", href: "/singapore-to-india/india-singapore-dtaa" },
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/singapore-to-india/transfer-pricing" },
  { title: "Funding an Indian Subsidiary from Singapore: Equity, Convertible Instruments, ECB Loans and RBI Reporting", desc: "How a Singapore parent funds an Indian subsidiary: equity pricing, compulsorily convertible instruments, external commercial borrowings, remittance mechanics, FC-GPR and annual FLA return.", href: "/singapore-to-india/funding-and-fema" },
  { title: "What a Singapore Parent Company Owes at Home When It Owns an Indian Subsidiary", desc: "Singapore-side duties for a parent with an Indian subsidiary: territorial tax, foreign-sourced income exemption, no capital gains tax, GST, ACRA filings, transfer pricing, Pillar Two and anti-corruption law.", href: "/singapore-to-india/singapore-parent-obligations" },
]

export default function RepatriatingProfitsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        description="Repatriation of profits from India. It covers when profits can go home, the bank pack and what must exist first so the dates stay honest. Start with the papers."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/singapore-to-india" },
          { label: "Repatriating Profits from India to Singapore: Dividends, Fees, Royalties and Loans" },
        ]}
      />

      <GuideHero
        eyebrow="Money out: repatriation"
        title="Getting Money Out of India to Singapore: Dividends, Service Fees, Royalties, Interest and Loan Repayments"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Singapore parent can take money out of its Indian subsidiary as dividends, service fees, royalties,
          interest, loan repayments, buybacks or sale proceeds. Each route has its own Indian Withholding Tax
          under Section 393, its own treaty ceiling and its own paperwork, and Singapore sometimes adds its own
          tax on arrival. Dividends are usually the cleanest: 10% where the parent holds at least 25%, then
          exempt in Singapore under the foreign-sourced income exemption if its conditions are met.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="repatriating-profits" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Dividends", "Treaty cap 10% (25% holding or more) or 15%; Singapore exemption available if conditions are met"],
                ["Service fees", "Taxed in India only if they make technical knowledge available or there is a PE; GST on imported services via reverse charge"],
                ["Royalties", "Treaty cap 10% (confirm); transfer pricing applies"],
                ["Interest", "Treaty cap 10% for banks, 15% otherwise; ECB rules"],
                ["Loan repayment", "Principal repayments follow the ECB schedule; Form 145 and 146 as applicable"],
                ["Paperwork", "Singapore residency certificate, Form 41, no-PE declaration, Form 145 (previously 15CA), Form 146 (previously 15CB) where needed"],
                ["Payer's duty", "Deduct Withholding Tax under Section 393 and deposit by the 7th of the following month"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="routes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The routes compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Route</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax on the outflow</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Singapore result</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dividends", "10% or 15% under the treaty, against about 20% plus surcharge and cess domestically", "Exempt under foreign-sourced income exemption if conditions are met", "Distributable profits; Form 41 before payment"],
                ["Service fees", "Often nil if no make-available and no PE; otherwise up to 10%", "Taxable business income with credit for Indian tax", "Documented services, arm's length price, GST reverse charge"],
                ["Royalties", "Up to 10% under the treaty as we read it", "Taxable with credit", "Licence agreement, valuation, transfer pricing"],
                ["Interest", "10% bank / 15% other", "Taxable with credit", "ECB ceiling, thin capitalisation limits"],
                ["Loan principal", "No tax on principal", "Not income", "Maturity and registration"],
                ["Buyback or capital reduction", "Taxed as deemed dividend or capital gain depending on the route", "Depends on the structure and the parent's tax position", "Procedure under the Companies Act"],
                ["Sale proceeds", "Capital gains per the treaty and date of acquisition", "No capital gains tax", "Valuation, indirect transfer"],
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

        <h2 id="dividends" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Dividends: the standard route</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The board recommends a dividend from distributable profits after the audit; the shareholders approve it at the AGM.</li>
          <li>The subsidiary asks the Singapore parent for the residency certificate, Form 41 and declarations.</li>
          <li>It deducts Withholding Tax under Section 393 at the treaty rate and pays the net amount through the dealer bank, with Form 145 and, where required, Form 146.</li>
          <li>It issues a Withholding Tax certificate. The parent keeps it for its Singapore tax return and any foreign tax credit.</li>
          <li>The parent confirms the foreign-sourced income exemption conditions in Singapore.</li>
        </ol>

        <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fees, royalties and recharges</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Put each charge in a written agreement before the services begin, with a price method and evidence of benefit.</li>
          <li>Apply transfer pricing and keep a benchmarking file. See <Link href="/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Charge GST under reverse charge on imported services if the subsidiary is registered and the supply is taxable.</li>
          <li>Avoid vague &apos;management fees&apos; with no recipient work. Indian authorities often disallow such costs.</li>
        </ul>

        <h2 id="limits" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Limits and traps</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Excess interest:</strong> interest above the ECB ceiling or arm&apos;s length is not deductible and may not be remitted.</li>
          <li><strong>Thin capitalisation:</strong> interest paid to foreign associated enterprises is limited to a percentage of EBITDA under the Indian interest limitation rule.</li>
          <li><strong>Dividend timing:</strong> declaring a dividend before the accounts are approved invites disputes.</li>
          <li><strong>Missed forms:</strong> a bank may refuse to remit without Form 145 or the right declaration.</li>
          <li><strong>PE risk:</strong> if the Singapore parent&apos;s staff do the work, the fees may be profits of an Indian PE rather than service income.</li>
        </ul>

        <h2 id="singapore-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">On the Singapore side</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Keep the Indian Withholding Tax certificates. Singapore gives a foreign tax credit on income that is
          taxed in Singapore, up to the Singapore tax on that income. Dividends that qualify for the
          foreign-sourced income exemption do not need a credit. For details, see{" "}
          <Link href="/singapore-to-india/singapore-parent-obligations" className="text-blue-800 font-semibold hover:underline">Singapore parent obligations</Link>.
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

        <GuideServiceBox path="/singapore-to-india/repatriating-profits" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "IRAS: tax exemption of foreign-sourced income", href: "https://www.iras.gov.sg/irashome/Businesses/Companies/Working-out-Corporate-Income-Taxes/Companies-Receiving-Foreign-Income/Tax-Exemption-of-Foreign-Sourced-Income/" },
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
            If you are here for repatriation of profits from India, start with the decision a Singapore company has to make. The form name is the second conversation, not the first. If the parent team asks about dividend repatriation India, answer it from this same file. It is not a separate project. Keep royalty and service fees in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put Form 15CA 15CB on the checklist before the first filing, not after someone asks where it went. A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille. After the money lands, file the note back to the India board pack. The next year's auditor will ask where it went. You can send profits you have earned, after the tax and the audit steps that apply.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            You cannot send a number because the parent would like the cash this quarter. Decide whether the payment is a dividend, a royalty or a service fee before you draft the bank request. The label has to match the agreement. The bank will ask for the board minute, the financials and the tax proof. Collect them before you book the remittance, not after the bank asks. Keep a running note of what has already gone out this year.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The second remittance is where people forget the first one. Do not use a service fee as a quiet dividend. If the substance is a share of profit, call it that and take the steps that go with a dividend. Check the withholding on the way out. The gross the parent expects and the net that arrives are different numbers, and someone has to explain the gap. Currency and the purpose code should match the paper.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A mismatch looks small on the form and large to the bank. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed pack in one folder.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/fema-rbi-compliance" className="font-semibold text-blue-800 underline">FEMA and RBI compliance</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Sending Profits Back to Singapore?"
        description="Tell us the dividend, fee, royalty or interest you plan to pay, and we'll map the treaty rate, the IRAS certificate and the remittance forms."
      />
    </main>
  )
}
