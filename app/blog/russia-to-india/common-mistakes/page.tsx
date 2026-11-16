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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/common-mistakes"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "list", label: "Twelve mistakes and fixes" },
  { id: "how", label: "How to avoid them" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is the biggest mistake Russian companies make in India?", a: "Treating the Indian FDI rules as the only gate. Banking access and sanctions exposure decide whether the investment works in practice." },
  { q: "Does Press Note 3 apply to Russian investors?", a: "Not by nationality, because Russia does not share a land border with India, but a land-border beneficial owner can bring it into play." },
  { q: "What happens if FC-GPR is late?", a: "The company must regularise by compounding and may pay a penalty." },
  { q: "Can I claim the 10% dividend rate without paperwork?", a: "No. The payer needs Form 41, the residency certificate and a beneficial ownership declaration." },
  { q: "Does a secondee pay both EPF and Russian contributions?", a: "Possibly, because there is no social security agreement. Budget for both and take advice." },
  { q: "Why do contracts need stamping?", a: "Unstamped documents are not admissible in evidence in India until stamped and penalty paid." },
  { q: "How do I stay on top of deadlines and screening?", a: "Use a compliance calendar with owners, and review it each quarter." },
]

const relatedCards = [
  { title: "Sanctions, Banking and Payment Channels for a Russian Parent and Its Indian Subsidiary: Screening, Special Rupee Accounts and Bank Due Diligence", desc: "The practical gate for Russian investors in India: US, EU and UK sanctions screening, the 50% ownership rule, Indian bank due diligence, settlement channels including rupee vostro accounts, why non-dollar payments are not a safe harbour and a compliance checklist.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "How to Incorporate a Private Limited Company in India as a Russian Parent: Sanctions Checks, SPICe+, Bank Account, Capital Inflow and First Filings", desc: "Step-by-step route for a Russian parent to set up an Indian private limited company: ownership and sanctions checks, name, SPICe+, DIN and DSC, resident director, PAN and TAN, bank account, capital inflow, FC-GPR and first filings.", href: "/russia-to-india/incorporation-steps" },
  { title: "Compliance Calendar: Indian Deadlines and the Russian Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Russian parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, sanctions reviews and the Russian-side reporting that depends on Indian numbers.", href: "/russia-to-india/compliance-calendar" },
  { title: "Funding Your Indian Subsidiary from Russia: Equity, Preference Shares, External Borrowing, FEMA Reporting and the Remittance Route", desc: "How a Russian parent can fund an Indian company: equity and preference share pricing, 60-day allotment and FC-GPR rules, ECB, loans, FLA return, the remittance route through banks acceptable to India and Russian clearance.", href: "/russia-to-india/funding-and-fema" },
]

export default function CommonMistakesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them"
        description="Mistakes when setting up a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Common Mistakes Russian Companies Make When Entering India" },
        ]}
      />

      <GuideHero
        eyebrow="Risk: common mistakes"
        title="Twelve Common Mistakes Russian Companies Make in India and How to Avoid Them"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most problems for Russian companies entering India come from the same places: assuming the FDI rule is
          the only gate when banking and sanctions are the real one, remitting money before the Russian
          clearance or a bank route is agreed, missing FEMA deadlines, claiming the 10% treaty rate without
          paperwork, paying the wrong provident fund and tax on secondees, and relying on a contract that was
          never stamped. Each is avoidable with an early checklist and one person who owns the Indian calendar.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="common-mistakes" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Banking", "Starting incorporation without a bank and payment route"],
                ["Sanctions", "No screening of owners, counterparties and goods"],
                ["Russian side", "Remitting before Bank of Russia clearance or threshold check"],
                ["FEMA", "Late allotment or FC-GPR; wrong pricing"],
                ["Treaty", "No Form 41 or residency certificate before payment"],
                ["People", "Wrong visa; double provident fund cost not budgeted"],
                ["Documents", "Untranslated, uncertified or inconsistent documents"],
                ["Contracts", "Unstamped agreements; vague arbitration clause"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="list" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Twelve mistakes and fixes</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Mistake</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Why it hurts</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Fix</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">1. Treating the FDI rule as the only gate</th>
                  <td className="border border-gray-300 p-3">The account or payment fails even though the investment is lawful</td>
                  <td className="border border-gray-300 p-3">Plan banking and sanctions first. See <Link href="/russia-to-india/sanctions-and-payments-for-russian-companies" className="text-blue-800 font-semibold hover:underline">sanctions and payments</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">2. Assuming Press Note 3 applies, or ignoring a land-border owner</th>
                  <td className="border border-gray-300 p-3">Wrong route or missed approval</td>
                  <td className="border border-gray-300 p-3">Check the ownership chain. See <Link href="/russia-to-india/india-fdi-rules-for-russian-companies" className="text-blue-800 font-semibold hover:underline">FDI rules</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">3. Remitting before Russian clearance</th>
                  <td className="border border-gray-300 p-3">Breach of Russian rules and a stuck transaction</td>
                  <td className="border border-gray-300 p-3">Confirm the threshold and approval. See <Link href="/russia-to-india/russian-parent-obligations" className="text-blue-800 font-semibold hover:underline">Russian parent obligations</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">4. Using a bank the Indian bank will not accept</th>
                  <td className="border border-gray-300 p-3">Returned or frozen funds</td>
                  <td className="border border-gray-300 p-3">Pre-clear the route with the Indian bank</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">5. Missing the 60-day allotment or 30-day FC-GPR</th>
                  <td className="border border-gray-300 p-3">Compounding and penalties</td>
                  <td className="border border-gray-300 p-3">Calendar the dates from the day money lands. See <Link href="/russia-to-india/funding-and-fema" className="text-blue-800 font-semibold hover:underline">funding and FEMA</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">6. Pricing shares below fair value on issue</th>
                  <td className="border border-gray-300 p-3">FEMA breach</td>
                  <td className="border border-gray-300 p-3">Get a valuation certificate</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">7. Paying without Form 41</th>
                  <td className="border border-gray-300 p-3">Domestic withholding rates apply and refunds are slow</td>
                  <td className="border border-gray-300 p-3">Collect the residency certificate and declaration. See <Link href="/russia-to-india/india-russia-dtaa" className="text-blue-800 font-semibold hover:underline">the DTAA guide</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">8. Unsupported management fees</th>
                  <td className="border border-gray-300 p-3">Tax disallowance and penalties</td>
                  <td className="border border-gray-300 p-3">Contract, evidence of service and benchmarking. See <Link href="/russia-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">9. Wrong visa category or ignoring provident fund for secondees</th>
                  <td className="border border-gray-300 p-3">Fines and back contributions</td>
                  <td className="border border-gray-300 p-3">Use an employment visa and budget for EPF. See <Link href="/russia-to-india/relocate-russian-staff" className="text-blue-800 font-semibold hover:underline">relocating staff</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">10. Inconsistent or unauthenticated documents</th>
                  <td className="border border-gray-300 p-3">Registrar and bank rejections</td>
                  <td className="border border-gray-300 p-3">Follow the checklist. See <Link href="/russia-to-india/documents-apostille-and-translation" className="text-blue-800 font-semibold hover:underline">documents</Link>.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">11. Unstamped contracts and loose arbitration clauses</th>
                  <td className="border border-gray-300 p-3">Inadmissible evidence; slow enforcement</td>
                  <td className="border border-gray-300 p-3">Stamp in time; name the rules and seat. See <Link href="/russia-to-india/contracts-courts-arbitration" className="text-blue-800 font-semibold hover:underline">contracts and arbitration</Link>.</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">12. No owner for the Indian calendar</th>
                  <td className="border border-gray-300 p-3">Late filings and penalties</td>
                  <td className="border border-gray-300 p-3">Name an owner and a deputy. See <Link href="/russia-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>.</td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to avoid them</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Run a one-page pre-entry checklist covering sector, ownership, banking, sanctions, Russian clearance, documents and calendar.</li>
          <li>Keep one folder for approvals, filings, bank correspondence, screening and treaty documents.</li>
          <li>Review the structure once a year as Indian, Russian and sanctions rules change.</li>
          <li>Use local advisers for each country and make them talk to each other.</li>
        </ol>

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

        <GuideServiceBox path="/russia-to-india/common-mistakes" />
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
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in/" },
            { label: "DPIIT", href: "https://dpiit.gov.in/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Russian
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Russian team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for mistakes when setting up a company in India from Russia, start with the decision a Russian company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry pitfalls, answer it from this same file. It is not a separate project. Put FEMA penalties on the checklist before the first filing, not after someone asks where it went.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process. Allot the shares, then report the investment. The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment. Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Confirm the parent can own the shares it thinks it can own. The sector, and the shareholder chain above the parent, sometimes change the route. Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep. Appoint a resident director who really spends the required time in India. A name on a slide is not a director, and the declaration has to be true.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole. Waiting until India asks for it is how timelines slip. Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back. Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The certificate of incorporation does not pay anyone. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/india-subsidiary-registration" className="font-semibold text-blue-800 underline">Indian subsidiary registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Avoid the Usual Traps for Russian Investors"
        description="Tell us your planned structure and launch date, and we'll flag the issues Russian parents most often run into in India."
      />
    </main>
  )
}
