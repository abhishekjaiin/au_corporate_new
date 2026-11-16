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

const PAGE_URL = "https://www.theaucorp.com/uk-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/uk-to-india"

const toc = [
  { id: "country-specific", label: "What's different for UK companies" },
  { id: "compare", label: "The five structures side by side" },
  { id: "why-sub", label: "Why the subsidiary is usually the answer" },
  { id: "holding", label: "Direct holding or an intermediate company?" },
  { id: "people", label: "Directors and ownership: UK practical points" },
  { id: "eor", label: "When an Employer of Record is the right first step" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure do most UK companies choose in India?", a: "A wholly owned private limited company. It limits liability, can earn revenue and employ staff, is taxed at the domestic company rate and is the easiest vehicle to sell or restructure." },
  { q: "What is the difference between a branch office and a subsidiary in India?", a: "A branch is part of the UK company, needs RBI approval, is limited to specified activities and is taxed as a foreign company. A subsidiary is a separate Indian company that can carry out its own business." },
  { q: "Can a UK company open a liaison office in India?", a: "Yes, with RBI approval through an authorised dealer bank, if it has a profit record for the previous three years and net worth of at least USD 50,000. The office can liaise and research but cannot earn income or invoice." },
  { q: "Should a UK company hold its Indian subsidiary directly?", a: "In most cases yes. Direct holding keeps the treaty and UK exemption position simple. An intermediate holding company must pass the principal purpose test and needs real substance." },
  { q: "Is an Employer of Record better than a subsidiary?", a: "Only at the start. An Employer of Record is faster and needs no capital, but it cannot contract in your name, and it becomes costly as the team grows. Most groups convert to a subsidiary after the first year or ten hires." },
]

const relatedCards = [
  { title: "Incorporating an Indian Subsidiary from the UK: A Week-by-Week Plan", desc: "A week-by-week plan for a UK company to incorporate a wholly owned Indian subsidiary: documents, DSC and DIN, SPICe+, bank account, FC-GPR, first board meeting and the first 90 days.", href: "/uk-to-india/incorporation-steps" },
  { title: "Documents a UK Parent Needs for an Indian Subsidiary: Companies House Papers, Notarisation and the Apostille", desc: "The documents a UK company needs to incorporate an Indian subsidiary, how Companies House papers, notarisation and the UK apostille work, and the mistakes that cost weeks.", href: "/uk-to-india/documents-companies-house-apostille" },
  { title: "The India-UK Tax Treaty (DTAA), Article by Article: India as Source State, the UK as Residence State", desc: "The India-UK double taxation convention explained article by article from the UK parent's point of view: rates table, permanent establishment, royalties and fees, gains, employees, relief and how to claim.", href: "/uk-to-india/india-uk-dtaa" },
  { title: "Building a Global Capability Centre in India as a UK Company: Models, Staging, Regulation and Pricing", desc: "How a UK company can build a captive Global Capability Centre (GCC) in India: models, stages, regulated-firm third-party rules, transfer pricing, PE risk, talent and governance.", href: "/uk-to-india/gcc-for-uk-companies" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record"
        description="Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers."
        datePublished="2026-10-19"
        dateModified="2026-10-19"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-GB"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the UK", href: "/uk-to-india" },
          { label: "Subsidiary, Branch, Liaison Office or LLP: Choosing a Structure in India from the UK" },
        ]}
      />

      <GuideHero
        eyebrow="Structure: UK parent"
        title="Choosing an Indian Structure as a UK Company: Subsidiary, Branch, Liaison Office, LLP or Employer of Record"
        updated="19 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          Most UK companies choose a wholly owned private limited company because it limits liability to the
          capital invested, can invoice and employ freely, and is taxed at the domestic company rate. A branch
          or liaison office needs RBI approval and track-record tests, and a branch is taxed at the higher
          foreign-company rate. Use an Employer of Record to test the market, and hold the Indian company
          directly from the UK unless an intermediate holding company has real substance.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the UK
          </Link>
        </p>

        <GuideCountryContext country="uk" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Default choice", "Wholly owned private limited company"],
                ["Branch office", "RBI approval; the UK company needs a profit record for the five preceding years and net worth of at least USD 100,000; taxed as a foreign company"],
                ["Liaison office", "RBI approval; the UK company needs a profit record for the three preceding years and net worth of at least USD 50,000; no income, no invoicing"],
                ["LLP", "FDI allowed only in eligible sectors; treated as transparent in some jurisdictions, which complicates UK tax treatment"],
                ["Employer of Record", "No entity, no capital; the EOR is the legal employer; good for the first hires"],
                ["Holding", "Direct from the UK is the baseline; an intermediate holding company must pass the treaty's principal purpose test"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The five structures side by side</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Can earn revenue?</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Tax in India</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Liability</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Right for a UK company that</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Private limited subsidiary", "Yes", "Domestic company rate; dividends taxed on payment", "Limited to capital", "Plans sales, development or a captive centre"],
                ["Branch office", "Specified activities only", "Foreign company rate on profits; no dividend tax", "The UK company is directly liable", "Needs to carry out the parent's own business in India, such as export and import or consultancy"],
                ["Liaison office", "No", "No income; costs funded from the UK", "The UK company is directly liable", "Wants market research and liaison only"],
                ["LLP", "Yes (eligible sectors)", "LLP rate; distributions not taxed again", "Limited to contribution", "Fits a partnership or professional services model, after tax review"],
                ["Employer of Record", "No: the EOR employs on your behalf", "Service fee only; PE risk remains", "Contractual", "Wants staff in weeks, with no entity, to test the market"],
              ].map((row, i) => (
                <tr key={row[0]} className={i % 2 === 1 ? "bg-gray-50" : undefined}>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">{row[0]}</th>
                  <td className="border border-gray-300 p-3">{row[1]}</td>
                  <td className="border border-gray-300 p-3">{row[2]}</td>
                  <td className="border border-gray-300 p-3">{row[3]}</td>
                  <td className="border border-gray-300 p-3">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="why-sub" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why the subsidiary is usually the answer</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li><strong>Ring-fenced liability:</strong> a claim in India reaches the subsidiary, not the UK parent, subject to the usual exceptions.</li>
          <li><strong>Lower tax rate:</strong> a domestic company pays a lower headline rate than a foreign company&apos;s branch. The branch also faces the permanent establishment tests directly.</li>
          <li><strong>Commercial credibility:</strong> Indian customers, landlords, banks and employees deal more easily with an Indian company.</li>
          <li><strong>Clean exit:</strong> a sale of shares is easier than a sale of branch assets.</li>
        </ul>

        <h2 id="holding" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Direct holding or an intermediate company?</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A UK company can hold the Indian company directly, which keeps the 10% treaty dividend rate and the UK
          distribution exemption in view. Some groups insert a holding company in a third country for regional
          reasons. That structure must now pass the Multilateral Instrument&apos;s principal purpose test, so it
          needs staff, decision-making and a business reason beyond the treaty rate. The UK CFC and substance
          rules also apply. We would test the structure before recommending anything other than a direct
          holding.
        </p>

        <h2 id="people" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Directors and ownership: UK practical points</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian company needs a resident director. Options include a senior hire, a UK colleague who relocates, or an adviser-nominated director with a clear services agreement and indemnity.</li>
          <li>A UK group often uses a UK parent plus a second group company as shareholder. Choose the second shareholder so that its own tax and compliance burdens are small.</li>
          <li>Directors of the Indian company have statutory duties under the Companies Act, 2013, personal liability for some filings and potential disqualification for non-compliance, so brief UK nominees properly.</li>
        </ul>

        <h2 id="eor" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When an Employer of Record is the right first step</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          An Employer of Record (EOR) employs your people in India under its own entity and charges you a fee.
          It suits the first one to ten hires and the first year of a market test. The limits are that it cannot
          sign customer contracts for you, it does not remove permanent establishment risk if your managers
          direct the work, and the cost per head rises with scale. Plan the move to a subsidiary when headcount,
          contracts or assets in India make the EOR the wrong tool, and agree conversion terms with the EOR at
          the outset.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">HMRC</a>,{" "}
          <a href="https://www.gov.uk/government/organisations/companies-house" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Companies House</a>{" "}
          and the{" "}
          <a href="https://www.gov.uk/get-document-legalised" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">UK legalisation service for apostilles</a>.
        </p>

        <GuideServiceBox path="/uk-to-india/structure-options" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/uk-to-india/faq"
          seeAllLabel="See all 122 FAQs"
          seeAllDescription="Plain answers on incorporation, FEMA, tax, hiring and exit."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Reserve Bank of India: branch and liaison office rules", href: "https://www.rbi.org.in" },
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/uk-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 19 October 2026. General information only, not legal or tax advice. Indian and UK rules
          change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a UK team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for subsidiary vs branch vs liaison office in India, start with the decision a UK company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry structure for UK companies, answer it from this same file. It is not a separate project. Keep LLP vs private limited in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put wholly owned subsidiary on the checklist before the first filing, not after someone asks where it went. Companies House papers still need a notary and an apostille before India will rely on them. HMRC questions can wait until the Indian facts are finished. Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters. Do not hire a role whose only job is to close Indian revenue.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            That hire is the moment the office stops looking like a liaison office. Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected. If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough. When you renew, file what you actually did. A renewal that describes a different office from the one you ran is a problem you wrote yourself.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure. Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech. Fund the office with expense remittances from the parent, and keep the permission letter in the bank file. The bank will ask why the money arrived.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/liaison-office-registration" className="font-semibold text-blue-800 underline">liaison office registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Not Sure Which Entity Type Fits?"
        description="Tell us your planned activities in India — sales, delivery or back-office — and we'll recommend the right structure for a UK parent."
      />
    </main>
  )
}
