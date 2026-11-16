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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/hiring-in-india"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "before", label: "Before hiring starts" },
  { id: "terms", label: "Indian terms Russian HR teams should know" },
  { id: "costs", label: "Statutory costs on top of salary" },
  { id: "banking", label: "Payroll and banking for a Russian-owned employer" },
  { id: "reporting", label: "Reporting to Moscow" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Do Russian labour rules apply to staff in India?", a: "No. Indian contracts, the labour codes and state rules apply." },
  { q: "Is there a labour book in India?", a: "No. Employment is recorded through appointment letters and payroll records." },
  { q: "When does provident fund become compulsory?", a: "From 20 employees, though many companies register earlier." },
  { q: "When is gratuity payable?", a: "After five years of continuous service, or one year for fixed-term staff." },
  { q: "Why does banking matter for payroll?", a: "Indian banks screen Russian-owned companies closely, so salary funding needs a steady, evidenced channel." },
  { q: "When is tax on salaries deposited?", a: "By the 7th of the following month." },
  { q: "Do the labour codes change pay structures?", a: "Yes. Wages must be at least half of total pay for provident fund and gratuity." },
  { q: "Can Russian staff be on the Indian payroll?", a: "Yes, as international workers for provident fund purposes, with Indian tax on Indian salary." },
]

const relatedCards = [
  { title: "Russian Employees in India", desc: "Tax and provident fund for Russian staff.", href: "/russia-to-india/russian-employees-in-india" },
  { title: "Relocating Russian Staff", desc: "Visas and registration.", href: "/russia-to-india/relocate-russian-staff" },
  { title: "Sanctions and Payments", desc: "Banking for Russian-owned companies.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Compliance Calendar", desc: "Payroll deadlines.", href: "/russia-to-india/compliance-calendar" },
]

export default function HiringInIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Hiring Staff in India as a Russian-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes"
        description="Hiring employees in India for Russian companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Hiring in India for a Russian-Owned Company: Contracts, Payroll and Labour Codes" },
        ]}
      />

      <GuideHero
        eyebrow="People: hiring"
        title="Hiring Staff in India as a Russian-Owned Company: Employment Contracts, Provident Fund, ESI, Gratuity and Labour Codes"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Russian-owned Indian subsidiary hires under Indian law: written contracts, monthly tax deduction, provident fund, ESI for lower-paid staff, gratuity after five years and the four labour codes. Two things are specific to Russian ownership. Banks screen salary and vendor payments more closely, so payroll funding must come through an accepted channel, and Russian employment practice, such as the trudovaya knizhka and Russian notice rules, does not carry over.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="hiring-and-payroll" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Contracts", "Written appointment letters under the labour codes and state shops rules"],
                ["Provident fund", "Employer and employee contributions; covered from 20 employees, often earlier"],
                ["ESI", "For employees earning up to ₹21,000 a month"],
                ["Gratuity", "After five years of continuous service (one year for fixed-term staff)"],
                ["Tax on salary", "Deducted monthly, deposited by the 7th of the next month"],
                ["Banking", "Salary funding must come through a bank channel the Indian bank accepts"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="before" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Before hiring starts</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Fund the payroll account from share capital or approved inflows, not ad hoc transfers from Russia.</li>
          <li>Register for provident fund, ESI and professional tax as headcount and state require.</li>
          <li>Register the office under the state shops and establishments law.</li>
          <li>Adopt a salary structure that meets the labour codes&apos; 50% wage rule.</li>
        </ul>
        <h2 id="terms" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian terms Russian HR teams should know</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Topic</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian position</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Compared with Russian practice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment record</th>
                <td className="border border-gray-300 p-3">Appointment letter and payroll records</td>
                <td className="border border-gray-300 p-3">No labour book; records are electronic</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Probation and notice</th>
                <td className="border border-gray-300 p-3">Set by contract within labour code limits</td>
                <td className="border border-gray-300 p-3">Notice periods are usually one to three months</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Overtime</th>
                <td className="border border-gray-300 p-3">Paid at twice the wage rate</td>
                <td className="border border-gray-300 p-3">Limits set by the codes and state rules</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Leave</th>
                <td className="border border-gray-300 p-3">Earned, sick and casual leave under state rules</td>
                <td className="border border-gray-300 p-3">Annual leave entitlements differ by state</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Termination</th>
                <td className="border border-gray-300 p-3">Contract, notice and procedure; no at-will dismissal</td>
                <td className="border border-gray-300 p-3">Retrenchment rules for larger establishments</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Statutory costs on top of salary</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Budget for the employer&apos;s provident fund contribution on basic wages, ESI for staff under the wage limit, gratuity accruals, professional tax in some states, statutory bonus where applicable, and group health insurance, which most Indian employers provide. Under the labour codes, allowances above half of total pay count as wages for these calculations.
        </p>
        <h2 id="banking" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Payroll and banking for a Russian-owned employer</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Indian banks apply enhanced due diligence to Russian-owned customers. Keep a steady funding pattern into the payroll account, avoid last-minute transfers from Russia before salary day, and keep source-of-funds evidence for each inflow. A delayed inflow can delay salaries, which creates labour law exposure as well as staff problems.
        </p>
        <h2 id="reporting" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Reporting to Moscow</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian parents usually want headcount, cost and payroll reports in their own format. Prepare them from the Indian payroll, in rupees and roubles, and remember that the Indian figures follow the 1 April to 31 March year while the Russian parent reports on a calendar year.
        </p>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We set up payroll registrations, draft Indian contracts, run monthly payroll and keep the funding and evidence trail banks expect from a Russian-owned employer.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/payroll-expat-services" className="text-blue-800 font-semibold hover:underline">payroll and expat services</Link> and <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/hiring-in-india" />
        <GuideCTA
          title="Hiring your first staff in India?"
          description="Tell us the roles, and we will set up contracts and payroll."
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
            { label: "Ministry of Labour and Employment", href: "https://labour.gov.in" },
            { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
            { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
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
            If you are here for hiring employees in India for Russian companies, start with the decision a Russian company has to make. The form name is the second conversation, not the first. If the parent team asks about payroll compliance India, answer it from this same file. It is not a separate project. Keep employee benefits India in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put CTC on the checklist before the first filing, not after someone asks where it went. The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process. If the assignment is short, say so in the letter. Open-ended expat letters are how a six-month plan becomes an unplanned local hire. Match the visa to the stay.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A business visa is for visits. It is not permission to live in India and run the office. The employment visa follows the employer. If you later move the person to a new entity, the visa conversation starts again. Plan the employer first. Send one PDF that has the contract, the entity name and the role. Immigration and payroll both read it, so it has to be the same story.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Start the visa work before the person gives notice at home. Document legalisation and appointments take longer than the slide says. Local hires need a real Indian employer. The parent company abroad is not that employer, even if it pays the group bonus. Keep passport copies, the visa and the address registration where HR can find them. Do not leave them in the person's own laptop only. Tax residence and social security are a separate note from the visa.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A person can be allowed to work and still create a payroll question you have not modelled. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed.
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
            Keep the signed pack in one folder.
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
