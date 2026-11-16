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

const PAGE_URL = "https://www.theaucorp.com/russia-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/russia-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Russian companies" },
  { id: "options", label: "The options compared" },
  { id: "bank-test", label: "The banking test" },
  { id: "jv", label: "Joint ventures with Indian partners" },
  { id: "project", label: "Project offices for contracts" },
  { id: "russian-side", label: "Russian approvals for each option" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What structure do Russian companies usually choose?", a: "A private limited subsidiary, wholly owned or as a joint venture." },
  { q: "Does Press Note 3 apply to Russian investors?", a: "No, unless a beneficial owner is from a country sharing a land border with India." },
  { q: "Do branch and liaison offices need approval?", a: "Yes, from the RBI through an authorised dealer bank." },
  { q: "Why is banking part of the structure decision?", a: "Indian banks screen Russian-owned entities closely, and a subsidiary is usually easier to bank." },
  { q: "When does a project create a PE?", a: "A building or installation project lasting more than 12 months creates a PE under the treaty." },
  { q: "What should a JV agreement cover for a Russian partner?", a: "Board rights, funding, deadlock, transfers and what happens if sanctions change." },
  { q: "Is Bank of Russia approval needed?", a: "Reportedly for share investments above RUB 30 million per counterparty." },
  { q: "Can an LLP be used?", a: "Only in sectors open to 100% automatic FDI, and it is uncommon." },
]

const relatedCards = [
  { title: "India FDI Rules for Russian Companies", desc: "Why the Automatic Route applies.", href: "/russia-to-india/india-fdi-rules-for-russian-companies" },
  { title: "Sanctions and Payments", desc: "Banking in practice.", href: "/russia-to-india/sanctions-and-payments-for-russian-companies" },
  { title: "Incorporation Steps", desc: "Setting up the subsidiary.", href: "/russia-to-india/incorporation-steps" },
  { title: "Russian Parent Obligations", desc: "Russian approvals.", href: "/russia-to-india/russian-parent-obligations" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure for a Russian Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        description="Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-RU"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Russia", href: "/russia-to-india" },
          { label: "Structure Options in India for a Russian Company: Subsidiary, LLP, Branch, Liaison, Project Office or JV" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: structure"
        title="Choosing an Indian Structure for a Russian Parent: Private Limited, LLP, Branch, Liaison Office, Project Office and Joint Venture"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most Russian companies use a private limited subsidiary in India, often wholly owned, sometimes as a joint venture with an Indian partner in energy, engineering or pharmaceuticals. Press Note 3 does not apply to Russia, so the subsidiary can use the Automatic Route in most sectors. Branch, liaison and project offices need RBI approval, and for a Russian parent the practical test for any structure is whether Indian banks will open and operate its accounts.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/russia-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Russia
          </Link>
        </p>

        <GuideCountryContext country="russia" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Usual choice", "Private limited subsidiary"],
                ["Route", "Automatic Route in most sectors; Press Note 3 does not apply"],
                ["Branch, liaison, project office", "RBI approval through an authorised dealer bank"],
                ["Joint ventures", "Common in energy, engineering and pharmaceuticals"],
                ["Russian side", "Bank of Russia approval reported above RUB 30 million per counterparty"],
                ["Practical gate", "Bank account opening and payment screening"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="options" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The options compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Subsidiary</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Joint venture company</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Branch or project office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liaison office</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">LLP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Revenue in India</th>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">Permitted activities</td>
                <td className="border border-gray-300 p-3">No</td>
                <td className="border border-gray-300 p-3">Eligible sectors</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Approval</th>
                <td className="border border-gray-300 p-3">Automatic Route</td>
                <td className="border border-gray-300 p-3">Automatic Route; partner terms</td>
                <td className="border border-gray-300 p-3">RBI</td>
                <td className="border border-gray-300 p-3">RBI</td>
                <td className="border border-gray-300 p-3">Automatic in eligible sectors</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Liability</th>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
                <td className="border border-gray-300 p-3">Russian company liable</td>
                <td className="border border-gray-300 p-3">Russian company liable</td>
                <td className="border border-gray-300 p-3">Ring-fenced</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Banking</th>
                <td className="border border-gray-300 p-3">Indian company KYC</td>
                <td className="border border-gray-300 p-3">Indian partner can help</td>
                <td className="border border-gray-300 p-3">Parent KYC directly</td>
                <td className="border border-gray-300 p-3">Parent KYC directly</td>
                <td className="border border-gray-300 p-3">LLP KYC</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="bank-test" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The banking test</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          For a Russian parent the entity choice is also a banking choice. A subsidiary or joint venture is an Indian company that opens its own accounts, with the Russian ownership disclosed and screened. Branch and liaison offices are part of the Russian company, so the bank screens the parent directly for every operation. Most Russian groups find a subsidiary easier to bank, especially with an Indian partner or a clear ownership chart.
        </p>
        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures with Indian partners</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A joint venture brings local relationships, licences and often easier banking. The shareholders&apos; agreement should cover board seats, reserved matters, funding obligations, deadlock, transfer restrictions and what happens if sanctions change, for example a buy-out right for the Indian partner if the Russian shareholder can no longer fund the company.
        </p>
        <h2 id="project" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Project offices for contracts</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Russian engineering, energy and nuclear-sector groups sometimes use a project office for a specific Indian contract. It needs RBI approval, is tied to the contract and closes at its end. A building or installation project lasting more than 12 months creates a permanent establishment under the India-Russia treaty, so the project office&apos;s profits are taxed in India.
        </p>
        <h2 id="russian-side" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Russian approvals for each option</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Share investments abroad above the reported RUB 30 million per counterparty need Bank of Russia approval.</li>
          <li>Currency control and foreign participation notifications apply to the parent.</li>
          <li>Russian counter-sanctions rules can affect dealings with certain counterparties.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We compare structures against your plan and banking realities, set up the entity, and coordinate the Indian side of Russian approvals.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/branch-office-registration" className="text-blue-800 font-semibold hover:underline">branch office registration</Link>.
        </p>

        <GuideServiceBox path="/russia-to-india/structure-options" />
        <GuideCTA
          title="Choosing a structure for India?"
          description="Tell us the activity and ownership, and we will recommend the entity."
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
            { label: "Bank of Russia", href: "https://www.cbr.ru/eng/" },
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
            If you are here for subsidiary vs branch vs liaison office in India, start with the decision a Russian company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry structure for Russian companies, answer it from this same file. It is not a separate project. Keep LLP vs private limited in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put tax rate on the checklist before the first filing, not after someone asks where it went. The apostille and the English translation are the document work. The longer conversation is the bank, and whether the payment route is one the bank will actually process. Fund the office with expense remittances from the parent, and keep the permission letter in the bank file. The bank will ask why the money arrived.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters. Do not hire a role whose only job is to close Indian revenue. That hire is the moment the office stops looking like a liaison office. Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough. When you renew, file what you actually did. A renewal that describes a different office from the one you ran is a problem you wrote yourself. Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            People can plan around a list. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project. Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list. You will need them again, and you will not want to hunt a phone. When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday. If the parent wants a dashboard, give them five dates and a red or a green. A dashboard with forty rows is where real blockers go to hide. Budget a week for the thing you have not thought of. In the first India setup it is usually a document in the wrong language, or a signatory who is on leave.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/liaison-office-registration" className="font-semibold text-blue-800 underline">liaison office registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Subsidiary, LLP, Branch or Joint Venture?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Russian company and its owners."
      />
    </main>
  )
}
