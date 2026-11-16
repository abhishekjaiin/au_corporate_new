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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/india-russia-dtaa"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "rates", label: "Tax rates table" },
  { id: "pe", label: "Permanent establishment (Article 5)" },
  { id: "gains", label: "Share gains and exit" },
  { id: "relief", label: "Relief from double tax" },
  { id: "abuse", label: "Anti-abuse and the MLI" },
  { id: "claim", label: "How to claim treaty rates" },
  { id: "trc-russia", label: "Getting the Russian tax residency certificate (TRC)" },
  { id: "timing-russia", label: "Withholding is due even when the payment is delayed" },
  { id: "royalty-russia", label: "Royalties and technical fees: what counts" },
  { id: "example-russia", label: "Worked example: dividend to a Russian parent" },
  { id: "map", label: "Disputes" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Is there a tax treaty between India and Russia?", a: "Yes. It was signed on 25 March 1997 and entered into force on 11 April 1998." },
  { q: "What is the Indian withholding tax on dividends paid to a Russian parent?", a: "10% of the gross amount under the treaty if the beneficial owner is taxable in Russia and the paperwork is in place. The domestic rate is about 20% plus surcharge and cess." },
  { q: "What are the treaty rates on interest, royalties and technical fees?", a: "10% each, with 0% interest for governments, local authorities and the Central Bank." },
  { q: "When does a Russian company have a permanent establishment in India?", a: "Through a fixed place, a building or installation project over 12 months, or a dependent agent. The treaty has no separate day-count services PE clause." },
  { q: "Are gains on Indian shares taxable in India for a Russian seller?", a: "Yes. Article 13 allows India to tax gains on shares of an Indian company." },
  { q: "Does the MLI affect the treaty?", a: "Yes. Both countries are covered parties, and the principal purpose test applies to Indian withholding from 1 April 2021." },
  { q: "What documents prove treaty eligibility?", a: "A tax residency certificate from the Russian Federal Tax Service, Form 41 and a declaration of beneficial ownership and no PE." },
  { q: "Does the treaty remove sanctions risk?", a: "No. It deals only with tax. Sanctions and banking questions are separate." },
]

const relatedCards = [
  { title: "Getting Money Out of India to a Russian Parent: Dividends at 10%, Service Fees, Royalties, Interest and Loan Repayments", desc: "How a Russian parent receives money from an Indian subsidiary: 10% treaty withholding, Section 393, Forms 41, 145 and 146, Russian tax treatment, payment routes acceptable to banks and the documents banks ask for.", href: "/russia-to-india/repatriating-profits" },
  { title: "Russian Employees in India: Salary Tax, the Treaty Day Count, EPF for International Workers and Russian Social Insurance", desc: "What a Russian employer must plan for staff in India: Indian salary tax and the treaty test, EPF for international workers, no social security agreement, Russian insurance contributions and secondment contracts.", href: "/russia-to-india/russian-employees-in-india" },
  { title: "Transfer Pricing between India and Russia: Arm's Length Pricing, Goods and Services Flows, Documentation and Safe Harbours", desc: "Transfer pricing for a Russian group with an Indian subsidiary: arm's length rules, accountant's report, master file and local file, supply of equipment and components, management fees, royalties, advance pricing agreements and safe harbours.", href: "/russia-to-india/transfer-pricing" },
  { title: "Exiting an Indian Subsidiary from Russia: Share Sale, Buy-Back, Merger, Voluntary Liquidation and Tax on the Exit", desc: "How a Russian parent exits or restructures an Indian business: sale of shares, buyer sanctions checks, FEMA pricing, FC-TRS, capital gains tax, buy-back, merger, voluntary liquidation, strike-off, the treaty position and bringing proceeds home.", href: "/russia-to-india/exit-and-restructuring" },
]

