import Link from "next/link"
import { InquiryTrigger } from "@/components/InquiryTrigger"
import { Check, ArrowRight } from "lucide-react"
import { Breadcrumb } from "@/components/Breadcrumb"
import { SubsidiaryDepth } from "@/components/service/depth/SubsidiaryDepth"
import { LeadForm } from "@/components/LeadForm"
import { RelatedResources } from "@/components/RelatedResources"
import { FaqAccordion } from "@/components/FaqAccordion"
import { RelatedCaseStudies } from "@/components/case-study/RelatedCaseStudies"
import { AuthorLink } from "@/components/AuthorLink"

const heroFacts = [
  { title: "Fixed Fee", body: "USD 750–1,000 all-inclusive" },
  { title: "4–6 Weeks Timeline", body: "From signed documents to FC-GPR" },
  { title: "Resident Director Service", body: "A professional resident director, if you need one" },
  { title: "Registered Office Service", body: "An Indian registered address, if you don't have one" },
]

const youGet = [
  "A registered Indian private limited company with its Certificate of Incorporation",
  "PAN and TAN, and GST registration where needed",
  "An Indian bank account with your share capital received",
  "Shares issued to your parent, with share certificates",
  "Foreign investment reported to the RBI in Form FC-GPR",
]

const needFromYou = [
  { n: "1", title: "Board Resolution", body: "Approving the subsidiary, the investment amount, the directors and an authorised representative." },
  { n: "2", title: "Parent Company Documents", body: "Certificate of incorporation, charter documents and proof of registered address." },
  { n: "3", title: "Director and Shareholder Details", body: "Passport, address proof, email and mobile for each director and the nominee shareholder." },
  { n: "4", title: "A Resident Director", body: "At least one director who stays in India 182 days or more in the year. Don't have one? We can provide a professional resident director." },
  { n: "5", title: "An Indian Office Address", body: "Your own leased office or co-working space, or our registered office service if you don't have premises yet." },
  { n: "6", title: "Share Capital", body: "Remitted from abroad to the new company's Indian bank account once it is opened." },
]

const timeline = [
  { wk: "Week 1", title: "Plan", body: "Confirm the FDI route, capital, directors and company name options." },
  { wk: "Weeks 1–2", title: "Documents", body: "Draft everything and guide you through signing and authentication." },
  { wk: "Weeks 2–4", title: "Incorporate", body: "Digital signatures, name approval and incorporation with PAN and TAN." },
  { wk: "Weeks 4–5", title: "Bank and Capital", body: "Open the bank account and receive the share capital from your parent." },
  { wk: "Weeks 5–6", title: "Shares and FC-GPR", body: "Issue shares and report the investment to the RBI within 30 days of allotment." },
]

const included = [
  "Structure and FDI Route Advice",
  "Document Checklist for Your Country",
  "Digital Signatures and Director IDs",
  "Name Reservation",
  "Incorporation with PAN and TAN",
  "Bank Account Opening Support",
  "Share Issue and Share Certificates",
  "Form FC-GPR Filing with the RBI",
]

const countryGuides = [
  { label: "USA", href: "/usa-to-india" },
  { label: "UK", href: "/uk-to-india" },
  { label: "Australia", href: "/australia-to-india" },
  { label: "Japan", href: "/japan-to-india" },
  { label: "Singapore", href: "/singapore-to-india" },
  { label: "Germany", href: "/germany-to-india" },
  { label: "China", href: "/china-to-india" },
  { label: "Hong Kong", href: "/hong-kong-to-india" },
]

const afterLinks = [
  { label: "Accounting and Reporting", href: "/accounting-reporting-audit-support" },
  { label: "FEMA and RBI Compliance", href: "/fema-rbi-compliance" },
  { label: "Tax and Transfer Pricing", href: "/corporate-tax-gst-transfer-pricing" },
  { label: "Secretarial Compliance", href: "/secretarial-roc-compliance" },
  { label: "Payroll and Expat Services", href: "/payroll-expat-services" },
]

