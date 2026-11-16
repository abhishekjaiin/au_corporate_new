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

const PAGE_URL = "https://www.theaucorp.com/hong-kong-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/hong-kong-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Hong Kong companies" },
  { id: "contract", label: "The employment contract" },
  { id: "payroll", label: "Payroll and statutory deductions" },
  { id: "hk", label: "Differences from Hong Kong practice" },
  { id: "foreign", label: "Posting Hong Kong staff" },
  { id: "cost", label: "Cost planning" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do I need an employment contract in India?", a: "Yes, a written appointment letter is standard and needed for clarity on pay, notice and confidentiality." },
  { q: "Is provident fund mandatory?", a: "For covered establishments, yes. Check the thresholds and apply for registration early." },
  { q: "Who deducts income tax on salary?", a: "The employer, under Section 392 of the Income-tax Act, 2025, depositing by the 7th of the following month." },
  { q: "Can I include a non-compete clause?", a: "A post-employment non-compete is generally not enforceable in India, so use confidentiality and carefully drafted non-solicitation terms." },
  { q: "Have the labour codes taken effect?", a: "They were reported to be in force from 21 November 2025. Confirm the rules and state notifications that apply to you." },
  { q: "Do I need a sexual harassment committee?", a: "Employers with 10 or more employees must form an Internal Committee under the POSH Act." },
  { q: "How does this differ from Hong Kong?", a: "Provident fund, termination, leave and wage-payment rules differ. Use Indian counsel for the handbook and contracts." },
]

