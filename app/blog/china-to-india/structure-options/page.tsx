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

const PAGE_URL = "https://www.theaucorp.com/china-to-india/structure-options"
const PARENT_URL = "https://www.theaucorp.com/china-to-india"

const toc = [
  { id: "country-specific", label: "What's different for Chinese companies" },
  { id: "compare", label: "Structures compared" },
  { id: "jv", label: "Joint ventures with an Indian partner" },
  { id: "third", label: "Why a third-country holding company is not a shortcut" },
  { id: "pick", label: "A quick way to choose" },
  { id: "cost", label: "Cost and time" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "Which structure suits a Chinese company entering India?", a: "A private limited company, wholly owned or as a joint venture with an Indian partner, is the most common. All routes need government approval where the investor is Chinese." },
  { q: "Can a Chinese company open a branch office in India?", a: "Yes, with RBI approval, a net worth of USD 100,000 and a five-year profit record, plus a security review for land-border-country applicants." },
  { q: "What can a liaison office do?", a: "Liaison and market research only, with no income or invoicing. It needs RBI approval and USD 50,000 net worth with a three-year record." },
  { q: "Is an Employer of Record a way around Press Note 3?", a: "No. It is a hiring vehicle for a pilot. If the real business is in a restricted sector or Chinese-controlled, the approval requirement still applies." },
  { q: "Does a joint venture with an Indian partner avoid Press Note 3?", a: "No. The Chinese stake still needs approval. A structure with Indian majority ownership and control may help in the fast-track sectors." },
  { q: "Can I use a Hong Kong or Singapore holding company?", a: "It does not avoid Press Note 3 where Chinese beneficial ownership or control exists, and mis-describing the structure is a FEMA risk." },
]

const relatedCards = [
  { title: "Press Note 3 for Chinese Companies: When Government Approval Is Needed and What the 2026 Easing Changes", desc: "How India's Press Note 3 (2020) applies to a Chinese parent: prior government approval for investors incorporated in China, the 2026 easing for passive minority land-border ownership, the control test, the 60-day sectors, director clearance and planning.", href: "/china-to-india/india-press-note-3-and-chinese-investors" },
  { title: "Manufacturing in India with a Chinese Partner: Approval, Joint Venture Terms, Technology Licences and Local Content", desc: "How Chinese manufacturers approach India: joint ventures with Indian partners, the 60-day fast-track sectors under the amended Press Note 3, incentive schemes, technology licences, supply chains, customs and the practical limits.", href: "/china-to-india/manufacturing-and-jv-for-chinese-companies" },
  { title: "Setting Up the Indian Subsidiary After Approval: Step-by-Step Plan for a Chinese Parent", desc: "The step-by-step plan for incorporating an Indian private limited company owned by a Chinese parent: Press Note 3 approval, documents, director clearance, SPICe+, bank account, funding, RBI reporting and the first 180 days.", href: "/china-to-india/incorporation-steps" },
  { title: "Funding an Indian Subsidiary from China: Equity, Convertible Instruments, ECB Loans, SAFE Remittance and FC-GPR", desc: "How a Chinese parent funds an Indian subsidiary: equity pricing and valuation, compulsorily convertible instruments, external commercial borrowing, the Chinese SAFE step, inward remittance, FC-GPR and the 60-day and 30-day clocks.", href: "/china-to-india/funding-and-fema" },
]