const faqs = [
  { q: "How much does it cost to register a subsidiary in India?", a: "Registering a subsidiary in India with AU Corporate costs USD 750–1,000, all-inclusive. The fee covers government fees and our professional fees for a subsidiary with INR 10 lakh share capital. Larger share capital or some states cost more, and we confirm a fixed quote before we start." },
  { q: "How long does it take to register a subsidiary in India?", a: "Registering a subsidiary in India typically takes 4–6 weeks from the day we receive your signed and authenticated documents. Notarising and apostilling documents in your own country is usually the longest step, so we prepare the Indian filings in parallel." },
  { q: "What is included in AU Corporate's subsidiary registration fee?", a: "AU Corporate's subsidiary registration fee includes structure and FDI advice, digital signatures and director IDs, name approval, incorporation with PAN and TAN, bank account opening support, share issue to the parent, share certificates and the FC-GPR filing with the RBI." },
  { q: "What is not included in the price?", a: "The subsidiary registration price does not include notary and apostille fees in your country, courier costs, or compliance after incorporation. Ongoing compliance is available from AU Corporate as a separate fixed monthly or annual package." },
  { q: "Which company in India can help a foreign company set up a subsidiary?", a: "AU Corporate is a CA-led firm, serving clients pan India since 2016, that helps foreign companies from the USA, the UK, Japan, Singapore, Germany, Australia and other countries with company registration in India, from incorporating the Indian subsidiary to running its compliance. We handle name approval, the parent's documents, SPICe+ incorporation, PAN and TAN, the bank account, the share issue and the FC-GPR filing, typically in 4–6 weeks for USD 750–1,000 all-inclusive. For one US client, we incorporated the subsidiary in 14 days." },
  { q: "How does a foreign company register a company in India?", a: "A foreign company registers a company in India by incorporating an Indian subsidiary, usually a private limited company. The parent passes a board resolution and has its documents notarised and apostilled (or legalised, where its country is outside the Apostille Convention), the directors get digital signatures, and a resident director is appointed. We then reserve the name and file SPICe+ with the Registrar of Companies. Once incorporated, the subsidiary opens a bank account, receives the share capital and files FC-GPR within 30 days of allotting shares. Most parents complete the setup in 4–6 weeks without travelling to India." },
  { q: "Is company registration in India different for a foreign company?", a: "Company registration in India works the same way for a foreign-owned company: it is incorporated as a private limited (Pvt Ltd) company under the Companies Act, 2013. A foreign parent has extra steps in the company formation: authenticating its documents, checking that its sector allows foreign investment under the Automatic Route, appointing a resident director, and filing FC-GPR with the RBI within 30 days of allotting shares to the parent." },
  { q: "What should we look for in a firm to register our Indian subsidiary?", a: "When comparing company incorporation services in India, look for a firm led by Chartered Accountants and Company Secretaries that handles the FEMA filings (FC-GPR and the FLA return), not just incorporation. It should be able to provide a resident director if you need one, quote a fixed fee, and run the subsidiary's accounting, tax and ROC compliance afterwards, so one team is accountable from day one." },
  { q: "Can a foreign company own 100% of an Indian subsidiary?", a: "A foreign company can own 100% of an Indian subsidiary in most sectors, under the automatic route with no prior government approval. A few sectors cap foreign ownership or need approval, so AU Corporate checks your business activity against India's FDI rules before you commit." },
  { q: "How many shareholders does an Indian subsidiary need?", a: "An Indian subsidiary needs at least two shareholders. In a wholly owned subsidiary, the foreign parent holds almost all the shares and a nominee, usually a group company or an individual, holds one share on the parent's behalf." },
  { q: "Can we set up a joint venture instead of a wholly owned subsidiary?", a: "A foreign company can set up a joint venture with an Indian or foreign partner instead of a wholly owned subsidiary. Both are private limited companies, so the registration process, timeline and fee are the same; the difference is the ownership split and the shareholders' agreement." },
  { q: "How much share capital should an Indian subsidiary start with?", a: "An Indian subsidiary has no legal minimum share capital. The amount should cover set-up and running costs until the Indian subsidiary earns revenue, and AU Corporate's standard package is priced for INR 10 lakh share capital." },
  { q: "Do our directors need to travel to India to register the subsidiary?", a: "Directors do not need to travel to India to register a subsidiary. Documents are signed and authenticated in their own country and couriered to AU Corporate, although some banks ask for a short video verification of an authorised signatory." },
  { q: "What do you need from us to get started?", a: "To start registering your Indian subsidiary, AU Corporate needs your company details, the proposed directors and shareholders, the planned share capital and an Indian office address if you have one. We then send a fixed quote and a document checklist for your country." },
  { q: "Who authenticates the parent company's documents for India?", a: "The parent's documents are notarised and then apostilled by the competent authority in its home country, for example a Secretary of State in the US. Countries outside the Apostille Convention, such as China, use notarisation, home-country authentication and attestation by the Indian embassy or consulate instead. AU Corporate sends a checklist for your country showing exactly which documents need it." },
  { q: "Does an Indian subsidiary need a resident director?", a: "An Indian subsidiary must have at least one resident director, meaning a director who has stayed in India for 182 days or more in the financial year. The other directors can live abroad." },
  { q: "What if we don't have a resident director?", a: "If you don't have a resident director, AU Corporate can provide a professional resident director at a reasonable cost, so you can register your Indian subsidiary without having someone in India yet." },
  { q: "Can we make our Indian employee a resident director?", a: "An Indian employee can be appointed as the resident director if the employee agrees. In practice many employees prefer not to become directors, because a directorship comes with legal responsibilities under Indian company law." },
  { q: "What does a professional resident director provided by AU Corporate do?", a: "A professional resident director provided by AU Corporate signs the secretarial and statutory documents the subsidiary needs. The resident director has no authority over bank operations or vendor and customer contracts, and does not interfere in running the Indian subsidiary in any way." },
  { q: "What if we don't have an office in India yet?", a: "If you don't have an office in India yet, AU Corporate can provide a registered office address, so you can register the subsidiary before you lease premises." },
  { q: "In which Indian state can we register the subsidiary?", a: "An Indian subsidiary can be registered in any state; the state is decided by the registered office address. Government fees and stamp duty vary by state, so AU Corporate confirms the exact cost once the location is known." },
  { q: "Does AU Corporate help open the subsidiary's bank account?", a: "AU Corporate coordinates the subsidiary's bank account opening with the bank and prepares the paperwork. The parent then remits the share capital from abroad into that account." },
  { q: "When can the subsidiary hire employees?", a: "An Indian subsidiary can start hiring once it is incorporated and its bank account is open. Payroll, provident fund and employee insurance registrations are added as needed, and AU Corporate can run payroll from the first month." },
  { q: "Can AU Corporate run the subsidiary after incorporation?", a: "AU Corporate can run your Indian subsidiary after incorporation, including accounting, payroll, GST, TDS, FEMA filings, transfer pricing, audit support and annual returns. Most of our clients stay with us, so they have one team from setup onwards." },
  { q: "Can AU Corporate take over compliance for an existing Indian subsidiary?", a: "AU Corporate can take over compliance for a foreign company's existing Indian subsidiary. We start by reviewing past filings, fix any gaps, and then manage the monthly and annual compliance going forward." },
  { q: "Does the parent company have to report the Indian subsidiary in its home country?", a: "Usually yes, under its home country's tax and company rules; for example, a US parent generally reports its Indian subsidiary to the IRS on Form 5471. The parent's home-country adviser prepares these filings, and AU Corporate provides the Indian financial statements and figures they need. Our country guides cover the home-country side for each parent country." },
]
const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2))
const faqsRight = faqs.slice(Math.ceil(faqs.length / 2))