const relatedCards = [
  { title: "Hong Kong Employees in India: Salary Tax, the MPF Position and EPF for International Workers", desc: "What a Hong Kong employer must plan for staff in India: Indian salary tax and the treaty day-count test, Hong Kong salaries tax, MPF, EPF for international workers because there is no social security agreement, and secondment contracts.", href: "/hong-kong-to-india/hong-kong-employees-in-india" },
  { title: "Moving Hong Kong Employees to India: Employment Visa, Registration with FRRO, Dependants and Clearance", desc: "How to relocate Hong Kong staff to an Indian subsidiary: employment and business visa categories, the salary floor, FRRO registration within 14 days for stays over 180 days, dependants, security clearance for land-border nationals, tax and exit.", href: "/hong-kong-to-india/relocate-hong-kong-staff" },
  { title: "Compliance Calendar: Indian Deadlines and the Hong Kong Filings They Feed", desc: "A month-by-month compliance calendar for an Indian subsidiary of a Hong Kong parent: TDS, GST, PF and ESI, advance tax, AGM, AOC-4, MGT-7, FLA return, approval conditions and the Hong Kong-side annual return and profits tax filings.", href: "/hong-kong-to-india/compliance-calendar" },
  { title: "Twelve Common Mistakes Hong Kong Companies Make in India and How to Avoid Them", desc: "The most common mistakes of Hong Kong companies entering India: skipping Press Note 3, thin hub structures, late FEMA filings, weak treaty paperwork, secondment tax errors, stale apostilles, unstamped contracts and ignoring the Indian calendar.", href: "/hong-kong-to-india/common-mistakes" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes"
        description="Hiring employees in India for Hong Kong companies. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-HK"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Hong Kong", href: "/hong-kong-to-india" },
          { label: "Hiring in India for a Hong Kong-Owned Company: Contracts, Payroll and Labour Codes" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring"
        title="Hiring Staff in India as a Hong Kong-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          An Indian subsidiary hires staff under Indian law on a written appointment letter. Payroll brings
          income tax deduction under Section 392, provident fund and ESI where thresholds are met, gratuity
          after the qualifying service, professional tax in some states and compliance with the labour codes,
          which were reported to have come into force on 21 November 2025. Hong Kong employers should expect
          differences from home practice: notice and termination rules, statutory benefits, wage payment dates,
          leave and sexual harassment compliance. Use a written contract with confidentiality and intellectual
          property clauses and keep an employee handbook.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Hong Kong
          </Link>
        </p>

        <GuideCountryContext country="hongkong" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Contract", "Written appointment letter with role, pay, notice, confidentiality and IP terms"],
                ["Income tax", "TDS on salary by the 7th of the following month; Form 16 after year end"],
                ["Provident fund", "EPF registration for covered establishments; employer and employee contributions; return by the 15th"],
                ["ESI", "Employees below the wage ceiling; contributions by the 15th"],
                ["Gratuity", "Payable after the qualifying service period; fixed-term employees may qualify earlier under the codes"],
                ["Labour codes", "Wages, Social Security, Industrial Relations, Occupational Safety codes reported in force from 21 November 2025; confirm rules in your state"],
                ["Shops and establishments", "State registration, working hours, leave, holidays"],
                ["POSH", "Internal committee for sexual harassment complaints for 10 or more employees"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="contract" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The employment contract</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>State the role, place of work, salary components, probation, notice period and termination terms.</li>
          <li>Include confidentiality, intellectual property assignment, and conflict of interest clauses.</li>
          <li>Restrictive covenants after employment are limited in India; a non-compete after the end of employment is generally unenforceable, so rely on confidentiality and non-solicitation drafted carefully.</li>
          <li>Use Indian stamp rules, state shops law and the holidays list in the handbook.</li>
        </ul>

        <h2 id="payroll" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll and statutory deductions</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Rule in outline</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Due</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Income tax on salary", "Section 392 of the Income-tax Act, 2025; deduct at average rate", "7th of next month; quarterly return"],
                ["EPF", "Employer and employee contributions on wages", "15th of next month"],
                ["ESI", "For employees below the ceiling", "15th of next month"],
                ["Professional tax", "State law, where applicable", "Per state schedule"],
                ["Gratuity", "On the qualifying period of service", "On exit"],
                ["Bonus and leave", "As per the applicable code and state law", "As per policy and law"],
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

        <h2 id="hk" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Differences from Hong Kong practice</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Hong Kong&apos;s Mandatory Provident Fund is replaced in India by the EPF with a different structure.</li>
          <li>Termination in India often needs notice or pay in lieu and, for larger establishments, extra procedures; check the code for your headcount.</li>
          <li>Working hours, leave and holiday rules come from the state shops law and the codes.</li>
          <li>Indian employees expect a clear title, grade and annual increment cycle; plan compensation accordingly.</li>
        </ul>

        <h2 id="foreign" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Posting Hong Kong staff</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For employees sent from Hong Kong, see{" "}
          <Link href="/hong-kong-to-india/hong-kong-employees-in-india" className="text-blue-800 font-semibold hover:underline">Hong Kong employees in India</Link>{" "}
          and{" "}
          <Link href="/hong-kong-to-india/relocate-hong-kong-staff" className="text-blue-800 font-semibold hover:underline">relocating Hong Kong staff</Link>.
        </p>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost planning</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Budget for salary, employer provident fund and ESI, gratuity, bonus, insurance and recruitment. ₹10
          lakh is about HK$83,000 at an indicative ₹12.07 per Hong Kong dollar (15 October 2026 interbank rate;
          check the live rate before remitting). See the{" "}
          <Link href="/hong-kong-to-india/compliance-calendar" className="text-blue-800 font-semibold hover:underline">compliance calendar</Link>{" "}
          for due dates.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.ird.gov.hk/eng/welcome.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Inland Revenue Department (Hong Kong)</a>,{" "}
          <a href="https://www.cr.gov.hk/en/home/index.htm" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies Registry (Hong Kong)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/hong-kong-to-india/hiring-in-india" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/hong-kong-to-india/faq"
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
            { label: "Ministry of Labour and Employment (India)", href: "https://labour.gov.in/" },
            { label: "EPFO India", href: "https://www.epfindia.gov.in/" },
            { label: "Income Tax Department of India", href: "https://www.incometax.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/hong-kong-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Hong Kong
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Hong Kong team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for hiring employees in India for Hong Kong companies, start with the decision a Hong Kong company has to make. The form name is the second conversation, not the first. If the parent team asks about payroll compliance India, answer it from this same file. It is not a separate project. Keep employee benefits India in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put CTC on the checklist before the first filing, not after someone asks where it went. Hong Kong is often the regional signer. The Indian entity still files in its own name, and the Companies Registry extract still needs an apostille. Match the visa to the stay. A business visa is for visits. It is not permission to live in India and run the office. The employment visa follows the employer.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you later move the person to a new entity, the visa conversation starts again. Plan the employer first. Send one PDF that has the contract, the entity name and the role. Immigration and payroll both read it, so it has to be the same story. Start the visa work before the person gives notice at home. Document legalisation and appointments take longer than the slide says. Local hires need a real Indian employer.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The parent company abroad is not that employer, even if it pays the group bonus. Keep passport copies, the visa and the address registration where HR can find them. Do not leave them in the person's own laptop only. Tax residence and social security are a separate note from the visa. A person can be allowed to work and still create a payroll question you have not modelled. If the assignment is short, say so in the letter.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Open-ended expat letters are how a six-month plan becomes an unplanned local hire. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/payroll-expat-services" className="font-semibold text-blue-800 underline">payroll and expat support</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Building Your India Team?"
        description="Tell us the roles and headcount, and we'll set up payroll, PF and ESI registration and employment contracts for the subsidiary."
      />
    </main>
  )
}
