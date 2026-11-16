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

const PAGE_URL = "https://www.theaucorp.com/singapore-to-india/gcc-for-singapore-companies"
const PARENT_URL = "https://www.theaucorp.com/singapore-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Singapore companies" },
  { id: "models", label: "The three models" },
  { id: "pricing", label: "Pricing the centre" },
  { id: "gst", label: "Indian GST on exports of services" },
  { id: "pe", label: "Avoiding a permanent establishment" },
  { id: "controls", label: "Controls for regulated groups" },
  { id: "start", label: "A practical start" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a Global Capability Centre?", a: "A captive team in India that performs technology, finance, analytics or operations work for the parent group. The usual form is an Indian subsidiary paid cost plus a mark-up." },
  { q: "How is a GCC priced for tax?", a: "Normally cost plus a mark-up from a benchmarking study, under a services agreement with the Singapore entity, and reviewed each year." },
  { q: "Are GCC services to Singapore exempt from GST in India?", a: "They can be zero-rated as exports of services if the recipient is outside India, payment is in convertible foreign exchange and the other conditions are met." },
  { q: "Does a GCC create a permanent establishment for the Singapore parent?", a: "Not by itself if the Indian entity is a separate low-risk provider, but Singapore staff directing the work or concluding contracts in India can create one." },
  { q: "Does MAS regulate a captive centre in India?", a: "MAS regulates the Singapore financial institution, and expects controls over work done by a group company in India, as for any third-party arrangement." },
  { q: "Should we use build-operate-transfer?", a: "It reduces early risk and time, but check the transfer terms, tax on the transfer and who owns the know-how." },
]

const relatedCards = [
  { title: "Transfer Pricing Between a Singapore Parent and an Indian Subsidiary: What India Requires and Where Singapore Differs", desc: "How transfer pricing works between Singapore and India: Indian arm's length rules, Form 48, documentation, master file, safe harbours, IRAS routine support mark-up, APAs and the mutual agreement route.", href: "/singapore-to-india/transfer-pricing" },
  { title: "Moving Personal Data Between Singapore and India: PDPA Transfer Rules and the DPDP Act", desc: "How Singapore's PDPA and India's Digital Personal Data Protection Act apply when a Singapore company has an Indian subsidiary: transfer limitation, contracts, breach notice, consent, penalties and a build plan.", href: "/singapore-to-india/data-protection-pdpa-dpdp" },
  { title: "Hiring in India as a Singapore Employer: What Changes from Singapore Practice", desc: "A comparison for Singapore HR teams hiring in India: employment contracts, provident fund, ESI, gratuity, labour codes, notice and termination, payroll tax and share plans, set against Singapore practice.", href: "/singapore-to-india/hiring-in-india" },
  { title: "Which Structure Should a Singapore Company Use in India? Subsidiary, Branch, Liaison Office, LLP, GIFT City or Employer of Record", desc: "A decision guide for Singapore companies: wholly owned subsidiary, branch, liaison office, LLP, GIFT City IFSC unit and EOR, with eligibility tests, tax results and a choice by business model.", href: "/singapore-to-india/structure-options" },
]

