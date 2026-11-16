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

const PAGE_URL = "https://www.theaucorp.com/germany-to-india/incorporation-steps"
const PARENT_URL = "https://www.theaucorp.com/germany-to-india"

const toc = [
  { id: "country-specific", label: "What's different for German companies" },
  { id: "roles", label: "Who does what" },
  { id: "german-papers", label: "The German paper trail" },
  { id: "indian-steps", label: "The Indian steps" },
  { id: "calendar", label: "Fitting it around German holidays and approvals" },
  { id: "pitfalls", label: "Where German incorporations stall" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "How long does incorporation take from Germany?", a: "About 4 to 6 weeks from the day the German documents are ready." },
  { q: "Which authority apostilles German documents?", a: "The Landgericht for the notary's district, or the Landgericht of the register court for Handelsregister extracts." },
  { q: "Do German documents need translation?", a: "Yes, sworn English translations." },
  { q: "Which German documents are needed?", a: "A current Handelsregister extract, the articles and a resolution approving the investment." },
  { q: "Does a German investor need Indian government approval?", a: "Not in most sectors; Press Note 3 does not apply." },
  { q: "Do German directors need to travel to India?", a: "No. They sign with digital signatures." },
  { q: "Why approve the capital with the incorporation?", a: "So the 60-day allotment window is not delayed by a second approval." },
  { q: "What follows the certificate of incorporation?", a: "Bank account, capital, allotment, FC-GPR, auditor and registrations." },
]

const relatedCards = [
  { title: "Documents and Apostille from Germany", desc: "The Landgericht process.", href: "/germany-to-india/documents-handelsregister-apostille" },
  { title: "Structure Options", desc: "Choosing the entity.", href: "/germany-to-india/structure-options" },
  { title: "Funding and FEMA", desc: "Capital and reporting.", href: "/germany-to-india/funding-and-fema" },
  { title: "Compliance Calendar", desc: "What follows setup.", href: "/germany-to-india/compliance-calendar" },
]