export default function IndiaSubsidiaryRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={[{ label: "India Subsidiary Registration" }]} />

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#081a42] to-[#0d2a5c] text-white py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            <div className="flex-[1.4] min-w-0">
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Foreign Subsidiary in India</span>
              <h1 className="mb-5 mt-3 text-4xl font-bold md:text-5xl leading-tight">
                India Subsidiary Registration for Foreign Companies
              </h1>
              <p className="mb-6 text-xl leading-relaxed text-white/85 max-w-2xl">
                Incorporation of your wholly owned subsidiary or joint venture, including name approval, PAN and TAN, bank account opening, share issue to the parent and FC-GPR filing.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="https://cal.com/abhishek-jaiin-ybbklq/30min" className="inline-block px-5 py-3 rounded-lg font-bold text-sm bg-gold text-[#081a42] hover:bg-gold-dark transition">Book Consultation with an Expert</a>
                <InquiryTrigger className="inline-block px-5 py-3 rounded-lg font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition">Get a Fixed Quote</InquiryTrigger>
              </div>
              <p className="text-sm text-white/70">150+ Subsidiaries Incorporated &middot; Parent Companies from 10+ Countries &middot; Since 2016</p>
            </div>
            <aside className="flex-1 min-w-[280px] rounded-2xl border border-white/20 bg-white/5 p-6 md:p-7" aria-label="Package summary">
              <ul className="space-y-5">
                {heroFacts.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={13} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <div>
                      <strong className="block text-white font-bold">{f.title}</strong>
                      <span className="block text-sm text-white/70">{f.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We Set Up Your Indian Subsidiary, End to End</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                An Indian subsidiary is a private limited company owned by your parent company. It can hire staff, sign contracts, invoice customers and bill your parent, with its liability kept separate from yours. The FDI route check, the SPICe+ forms and the post-incorporation deadlines are set out{" "}
                <Link href="#fdi-route" className="text-gold-dark font-semibold hover:underline">further down this page</Link>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                AU Corporate handles the whole registration from India: structure, filings, bank account, share issue and the RBI reporting. You sign a handful of documents in your own country, and we do the rest.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Get</h3>
              <ul className="space-y-3">
                {youGet.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full bg-gold">
                      <Check size={11} strokeWidth={3} className="text-[#081a42]" />
                    </span>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE NEED FROM YOU */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents Required to Register an Indian Subsidiary</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The six documents and details we need from the parent company. We send a checklist for your country, so documents are authenticated correctly the first time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {needFromYou.map((item) => (
              <div key={item.title} className="p-5 bg-white border border-gray-200 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-[#081a42] text-gold font-bold text-sm flex items-center justify-center mb-3">{item.n}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE STEPS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How AU Helps, in Five Steps</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            We prepare the Indian filings while your documents are being authenticated, so the two don&apos;t hold each other up.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {timeline.map((step) => (
              <div key={step.title} className="border-t-4 border-gold bg-white rounded-b-lg p-4 shadow-sm">
                <span className="inline-block text-xs font-bold uppercase tracking-wide text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded mb-2">{step.wk}</span>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What&apos;s Included in the Package</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            One all-inclusive price of USD 750&ndash;1,000, with a fixed quote confirmed before we start.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#081a42] text-gold text-xs font-bold flex items-center justify-center mt-0.5">&#10003;</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Not included:</strong> notary and apostille fees in your country, courier costs, and compliance after incorporation. Government fees and stamp duty vary by state and share capital, so larger capital or some states cost more.
          </p>
        </div>
      </section>

      <SubsidiaryDepth />

      {/* SETTING UP FROM YOUR COUNTRY */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Setting Up from Your Country</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Documents, authentication, tax treaties and reporting differ by country. Choose yours for a detailed guide.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {countryGuides.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="flex items-center justify-between gap-2 bg-white border border-gray-200 rounded-lg px-4 py-4 font-bold text-[#081a42] hover:border-gold-dark hover:shadow-sm transition"
              >
                {c.label}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">Guide <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <RelatedCaseStudies serviceSlug="india-subsidiary-registration" />

      {/* AFTER SETUP */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-8 items-center justify-between border border-gray-200 rounded-2xl p-8 bg-white">
            <div className="flex-1 min-w-[280px]">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">After Setup, We Can Run It for You</h2>
              <p className="text-gray-600">
                Accounting, payroll, GST, TDS, FEMA filings, transfer pricing, secretarial compliance and audit support, from the same team that set up your Indian subsidiary.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {afterLinks.map((l) => (
                <Link key={l.href} href={l.href} className="px-4 py-2 border border-[#081a42] text-[#081a42] rounded-full text-sm font-semibold hover:bg-[#081a42] hover:text-white transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Questions Before You Start</h2>
          <p className="text-gray-600 mb-6">For detailed rules, see the guide for your country above.</p>
          <p className="text-sm text-gray-600 mb-1">
            Written and reviewed by <AuthorLink className="font-semibold text-[#081a42] hover:underline" />, Chartered Accountant (All India Rank 44; ICAI Membership No. 544646) &middot; Last reviewed: <time dateTime="2026-11-02">2 November 2026</time>
          </p>
          <p className="text-sm text-gray-500 mb-10">
            This is general guidance based on Indian law and practice as at the date above. It is not advice for your specific case, and rules can change.
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10">
            <FaqAccordion faqs={faqsLeft} />
            <FaqAccordion faqs={faqsRight} />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      {/* LEAD FORM */}
      <section className="py-16 bg-secondary/50" id="contact">
        <div className="max-w-5xl mx-auto px-4">
          <LeadForm
            title="Ready to Register Your Indian Subsidiary?"
            description="Tell us where your parent company is, your planned share capital and when you want to start, and we'll reply with a fixed quote and a document checklist for your country."
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <RelatedResources
            links={[
              {
                label: "Accounting, Reporting and Audit Support",
                href: "/accounting-reporting-audit-support",
                description: "Monthly bookkeeping, reconciliations and US GAAP/IFRS reporting once the subsidiary is incorporated.",
              },
              {
                label: "FEMA and RBI Compliance",
                href: "/fema-rbi-compliance",
                description: "FC-GPR, FC-TRS, the annual FLA return and ECB reporting that follow the initial share allotment.",
              },
              {
                label: "Corporate Tax, GST and Transfer Pricing",
                href: "/corporate-tax-gst-transfer-pricing",
                description: "Corporate tax returns, GST registration and transfer pricing for the newly incorporated entity.",
              },
              {
                label: "Secretarial and ROC Compliance",
                href: "/secretarial-roc-compliance",
                description: "Board meetings, AGM and annual ROC filings once the company is on the register.",
              },
              {
                label: "Payroll and Expat Services",
                href: "/payroll-expat-services",
                description: "Payroll, PF/ESI and employment contracts for your first hires in India.",
              },
              {
                label: "Company Registration in India",
                href: "/india-subsidiary-registration",
                description: "The full SPICe+ incorporation process and FDI eligibility rules behind this registration service.",
              },
              {
                label: "FDI Automatic vs Government Route",
                href: "/india-business-setup/fdi-channels",
                description: "Which sectors clear under the automatic route versus needing prior government approval before shares are issued.",
              },
            ]}
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.theaucorp.com/india-subsidiary-registration#service",
            name: "India Subsidiary Registration",
            description:
              "Incorporation of a wholly owned subsidiary or joint venture in India, including name approval, PAN and TAN, bank account opening, share issue to the parent and FC-GPR filing.",
            provider: { "@type": "Organization", name: "AU Corporate", url: "https://www.theaucorp.com" },
            url: "https://www.theaucorp.com/india-subsidiary-registration",
            areaServed: "India",
            serviceType: "Incorporation of Indian Subsidiaries for Foreign Companies",
          }),
        }}
      />
            {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What to do with this in practice</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for Indian subsidiary registration, start with the decision a foreign company has to make. The form name is the second conversation, not the first. If the parent team asks about wholly owned subsidiary in India, answer it from this same file. It is not a separate project. Keep foreign subsidiary company registration in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put FDI automatic route on the checklist before the first filing, not after someone asks where it went. SPICe+ sits on the critical path more often than people expect. Leave a line for it in the working paper. Open the bank account in the entity's exact legal name before you promise a salary date or a vendor payment. The certificate of incorporation does not pay anyone. Allot the shares, then report the investment.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The day the money arrives and the day the shares are allotted are different days, and the reporting clock follows the allotment. Decide the structure before you collect passports. A subsidiary, a branch and a liaison office are different permissions, different tax and a different way out. Confirm the parent can own the shares it thinks it can own. The sector, and the shareholder chain above the parent, sometimes change the route.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Pick two company names you would actually answer the phone as. The first name is often taken. The second name should not be a joke you would hate to keep. Appoint a resident director who really spends the required time in India. A name on a slide is not a director, and the declaration has to be true. Start the home-country notarisation while the Indian name is in process. That pack is usually the long pole.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Waiting until India asks for it is how timelines slip. Match every director and shareholder name to the passport, including middle names. A shortened name that HR uses will not match, and the filing comes back. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project. Decide what 'done' means before you start.
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
            Keep a copy of what you told the parent last week. When the date moves, the explanation should start from that note, not from a reconstructed memory of the call. Do the name check, the director check and the activity check as three separate lines. Bundling them into 'KYC done' is how a mismatch survives until the filing is rejected. If the group already has an Indian entity, say whether this work is for that entity or for a new one.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Teams have incorporated a second company because nobody checked the first. Write the escalation in one line: who gets told if a filing is two days from late. A policy that says 'inform management' is not an escalation. After the bank account is open, send a test description of the first inward remittance to the bank before the parent sends the money. The purpose line is easier to fix in a draft than in a live transfer.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            When you close the year, archive the folder and start a new one. Mixing two financial years in one directory is how an acknowledgement from last March gets attached to this March. Before you call the work finished, read the whole pack as if you were the person who has to defend it six months later. Check the legal name, the dates, the signatory and the activity against each other.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If two pages disagree, fix them now. Then send the parent a short note with the acknowledgement, the next date on the calendar and the name of the person who owns that date. That note is the handover. Without it, the knowledge stays in one inbox, and the next filing starts from zero.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/contact" className="font-semibold text-blue-800 underline">contact AU Corporate</a>.
          </p>
        </section>
        {/* seo-expand:end */}
    </main>
  )
}