export default function GccForSingaporeCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk"
        description="GCC in India for Singapore companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers."
        datePublished="2026-10-21"
        dateModified="2026-10-21"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-SG"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from Singapore", href: "/singapore-to-india" },
          { label: "Global Capability Centres in India for Singapore Companies: Models, Pricing and Tax" },
        ]}
      />

      <GuideHero
        eyebrow="Operate: the captive centre"
        title="Setting Up a Global Capability Centre in India for a Singapore Group: Models, Pricing, Tax and Risk"
        updated="21 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          A Global Capability Centre (GCC) is a captive team in India that does technology, finance, analytics
          or operations work for the Singapore group, and the usual form is an Indian subsidiary paid cost plus
          a mark-up. The legal work is the same as for any subsidiary, but three issues decide success: pricing
          that survives Indian and Singapore transfer pricing review, export-of-services treatment for GST, and
          keeping Singapore managers from creating a permanent establishment. Regulated Singapore financial
          groups also need MAS controls on third-party arrangements.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/singapore-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from Singapore
          </Link>
        </p>

        <GuideCountryContext country="singapore" topic="gcc" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Models", "Captive subsidiary; build-operate-transfer with a partner; hybrid or shared service with a partner running part of the operation"],
                ["Pricing", "Cost plus a mark-up from benchmarking, usually under a services agreement with the Singapore entity"],
                ["GST", "Services supplied to a recipient outside India, paid in convertible foreign exchange, can be zero-rated as exports if the conditions are met"],
                ["PE risk", "Singapore staff who direct or conclude contracts in India can create a taxable presence"],
                ["Regulation", "MAS expectations on third-party arrangements for financial institutions; Indian sector rules if the work touches Indian customers"],
                ["Talent", "Large technical hiring pools in several Indian cities; wage inflation and attrition need budgeting"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="models" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The three models</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Model</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">How it works</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Watch for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Captive subsidiary", "You own and run the Indian entity", "Core functions, long-term, high control", "Set-up time and management bandwidth"],
                ["Build-operate-transfer", "A partner builds and runs the centre, then transfers it to you", "Speed and low initial risk", "Transfer terms, tax on the transfer, knowledge ownership"],
                ["Hybrid", "You hold the entity; a partner runs part of operations", "Mixed models while you build capability", "Split responsibilities; data access"],
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

        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Pricing the centre</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>The Indian entity is normally characterised as a low-risk service provider paid cost plus a mark-up.</li>
          <li>The mark-up comes from a benchmarking study of independent companies with similar functions, and is reviewed each year.</li>
          <li>IRAS accepts a published mark-up for routine support services on the Singapore side; India still wants its own benchmarking. See <Link href="/singapore-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Document the service scope, hours and cost base, and keep time and cost records for audit.</li>
        </ul>

        <h2 id="gst" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Indian GST on exports of services</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A supply of services by the Indian entity to the Singapore group can be zero-rated as an export if the
          recipient is outside India, the service is delivered there, payment is in convertible foreign exchange
          and the supplier and recipient are not merely establishments of a distinct person. The last point
          matters for a branch. A subsidiary is a separate person, so the structure helps. File the right
          documents and claim input credit refunds.
        </p>

        <h2 id="pe" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Avoiding a permanent establishment</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Keep contract-making authority with the Indian entity for Indian customers and with the Singapore entity for Singapore customers.</li>
          <li>Do not let Singapore staff run the Indian team day to day from India beyond defined visit days.</li>
          <li>Keep intercompany agreements, invoices and board minutes consistent with the stated risk profile.</li>
          <li>Review the thresholds in <Link href="/singapore-to-india/india-singapore-dtaa" className="text-blue-800 font-semibold hover:underline">the tax treaty guide</Link>: services staff above 90 days (30 days for services to an associated enterprise) are a risk.</li>
        </ul>

        <h2 id="controls" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Controls for regulated groups</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Document the arrangement with the Indian group company, the risk assessment and the exit plan for MAS-regulated entities.</li>
          <li>Make sure the Indian entity can give your auditors and regulators access to records and premises.</li>
          <li>Test business continuity from the Indian site.</li>
          <li>Align data security with the data protection programme. See <Link href="/singapore-to-india/data-protection-pdpa-dpdp" className="text-blue-800 font-semibold hover:underline">PDPA and DPDP</Link>.</li>
        </ul>

        <h2 id="start" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A practical start</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Define scope: functions, headcount in years one to three, and the target cost.</li>
          <li>Choose the city, the premises model (managed office, coworking or own lease) and the hiring plan.</li>
          <li>Form the subsidiary and sign the services agreement before work starts.</li>
          <li>Hire leaders first, then the team, with a knowledge transfer plan from Singapore.</li>
          <li>Review the pricing and the tax position after the first year.</li>
        </ol>

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

        <GuideServiceBox path="/singapore-to-india/gcc-for-singapore-companies" />
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
            { label: "Monetary Authority of Singapore: third-party risk guidelines", href: "https://www.mas.gov.sg/" },
            { label: "CBIC: GST", href: "https://www.cbic.gov.in/" },
            { label: "IRAS: transfer pricing", href: "https://www.iras.gov.sg/" },
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
            If you are here for GCC in India for Singapore companies, start with the decision a Singapore company has to make. The form name is the second conversation, not the first. If the parent team asks about global capability centre India, answer it from this same file. It is not a separate project. Keep captive centre in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put BOT on the checklist before the first filing, not after someone asks where it went. SEZ sits on the critical path more often than people expect. Leave a line for it in the working paper. A Singapore holding company does not skip Indian reporting. It only changes who signs the parent set. ACRA papers still need an apostille. Appoint a resident director who really spends the required time in India.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A name on a slide is not a director, and the declaration has to be true. Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole. Waiting until India asks for it is how timelines slip. Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment. The certificate of incorporation does not pay anyone. Allot the shares, then report the investment. The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment. Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Confirm the parent can own the shares it thinks it can own. The sector, and the shareholder chain above the parent, sometimes change the route. Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Chasing a director through an airport lounge is how a simple filing takes a month.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/india-subsidiary-registration" className="font-semibold text-blue-800 underline">Indian subsidiary registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Setting Up a GCC in India from Singapore?"
        description="Tell us the functions and headcount, and we'll map the entity, transfer pricing and compliance for your capability centre."
      />
    </main>
  )
}