export default function IndiaRussiaDtaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="India-Russia Double Taxation Agreement Explained: 10% Dividends, Interest, Royalties and Technical Fees, PE Rules and the MLI"
        description="India Russia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team now."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "India-Russia DTAA: Article-by-Article Guide with Tax Rates, PE and Share Gains" },
        ]}
      />

      <GuideHero
        eyebrow="Tax: DTAA"
        title="India-Russia Double Taxation Agreement Explained: 10% Dividends, Interest, Royalties and Technical Fees, PE Rules and the MLI"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-Russia tax treaty was signed in Moscow on 25 March 1997 and entered into force on 11 April
          1998, replacing the 1988 India-USSR agreement. Read with India as the source state and Russia as the
          residence state, it caps Indian tax at 10% on dividends, interest, royalties and fees for technical
          services, taxes business profits in India only through a permanent establishment, taxes gains on
          shares of an Indian company in India, and gives relief by the credit method. Both countries are
          parties to the Multilateral Instrument, so the principal purpose test applies to Indian withholding
          from 1 April 2021. Confirm the current consolidated text before relying on any clause.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="india-dtaa" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Signed / in force", "25 March 1997 at Moscow / 11 April 1998; replaced the India-USSR agreement of 20 November 1988"],
                ["Dividends (Article 10)", "10% of the gross amount; beneficial owner must be taxed on it in Russia; no shareholding tiers"],
                ["Interest (Article 11)", "10%; 0% for governments, local authorities and the Central Bank"],
                ["Royalties and fees for technical services (Article 12)", "10% for both, with no make-available requirement"],
                ["Permanent establishment (Article 5)", "Building or installation project over 12 months; no separate services PE day-count clause; agency PE"],
                ["Independent personal services (Article 14)", "Taxable in the source state if the individual is present more than 183 days in any 12-month period"],
                ["Capital gains (Article 13)", "Shares of an Indian company taxable in India"],
                ["Anti-abuse", "MLI principal purpose test and simplified limitation on benefits apply; Indian GAAR also applies"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="rates" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tax rates table</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Article</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Income</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate on payments from India to Russia</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic comparison and notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Article 10", "Dividends", "10% of the gross amount", "Domestic rate on dividends to non-residents is about 20% plus surcharge and cess; beneficial owner must be subject to tax in Russia"],
                ["Article 11", "Interest", "10% of the gross amount", "0% for the Government, political sub-divisions, local authorities and the Central Bank"],
                ["Article 12", "Royalties, including computer software", "10% of the gross amount", "Domestic rate about 20% plus surcharge and cess"],
                ["Article 12", "Fees for technical services", "10% of the gross amount", "No make-available condition in the treaty text as summarised"],
                ["Article 7", "Business profits", "Taxed in India only to the extent attributable to a PE", "Net basis for PE income"],
                ["Article 13", "Capital gains on shares of an Indian company", "Taxable in India", "12.5% on unlisted shares held more than 24 months under domestic law"],
                ["Article 13", "Ships and aircraft", "Taxed only in the seller's residence state", "Check the article for scope"],
                ["Article 15", "Salary of a Russian resident", "Day-count test; confirm conditions in the treaty text", "See the employees guide"],
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

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Permanent establishment (Article 5)</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Fixed place:</strong> a branch, office, factory, workshop or place of management is a PE.</li>
          <li><strong>Building site or installation:</strong> a PE only if it lasts more than 12 months. Under the Protocol, qualifying turnkey projects can be dealt with by agreement between the tax authorities, with supervisory fees taxed at 10% on the gross amount.</li>
          <li><strong>Services:</strong> the treaty has no separate services PE clause based on day counts. Services are mainly caught as fees for technical services at 10% where they are technical, managerial or consultancy.</li>
          <li><strong>Dependent agent:</strong> an agent who habitually concludes contracts or secures orders can create a PE; the MLI modifies the agency wording.</li>
          <li><strong>Subsidiary:</strong> an Indian subsidiary is not by itself a PE of the parent, but it can become one if it acts as a dependent agent.</li>
        </ul>

        <h2 id="gains" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Share gains and exit</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Gains on shares of an Indian company are taxable in India under Article 13, without a shareholding
          threshold. Under domestic law a long-term gain on unlisted shares held more than 24 months is taxed at
          12.5% for a non-resident. See{" "}
          <Link href="/russia-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.
        </p>

        <h2 id="relief" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Relief from double tax</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Both countries use the credit method. The treaty&apos;s tax-sparing clause applied only for the first
          ten years it was in effect unless extended, so do not assume it applies today. Your Russian adviser
          should confirm the credit available in Russia against Russian tax on the same income.
        </p>

        <h2 id="abuse" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Anti-abuse and the MLI</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The treaty has no limitation on benefits article of its own, but the Multilateral Instrument adds a principal purpose test and a simplified limitation on benefits for Indian withholding from 1 April 2021.</li>
          <li>India&apos;s General Anti-Avoidance Rule can also apply to arrangements whose main purpose is a tax benefit.</li>
          <li>Real commercial reasons and substance in Russia matter, especially where the Russian company is held through another entity or has little activity.</li>
        </ul>

        <h2 id="claim" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to claim treaty rates</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>The Russian company obtains a tax residency certificate from the Federal Tax Service.</li>
          <li>It gives the Indian payer Form 41, the certificate and a self-declaration of beneficial ownership and no PE in India.</li>
          <li>The Indian payer deducts Withholding Tax at the treaty rate under Section 393 of the Income-tax Act, 2025, and deposits it by the 7th of the following month.</li>
          <li>The payer issues the certificate, which the Russian company uses to claim credit in Russia.</li>
        </ol>

        <h2 id="trc-russia" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting the Russian tax residency certificate (TRC)</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Every treaty claim starts with a <strong>tax residency certificate (TRC)</strong> from the Federal Tax Service of Russia, which Indian law requires before any treaty rate can be applied (Section 159 of the Income-tax Act, 2025). Russian companies can request it through their taxpayer account or the tax office, in Russian and with an English version available.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Ask for the certificate to cover the calendar year in which the Indian payment is made, and renew it each year: Indian payers will not apply the treaty on an expired certificate.</li>
          <li>Make sure the company name and address match those on the contract and invoices exactly, including transliteration from Cyrillic.</li>
          <li>Keep the original and a certified translation if the Indian payer or its bank asks for one.</li>
          <li>Add Form 41 (previously Form 10F), filed on the Indian income tax portal, with the Russian taxpayer identification number (INN) and the period covered.</li>
        </ul>
        <h2 id="timing-russia" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Withholding is due even when the payment is delayed</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Payments between India and Russia often take longer because of banking restrictions, and many are now settled in rupees through Special Rupee Vostro Accounts. The Indian tax timing does not wait for the money to move. The Indian payer must deduct tax when it credits the amount to the Russian company&apos;s account in its books or when it pays, whichever is earlier, and deposit it by the 7th of the following month.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Situation</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">When Indian tax is due</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Invoice accrued in the books at year end, paid three months later</th>
                <td className="border border-gray-300 p-3">When the expense is booked; deposit by the 7th of the next month</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Advance paid before the service starts</th>
                <td className="border border-gray-300 p-3">When the advance is paid</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Payment held by a correspondent bank and returned</th>
                <td className="border border-gray-300 p-3">Tax already deposited stays deposited; the payer adjusts or claims a refund</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Settlement in rupees through a vostro account</th>
                <td className="border border-gray-300 p-3">Same rules; the rupee amount is the base for withholding</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Late deduction attracts interest and can lead to the expense being disallowed in the Indian company&apos;s return. We set up the withholding and the Forms 145 and 146 workflow so that a banking delay does not become a tax default. Sanctions screening is a separate question; see <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments for Russian companies</Link>.
        </p>
        <h2 id="royalty-russia" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Royalties and technical fees: what counts</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Under Article 12, royalties and fees for technical services paid from India to a Russian resident are capped at 10%. Royalty covers payments for the use of copyright, patents, trademarks, designs, secret processes and industrial, commercial or scientific equipment, and for information about industrial, commercial or scientific experience. Technical fees cover managerial, technical and consultancy services; there is no make-available test, so ongoing support services are usually included.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Two points often come up for Russian groups. Software sold as a standard licence without transfer of copyright is generally not royalty after the Supreme Court&apos;s 2021 Engineering Analysis decision. And where Russian engineers work on site in India, the payment may instead form part of a permanent establishment&apos;s profits if the installation or supervisory project lasts beyond the treaty threshold. See <Link href="#pe" className="text-blue-800 font-semibold hover:underline">permanent establishment</Link> above.
        </p>
        <h2 id="example-russia" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked example: dividend to a Russian parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian subsidiary declares a dividend of INR 2 crore to its Russian parent.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty rate</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rate</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and 4% cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian tax</th>
                <td className="border border-gray-300 p-3">INR 20 lakh</td>
                <td className="border border-gray-300 p-3">About INR 41.6 lakh or more</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Conditions</th>
                <td className="border border-gray-300 p-3">TRC, Form 41, beneficial ownership, no PE, principal purpose test met</td>
                <td className="border border-gray-300 p-3">None</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The Indian company also files Forms 145 and 146 before the remittance, and the dividend is reported by the Russian parent with the Indian tax certificate when claiming credit in Russia.
        </p>

        <h2 id="map" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Disputes</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty provides for mutual agreement between the tax authorities; confirm the procedure and time
          limits in the text. Keep transfer pricing files in both countries aligned. See{" "}
          <Link href="/russia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.nalog.gov.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Federal Tax Service (Russia)</a>,{" "}
          <a href="https://www.cbr.ru/eng/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Bank of Russia</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/russia-to-india/india-russia-dtaa" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/russia-to-india/faq"
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
            { label: "Beacon Filing: India-Russia DTAA", href: "https://beaconfiling.com/dtaa/india-russia-dtaa" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
            { label: "Federal Tax Service (Russia)", href: "https://www.nalog.gov.ru/eng/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Russian team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for India Russia DTAA, start with the decision a Russian company has to make. The form name is the second conversation, not the first. If the parent team asks about India Russia tax treaty, answer it from this same file. It is not a separate project. Keep DTAA rates in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put royalty on the checklist before the first filing, not after someone asks where it went. Form 10F sits on the critical path more often than people expect. Leave a line for it in the working paper. The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process. Corporate tax, GST and transfer pricing are three calendars.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A team that watches only the income-tax return will miss a GST date, and the GST date is monthly. Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin. Compute withholding on the Indian rule, then check the treaty. Doing it the other way round is how a rate gets applied to the wrong payment.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do. Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later. GST registration should follow the activity, not a guess in the first week. Registering too early creates returns with nothing on them.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Registering late creates a different problem. Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it. Once a year, read the intercompany agreements against the invoices. Contracts and billing drift apart, and the drift is what gets questioned. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed.
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
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project. Decide what 'done' means before you start.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            You will need them again, and you will not want to hunt a phone. When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version. A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday. If the parent wants a dashboard, give them five dates and a red or a green.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A dashboard with forty rows is where real blockers go to hide. Budget a week for the thing you have not thought of. In the first India setup it is usually a document in the wrong language, or a signatory who is on leave. Write the fee and the out-of-pocket items in the same note as the timeline. A timeline without a cost is how a finance controller loses trust in week six.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Do not promise a customer, or a new hire, a date you do not control. Promise the date you control, and describe the date that depends on a government or a bank as a range. After each filing, write one sentence on what it unlocked. The next person should see why the paper mattered, not only that it was uploaded. If you already have an Indian contractor or a consultant on the ground, list what they have signed and in whose name.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Old arrangements are the usual surprise. Keep the group's chart of accounts in mind when you open the Indian books. Rebuilding the mapping at the first close is miserable, and it is avoidable. Say no to a step that belongs to a different structure. Helpful extras are how a liaison office starts selling, or a project office starts hiring for a second client. Leave a note for the person who will do this next year.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            What felt obvious in month one is not obvious in month fourteen, and you may be that person. Check the registered email and the mobile number on the government portals. OTPs go there. If they go to someone who has left, the filing stops for a reason that takes a day to explain. When a PDF is password protected, put the password in the same folder in a plain text file with a dull name.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Auditors do not enjoy treasure hunts, and neither will you. If the parent has a travel freeze or a hiring freeze, say so. The India plan changes when nobody can visit and nobody can be added to payroll. Pretending otherwise wastes a month. Number the documents the way the bank will number them. A covering index with ten lines saves a reviewer from opening every PDF to find the board resolution.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If a translation is required, translate the document you will actually file, not an earlier draft. Version mix-ups are a quiet way to submit the wrong share capital. Put the registered office address on the invoice template before the first invoice goes out. Changing it later means a trail of documents with two addresses, and someone will pick the old one. Agree who may speak to the bank. If three people call with three versions of the purpose, the account opening slows down for a reason that has nothing to do with the paperwork.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Keep a copy of what you told the parent last week. When the date moves, the explanation should start from that note, not from a reconstructed memory of the call. Keep the signed pack in one folder.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/corporate-tax-gst-transfer-pricing" className="font-semibold text-blue-800 underline">tax and transfer pricing</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Applying the India-Russia Treaty?"
        description="Tell us the payments and people moving between Russia and India, and we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