export default function IncorporationStepsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Incorporating a Subsidiary in India from Germany: Who Does What, in What Order"
        description="How to register a company in India from Germany. It covers the structure, the papers your parent signs and the filings that follow today. Start with the papers."
        datePublished="2026-10-26"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-DE"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Germany", href: "/germany-to-india" },
          { label: "Incorporating an Indian Subsidiary from Germany: Who Does What, and When" },
        ]}
      />

      <GuideHero
        eyebrow="Setup: the step-by-step plan"
        title="Incorporating a Subsidiary in India from Germany: Who Does What, in What Order"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A German GmbH or AG can incorporate its Indian subsidiary in about 4 to 6 weeks from the day its documents are ready. Germany has no single apostille office, so each document goes to the right Landgericht after notarisation, and every document needs a sworn English translation. The Indian side, digital signatures and the SPICe+ filing, can be prepared in parallel and usually takes 7 to 15 working days once the papers arrive.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Germany
          </Link>
        </p>

        <GuideCountryContext country="germany" topic="incorporation-process" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["German documents", "Current Handelsregister extract, Gesellschaftsvertrag or Satzung, shareholder or management resolution"],
                ["Apostille", "Landgericht of the notary's district; Landgericht of the register court for Handelsregister extracts"],
                ["Translation", "Sworn (beeidigte) English translation"],
                ["Indian filing", "SPICe+, with DINs, PAN and TAN"],
                ["Timeline", "About 4 to 6 weeks from documents ready"],
                ["Time difference", "India 3.5 hours ahead in summer, 4.5 in winter"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="roles" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who does what</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Task</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">German side</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Board and shareholder approval</th>
                <td className="border border-gray-300 p-3">Geschäftsführung or Vorstand, with shareholder consent if the articles require</td>
                <td className="border border-gray-300 p-3">Draft resolution wording provided by us</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Register extract</th>
                <td className="border border-gray-300 p-3">Ordered from the Handelsregister</td>
                <td className="border border-gray-300 p-3">Checked for name and signatory details</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Notary and apostille</th>
                <td className="border border-gray-300 p-3">German notary and the competent Landgericht</td>
                <td className="border border-gray-300 p-3">Checklist of which document goes where</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Translation</th>
                <td className="border border-gray-300 p-3">Sworn translator</td>
                <td className="border border-gray-300 p-3">Spelling checked against passports</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Digital signatures and SPICe+</th>
                <td className="border border-gray-300 p-3">Directors provide KYC</td>
                <td className="border border-gray-300 p-3">AU Corporate files</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Bank account and capital</th>
                <td className="border border-gray-300 p-3">Treasury remits EUR</td>
                <td className="border border-gray-300 p-3">AU Corporate coordinates KYC and FC-GPR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 id="german-papers" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The German paper trail</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Order a fresh Handelsregister extract; Indian authorities expect recent documents.</li>
          <li>Pass the resolution approving the Indian company, the capital and the authorised signatory.</li>
          <li>Have private documents notarised.</li>
          <li>Send each document to the competent Landgericht for the apostille.</li>
          <li>Commission sworn English translations and keep the translator&apos;s certificate with each original.</li>
        </ol>
        <h2 id="indian-steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The Indian steps</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Digital Signature Certificates for directors and the subscriber&apos;s signatory.</li>
          <li>Name reservation and SPICe+ filing with the memorandum, articles and office proof.</li>
          <li>Certificate of Incorporation with PAN and TAN.</li>
          <li>Bank account opening and EUR capital remittance.</li>
          <li>Allotment within 60 days and FC-GPR within 30 days of allotment.</li>
          <li>First auditor within 30 days; INC-20A within 180 days.</li>
        </ol>
        <h2 id="calendar" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Fitting it around German holidays and approvals</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          German groups often need Aufsichtsrat or shareholder approval for a new foreign subsidiary, and summer and Christmas holidays slow notaries and Landgerichte. Indian deadlines, such as the 60-day allotment window, keep running regardless, so approve the capital and the authority to allot in the same resolution as the incorporation.
        </p>
        <h2 id="pitfalls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Where German incorporations stall</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Sending a document to the wrong Landgericht.</li>
          <li>Translations that spell names differently from passports.</li>
          <li>A Handelsregister extract that has aged before filing.</li>
          <li>No resident director chosen when the forms are ready.</li>
        </ul>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We send a Germany-specific checklist showing which Landgericht apostilles each document, prepare the Indian forms in parallel, file SPICe+ and complete the bank and RBI steps.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Related services: <Link href="/india-subsidiary-registration" className="text-blue-800 font-semibold hover:underline">India subsidiary registration</Link> and <Link href="/fema-rbi-compliance" className="text-blue-800 font-semibold hover:underline">FEMA and RBI compliance</Link>.
        </p>

        <GuideServiceBox path="/germany-to-india/incorporation-steps" />
        <GuideCTA
          title="Incorporating in India from Germany?"
          description="Tell us your target date, and we will send the checklist and a fixed quote."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/germany-to-india/faq"
          seeAllLabel="See all German FAQs"
          seeAllDescription="Answers on incorporation, FEMA, tax, hiring and exit for German parents."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in" },
            { label: "Federal Foreign Office, Germany: apostille", href: "https://www.auswaertiges-amt.de/en" },
            { label: "Reserve Bank of India", href: "https://www.rbi.org.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/germany-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a German team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for how to register a company in India from Germany, start with the decision a German company has to make. The form name is the second conversation, not the first. If the parent team asks about German company incorporation in India, answer it from this same file. It is not a separate project. Keep SPICe+ incorporation in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put name approval on the checklist before the first filing, not after someone asks where it went. MOA AOA sits on the critical path more often than people expect. Leave a line for it in the working paper. The Handelsregister extract has to be notarised and apostilled. GDPR and works-council questions travel with the people plan. They do not replace the Indian forms. Allot the shares, then report the investment.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment. Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out. Confirm the parent can own the shares it thinks it can own. The sector, and the shareholder chain above the parent, sometimes change the route.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep. Appoint a resident director who really spends the required time in India. A name on a slide is not a director, and the declaration has to be true. Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Waiting until India asks for it is how timelines slip. Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back. Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment. The certificate of incorporation does not pay anyone. Ask the bank what it wants before the money leaves.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/india-subsidiary-registration" className="font-semibold text-blue-800 underline">Indian subsidiary registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Ready to Incorporate from Germany?"
        description="Tell us your sector, share capital and target date, and we'll send the SPICe+ checklist for a German parent and a fixed quote."
      />
    </main>
  )
}