export default function StructureOptionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record"
        description="Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers."
        datePublished="2026-10-26"
        dateModified="2026-10-26"
        isPartOfUrl={PARENT_URL}
        inLanguage="en-CN"
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from China", href: "/china-to-india" },
          { label: "Subsidiary, Joint Venture, Branch or EOR: Choosing the Structure for a Chinese Investor" },
        ]}
      />

      <GuideHero
        eyebrow="Structure: options"
        title="Choosing the Structure in India as a Chinese Investor: Wholly Owned Subsidiary, Joint Venture, Branch or Employer of Record"
        updated="26 October 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          For a Chinese investor, the choice of structure is partly a choice of how the Press Note 3 approval
          will look. A wholly owned subsidiary needs approval for 100% Chinese ownership. A joint venture with
          an Indian partner may be easier to approve and, in the fast-track manufacturing sectors, a structure
          with Indian majority ownership and control is reportedly expected. A branch or liaison office needs
          RBI approval and clears the land-border check in a separate way. An Employer of Record can be a first
          step for hiring, but not a way to avoid the rules.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from China
          </Link>
        </p>

        <GuideCountryContext country="china" topic="subsidiary-vs-branch-vs-liaison-office-vs-llp" />

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Wholly owned subsidiary", "Full control; needs government approval for a 100% Chinese stake; sector caps apply"],
                ["Joint venture", "Shared ownership with an Indian partner; approval covers the Chinese stake; shareholder agreement must match the approval"],
                ["Branch office", "Parent's own activities; RBI approval with land-border-country security review; net worth USD 100,000 and a five-year profit record"],
                ["Liaison office", "Liaison only, no income; RBI approval; net worth USD 50,000 and three years of record"],
                ["LLP", "Allowed in eligible sectors; FEMA conditions; approval still applies for Chinese partners"],
                ["Employer of Record", "A third party employs staff on its entity; not a way to avoid the rules"],
                ["Via a third-country vehicle", "Does not avoid Press Note 3 where Chinese beneficial ownership or control exists"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Structures compared</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Structure</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Best for</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Press Note 3 and approval</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Main limits</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wholly owned private limited company", "Sales, development, assembly, captive teams", "Government approval required for the Chinese stake", "Two directors (one resident); audit and ROC compliance; sector caps"],
                ["Joint venture company with an Indian partner", "Manufacturing, distribution, access to local relationships", "Approval required for the Chinese stake; fast-track manufacturing sectors reportedly look for Indian majority ownership and control", "Shareholder agreement, deadlock and exit terms; FEMA pricing for transfers"],
                ["Branch office", "The parent's own services or trading in permitted activities", "RBI approval and security review for land-border-country applicants", "Profit record test; taxed as a foreign company at higher rates; parent directly liable"],
                ["Liaison office", "Liaison and market research", "RBI approval and security review", "No income or invoicing; costs funded from China"],
                ["LLP", "Professional or service partnerships in eligible sectors", "Approval applies to Chinese partners", "Tax and FEMA review; limited use for manufacturing"],
                ["Employer of Record", "A first hire or a short pilot", "Not a route around approval for operating a business", "The EOR is the legal employer; control and PE risk"],
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

        <h2 id="jv" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Joint ventures with an Indian partner</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Many Chinese manufacturers look at joint ventures with Indian companies, particularly in electronics and components. The approval application should describe the JV, the Chinese stake and the technology or supply arrangements.</li>
          <li>The shareholder agreement should match what was approved: shareholding, board seats, vetoes and transfer restrictions. Changes that increase Chinese control may need fresh approval.</li>
          <li>Agree the technology licence, supply and brand terms at arm&apos;s length. See <Link href="/china-to-india/transfer-pricing" className="text-blue-800 font-semibold hover:underline">transfer pricing</Link>.</li>
          <li>Plan the exit before the entry: call and put options, drag and tag rights, and valuation, within FEMA pricing rules. See <Link href="/china-to-india/exit-and-restructuring" className="text-blue-800 font-semibold hover:underline">exit and restructuring</Link>.</li>
          <li>More on manufacturing models: <Link href="/china-to-india/manufacturing-and-jv-for-chinese-companies" className="text-blue-800 font-semibold hover:underline">manufacturing and joint ventures</Link>.</li>
        </ul>

        <h2 id="third" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why a third-country holding company is not a shortcut</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The amended policy looks at beneficial ownership and control. A Singapore or Hong Kong holding company
          owned by a Chinese parent leaves the Chinese beneficial owner above the threshold, so the approval
          requirement remains. Using such a vehicle without disclosing the Chinese ownership risks a FEMA
          contravention and trouble with the bank and the Registrar.
        </p>

        <h2 id="pick" className="text-2xl font-bold text-gray-900 mt-12 mb-4">A quick way to choose</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Operate with your own team and full control, in a sector open to foreign investment: wholly owned subsidiary.</li>
          <li>Need local partner, land, licences or customer access: joint venture.</li>
          <li>Only market research and liaison: liaison office, if you meet the tests.</li>
          <li>One or two hires for a pilot: Employer of Record, then convert.</li>
        </ul>

        <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Cost and time</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          A subsidiary has the highest setup cost but the cleanest long-term position. A joint venture adds
          legal and valuation costs for the partner agreement. Branch and liaison offices need RBI approval,
          which can take months. Plan the approval time into the project calendar. See{" "}
          <Link href="/china-to-india/incorporation-steps" className="text-blue-800 font-semibold hover:underline">incorporation steps</Link>.
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Check the rules at the primary sources:{" "}
          <a href="https://www.incometax.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department (India)</a>,{" "}
          <a href="https://www.rbi.org.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Reserve Bank of India</a>,{" "}
          <a href="https://www.mca.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of Corporate Affairs</a>,{" "}
          <a href="https://www.mofcom.gov.cn/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">MOFCOM (China)</a>,{" "}
          <a href="https://www.safe.gov.cn/en/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">SAFE (China)</a>{" "}
          and the{" "}
          <a href="https://www.mea.gov.in/" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Ministry of External Affairs (India)</a>.
        </p>

        <GuideServiceBox path="/china-to-india/structure-options" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/china-to-india/faq"
          seeAllLabel="See all 147 FAQs"
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
            { label: "DPIIT: Consolidated FDI Policy", href: "https://dpiit.gov.in/" },
            { label: "Ministry of Corporate Affairs", href: "https://www.mca.gov.in/" },
          ]}
        />

        <p className="mt-6">
          <Link href="/china-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 26 October 2026. General information only, not legal or tax advice. Indian and Chinese
          rules change often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a Chinese team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for subsidiary vs branch vs liaison office in India, start with the decision a Chinese company has to make. The form name is the second conversation, not the first. If the parent team asks about India entry structure for Chinese companies, answer it from this same file. It is not a separate project. Keep LLP vs private limited in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put tax rate on the checklist before the first filing, not after someone asks where it went. Check the shareholder chain for Press Note 3 before anyone drafts an Indian form. Legalised documents and a certified English translation are the usual long pole. If the work grows into contracts, stop and restructure. Do not stretch the old permission and hope the wording is wide enough. When you renew, file what you actually did.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            A renewal that describes a different office from the one you ran is a problem you wrote yourself. Be honest about the activity. A liaison office cannot invoice Indian customers. If the plan is to sell, you are choosing the wrong structure. Write a one-page note of what the office may do. New hires drift into sales conversations. The note is how you stop that without a speech. Fund the office with expense remittances from the parent, and keep the permission letter in the bank file.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The bank will ask why the money arrived. Track the permission end date on the same calendar as the annual activity certificate. The opening party is not the date that matters. Do not hire a role whose only job is to close Indian revenue. That hire is the moment the office stops looking like a liaison office. Keep the parent's approval for the expense budget. Auditors and the RBI both like to see that the money was expected.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments. The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work. People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing. If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Keep the signed PDF, not a photo of the signed PDF.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home. The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks. Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Decide what 'done' means before you start. Done is not 'we sent the documents'. Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            You will need them again, and you will not want to hunt a phone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/liaison-office-registration" className="font-semibold text-blue-800 underline">liaison office registration</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Subsidiary, Joint Venture, Branch or EOR?"
        description="Tell us what the India operation will do, and we'll recommend the structure that suits a Chinese investor under Press Note 3."
      />
    </main>
  )
}
