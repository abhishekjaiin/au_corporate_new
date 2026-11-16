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

const PAGE_URL = "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide"
const PARENT_URL = "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties"

const toc = [
  { id: "what", label: "What a tax treaty does" },
  { id: "scope", label: "Who and what the treaty covers" },
  { id: "saving", label: "The US saving clause" },
  { id: "residence", label: "Treaty residence for companies and individuals" },
  { id: "steps", label: "How to use the treaty in practice" },
  { id: "disputes", label: "When the two countries disagree" },
  { id: "us-parent", label: "What this means for a US parent" },
  { id: "mistakes", label: "Mistakes to avoid" },
  { id: "rates-in-practice", label: "Treaty rates against Indian domestic rates" },
  { id: "make-available", label: "The make-available test for US service fees" },
  { id: "software", label: "Software payments after the Engineering Analysis ruling" },
  { id: "worked-example", label: "Worked example: a royalty to a US parent" },
  { id: "us-documents", label: "The documents a US company provides" },
  { id: "how-we-help", label: "How AU Corporate handles this" },
  { id: "faqs", label: "Frequently asked questions" },
]

const faqs = [
  { q: "What is a DTAA?", a: "A double taxation avoidance agreement. It decides which country can tax which income and reduces tax at source on certain cross-border payments." },
  { q: "Does the India-US treaty replace Indian tax law?", a: "No. It works alongside it. The Indian Act applies only to the extent it is more beneficial than the treaty (Section 159 of the Income-tax Act, 2025)." },
  { q: "Is the treaty automatic?", a: "No. You must prove residence, usually with a Tax Residency Certificate and Form 41 (previously Form 10F), and meet the conditions for each article." },
  { q: "Does the treaty cover social security tax?", a: "No. Article 2 excludes US social security taxes from the covered taxes." },
  { q: "What is the saving clause?", a: "A US treaty clause that allows the US to tax its own citizens and residents as if the treaty did not exist, subject to listed exceptions." },
  { q: "How is double taxation relieved?", a: "Mainly by a foreign tax credit in the country of residence, and by lower Withholding Tax at source." },
  { q: "What if a tax authority does not follow the treaty?", a: "You can request the mutual agreement procedure so that the two tax authorities resolve the case." },
  { q: "Is a US LLC treated as a US resident under the treaty?", a: "It depends on how the LLC is taxed in the US. A pass-through entity needs specific analysis, so take advice before claiming treaty benefits." },
]

const relatedCards = [
  { title: "India-US DTAA Withholding Tax Rates: Dividends, Interest, Royalties and Fees for Included Services", desc: "Treaty rates for payments from India to the US: dividends 15% or 25%, interest 10% or 15%, royalties and fees 10% or 15%. Conditions and how to apply them.", href: "/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" },
  { title: "How to Claim India-US Treaty Benefits: Form 6166, Form 41 and Beneficial Ownership", desc: "Documents needed to claim India-US treaty rates: IRS Form 6166, Form 41 (previously Form 10F), no-PE declaration and beneficial ownership.", href: "/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents" },
  { title: "The India-US Tax Treaty and Permanent Establishment Risk for US Companies", desc: "How the India-US tax treaty applies to payments to your US parent: Withholding Tax rates, Tax Residency Certificate, Form 41 and permanent establishment risk.", href: "/usa-to-india/dtaa-pe-risk" },
  { title: "Tax Notices and Disputes in India: What US Companies Should Do", desc: "What to do on receiving an Indian income tax, GST or transfer pricing notice: first steps, appeal routes, DRP, ITAT, MAP and Advance Pricing Agreements.", href: "/usa-to-india/tax-notices-and-litigation" },
]

export default function IndiaUsDtaaGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <GuideArticleSchema
        url={PAGE_URL}
        headline="The India-US Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        description="India USA DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner this year."
        datePublished="2026-10-14"
        dateModified="2026-11-02"
        isPartOfUrl={PARENT_URL}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Set Up a Subsidiary in India from the USA", href: "/usa-to-india" },
          { label: "Tax and Social Security Treaties", href: "/usa-to-india/tax-and-social-security-treaties" },
          { label: "India-US DTAA: Tax Treaty Between the US and India Explained" },
        ]}
      />

      <GuideHero
        eyebrow="Treaties: DTAA"
        title="The India-US Tax Treaty (DTAA) Explained: Scope, Residency and Relief from Double Tax"
        updated="2 November 2026"
      />

      <article className="max-w-4xl mx-auto px-4 py-14">
        <GuideAnswerBox title="Short answer">
          The India-US tax treaty (DTAA) divides taxing rights between the two countries so that income is not
          taxed twice. It applies to residents of either country, covers income taxes only, and lets you use the
          treaty or domestic law, whichever is more beneficial. Relief comes through lower Withholding Tax at
          source, exemptions for some income, and a foreign tax credit in the country of residence.
        </GuideAnswerBox>

        <GuideTOC items={toc} />

        <p className="mb-8">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide: How to Set Up a Subsidiary in India from the USA
          </Link>
        </p>

        <p className="mb-8">
          <Link href="/usa-to-india/tax-and-social-security-treaties" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to India-US tax treaty and social security: the complete guide
          </Link>
        </p>

        <h2 id="key-facts" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Key facts</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <tbody>
              {[
                ["Instrument", "Convention between India and the United States for the avoidance of double taxation and the prevention of fiscal evasion"],
                ["Who qualifies", "A person who is a resident of India or the US under the treaty, including companies"],
                ["Taxes covered", "Income taxes. Social security taxes are excluded (Article 2)"],
                ["Indian law", "Section 159 of the Income-tax Act, 2025 (previously Sections 90 and 90A): treaty applies to the extent more beneficial"],
                ["Proof of residence", "A Tax Residency Certificate, plus Form 41 (previously Form 10F) where required"],
                ["Dispute route", "Mutual agreement procedure between the two tax authorities"],
              ].map(([k, v]) => (
                <tr key={k} className="odd:bg-secondary/30">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold text-[#081a42] w-1/3 align-top">{k}</th>
                  <td className="border border-gray-300 p-3 align-top">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What a tax treaty does</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Without a treaty, India taxes income arising in India, and the US taxes its citizens, residents and
          companies on worldwide income. The same dollar can be taxed twice. The treaty allocates which country
          may tax which kind of income, caps the tax a source country can charge on certain payments, and gives
          the country of residence the job of relieving what remains.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The treaty works alongside domestic law. Under Section 159 of the Income-tax Act, 2025 (previously
          Sections 90 and 90A of the 1961 Act), the Indian Act applies only to the extent it is more beneficial
          to the taxpayer than the treaty. A non-resident must hold a residency certificate and provide the
          documents the rules prescribe to claim relief.
        </p>

        <h2 id="scope" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Who and what the treaty covers</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Item</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Position</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Persons</th>
                  <td className="border border-gray-300 p-3">Residents of India or the US, as defined in Article 4 (residence)</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Taxes</th>
                  <td className="border border-gray-300 p-3">Federal income tax in the US; income tax and surcharge in India. Social security taxes are excluded</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Business profits</th>
                  <td className="border border-gray-300 p-3">Taxable in the source country only if there is a permanent establishment there. See <Link href="/usa-to-india/dtaa-pe-risk" className="text-blue-800 font-semibold hover:underline">PE risk</Link></td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends, interest, royalties, fees</th>
                  <td className="border border-gray-300 p-3">Taxable in both countries, with a cap on the source country&apos;s rate. See <Link href="/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates" className="text-blue-800 font-semibold hover:underline">withholding rates</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Capital gains</th>
                  <td className="border border-gray-300 p-3">Generally taxed under domestic law, with specific treaty rules for certain assets</td>
                </tr>
                <tr className="bg-gray-50">
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Employment income</th>
                  <td className="border border-gray-300 p-3">Rules for salaried individuals. See <Link href="/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us" className="text-blue-800 font-semibold hover:underline">tax residency for expats</Link></td>
                </tr>
                <tr>
                  <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Relief</th>
                  <td className="border border-gray-300 p-3">Foreign tax credit in the country of residence (Article 25)</td>
                </tr>
            </tbody>
          </table>
        </div>

        <h2 id="saving" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The US saving clause</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          The US treaty practice includes a saving clause that lets the US tax its own citizens and residents as
          if the treaty did not exist, with specific exceptions. This is why a US citizen working in India still
          files in the US and relies on the foreign tax credit or exclusions rather than treaty exemption. Your
          US adviser should confirm how it applies to each person.
        </p>

        <h2 id="residence" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty residence for companies and individuals</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>A <strong>company</strong> is usually a resident where it is incorporated or managed, as the treaty defines. A US parent incorporated in the US is a US resident.</li>
          <li>An <strong>individual</strong> who is a resident of both countries under domestic law is resolved by the tie-breaker in Article 4: permanent home, then centre of vital interests, then habitual abode, then nationality, and finally agreement between the tax authorities.</li>
          <li>Treaty residence is proved with a certificate from the home tax authority. For the US this is Form 6166 issued by the IRS.</li>
        </ul>

        <h2 id="steps" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to use the treaty in practice</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li>Confirm who the recipient is and that it is the beneficial owner of the income.</li>
          <li>Identify the type of payment: dividend, interest, royalty, fees for included services or something else.</li>
          <li>Obtain the Tax Residency Certificate and Form 41 (previously Form 10F), plus any no-PE declaration the payer asks for.</li>
          <li>The Indian payer deducts Withholding Tax under Section 393 (previously Section 195) at the treaty rate where conditions are met.</li>
          <li>The US recipient claims a foreign tax credit in its US return for Indian tax paid, under US rules.</li>
        </ol>

        <h2 id="disputes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">When the two countries disagree</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          If you are taxed in a way that does not follow the treaty, you can ask your country&apos;s tax
          authority to resolve it with the other under the mutual agreement procedure (Article 27). Transfer
          pricing adjustments can also be dealt with this way. See{" "}
          <Link href="/usa-to-india/tax-notices-and-litigation" className="text-blue-800 font-semibold hover:underline">tax notices and litigation</Link>.
        </p>

        <h2 id="us-parent" className="text-2xl font-bold text-gray-900 mt-12 mb-4">What this means for a US parent</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Treaty relief reduces Indian tax at source; it does not remove your US filing. Use the foreign tax credit and keep proof of Indian tax paid.</li>
          <li>Treaty articles carry conditions, so confirm each claim against the treaty text and the current Indian law before relying on it.</li>
        </ul>

        <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Mistakes to avoid</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Assuming the treaty applies automatically without documents.</li>
          <li>Ignoring the beneficial ownership condition when payments pass through another entity.</li>
          <li>Treating the treaty as covering social security.</li>
          <li>Using a rate from a table without checking the payment category.</li>
        </ul>

        <h2 id="rates-in-practice" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Treaty rates against Indian domestic rates</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-US treaty caps the tax India can withhold on payments to a US resident. The domestic rates below apply only where the treaty paperwork is missing or the payment falls outside a treaty article. Treaty rates are applied to the gross amount and, as Indian courts have consistently held, are not increased by surcharge or cess.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Payment from India to a US resident</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Treaty cap (India-US)</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Domestic rate without treaty benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends to a US company holding at least 10% of the voting stock</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and 4% cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Dividends in other cases</th>
                <td className="border border-gray-300 p-3">25%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and 4% cess</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Interest on a loan from a bank or financial institution</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess (lower rates for some approved foreign-currency borrowings)</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Other interest, such as a parent company loan</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Royalties and fees for included services for equipment rental</th>
                <td className="border border-gray-300 p-3">10%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Other royalties and fees for included services</th>
                <td className="border border-gray-300 p-3">15%</td>
                <td className="border border-gray-300 p-3">20% plus surcharge and cess</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          Where the domestic rate is lower than the treaty rate, the lower domestic rate applies, because a treaty can only reduce tax, never increase it (Section 159 of the Income-tax Act, 2025, previously Section 90).
        </p>
        <h2 id="make-available" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The make-available test for US service fees</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The India-US treaty is narrower than most Indian treaties on service fees. Under Article 12(4), a technical or consultancy fee is taxable in India as a fee for included services only if the service is ancillary to a royalty, or if it <strong>makes available</strong> technical knowledge, experience, skill, know-how or processes that the Indian company can then use on its own. A Memorandum of Understanding attached to the treaty gives worked examples.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left">Service from the US parent</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Usually makes available?</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Indian tax if the US company has no PE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Training that teaches the Indian team to run a system themselves</th>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">15% withholding as a fee for included services</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Handing over designs, code or a process the Indian company keeps using</th>
                <td className="border border-gray-300 p-3">Yes</td>
                <td className="border border-gray-300 p-3">15% withholding</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Ongoing IT helpdesk, hosting or managed services the US team keeps performing</th>
                <td className="border border-gray-300 p-3">Generally no</td>
                <td className="border border-gray-300 p-3">Business profits: not taxable in India without a PE</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Group management, HR or finance support with no transfer of skill</th>
                <td className="border border-gray-300 p-3">Generally no</td>
                <td className="border border-gray-300 p-3">Business profits: not taxable in India without a PE</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The answer turns on facts, so we read the intercompany agreement and the actual deliverables. Getting it right matters: an Indian payer that wrongly withholds nothing becomes liable for the tax itself, with interest, and the expense can be disallowed in its own return.
        </p>
        <h2 id="software" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Software payments after the Engineering Analysis ruling</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          In Engineering Analysis Centre of Excellence v. CIT (2021), the Supreme Court of India held that payments by Indian distributors and end users for off-the-shelf software licences are not royalty under India&apos;s treaties, because no copyright is transferred. For a US software or SaaS company without a permanent establishment in India, licence fees paid by an Indian subsidiary or customer are therefore generally business profits that India cannot tax under the treaty. Customised development, source code rights and the right to modify or sublicense can still be royalty, so each contract needs reading on its own terms. Both Indian equalisation levies have since been abolished: the 2% levy on e-commerce supplies from 1 August 2024 and the 6% levy on online advertising from 1 April 2025.
        </p>
        <h2 id="worked-example" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Worked example: a royalty to a US parent</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An Indian subsidiary pays its US parent INR 1 crore a year for the right to use the group&apos;s trademark and know-how.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-[#081a42] text-white">
              <tr>
                <th scope="col" className="border border-gray-300 p-3 text-left"></th>
                <th scope="col" className="border border-gray-300 p-3 text-left">With treaty paperwork</th>
                <th scope="col" className="border border-gray-300 p-3 text-left">Without treaty paperwork</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Rate applied</th>
                <td className="border border-gray-300 p-3">15% (Article 12)</td>
                <td className="border border-gray-300 p-3">20% plus 4% cess = 20.8%</td>
              </tr>
              <tr className="bg-gray-50">
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Indian withholding</th>
                <td className="border border-gray-300 p-3">INR 15 lakh</td>
                <td className="border border-gray-300 p-3">INR 20.8 lakh</td>
              </tr>
              <tr>
                <th scope="row" className="border border-gray-300 p-3 text-left font-semibold">Credit in the US</th>
                <td className="border border-gray-300 p-3">Generally available as a foreign tax credit, subject to US limits</td>
                <td className="border border-gray-300 p-3">Only up to the treaty rate; the excess is a refund claim in India</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mb-10">
          The INR 5.8 lakh difference is recoverable only through an Indian refund claim if the paperwork arrives late, which can take a year or more. We collect the documents before the first payment.
        </p>
        <h2 id="us-documents" className="text-2xl font-bold text-gray-900 mt-12 mb-4">The documents a US company provides</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-10">
          <li><strong>IRS Form 6166</strong>, the US certificate of residency. The US company applies to the IRS on Form 8802; allow several weeks, and request it for the Indian tax year that the payments fall in.</li>
          <li><strong>Form 41 (previously Form 10F)</strong>, filed electronically on the Indian income tax portal by the US company. This needs the US company to register on the portal, usually with an Indian PAN.</li>
          <li>A declaration that the US company is the beneficial owner of the income and has no permanent establishment in India, signed by an authorised officer.</li>
          <li>A PAN for the US company. Without one, Indian law applies a higher withholding rate, unless the US company gives its US tax identification number, address, email and residency certificate (the relief previously in Rule 37BC).</li>
          <li>For limitation on benefits under Article 24, a short note on how the US company qualifies, for example as a publicly traded company or one owned by US residents.</li>
        </ol>

        <h2 id="how-we-help" className="text-2xl font-bold text-gray-900 mt-12 mb-4">How AU Corporate handles this</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We confirm the treaty position, collect documents and apply the correct Withholding Tax rate on every
          remittance to the US.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Related services:{" "}
          <Link href="/corporate-tax-gst-transfer-pricing" className="text-blue-800 font-semibold hover:underline">Taxation and regulatory services</Link>
        </p>

        <h2 id="official-sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Official sources</h2>
        <p className="text-gray-600 leading-relaxed mb-10">
          Rules on this page can be verified at the primary sources: the{" "}
          <a href="https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">Income Tax Department&apos;s treaty page</a>,
          the{" "}
          <a href="https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRS treaty list</a>{" "}
          and the{" "}
          <a href="https://www.irs.gov/pub/irs-trty/inditech.pdf" rel="noopener" target="_blank" className="text-blue-800 font-semibold hover:underline">IRS technical explanation of the India-US treaty</a>.
        </p>

        <GuideServiceBox path="/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide" />
        <GuideCTA
          title="You focus on your business. We handle India."
          description="Tell us your plan and we will map the next steps on a call."
        />

        <h2 id="faqs" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
        <GuideFaqList
          faqs={faqs}
          seeAllHref="/usa-to-india/tax-and-social-security-treaties/faq"
          seeAllLabel="Treaty and social security FAQs"
          seeAllDescription="50 plain answers on the India-US tax treaty, withholding rates, expat tax and social security."
        />

        <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related guides</h2>
        <div className="mb-10">
          <GuideRelatedCards cards={relatedCards} />
        </div>

        <h2 id="sources" className="text-2xl font-bold text-gray-900 mt-12 mb-4">Sources</h2>
        <GuideSources
          sources={[
            { label: "Income Tax Department: tax treaties", href: "https://incometaxindia.gov.in/Pages/international-taxation/dtaa.aspx" },
            { label: "Internal Revenue Service: tax treaties A to Z", href: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z" },
            { label: "IRS: Technical Explanation of the India-US treaty", href: "https://www.irs.gov/pub/irs-trty/inditech.pdf" },
            { label: "Income Tax Department", href: "https://www.incometax.gov.in" },
          ]}
        />

        <p className="mt-6">
          <Link href="/usa-to-india" className="text-blue-800 font-semibold hover:underline">
            &larr; Back to the complete guide
          </Link>
        </p>


        <p className="text-sm text-gray-500 mt-6">
          Last updated 2 November 2026. General information only, not legal or tax advice. Indian rules change
          often; confirm current requirements before acting.
        </p>
              {/* seo-expand:start */}
        <section id="how-this-works-in-practice" className="mt-12 max-w-full" aria-label="Practical notes">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-24 break-words">What a US team should do next</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If you are here for India USA DTAA, start with the decision a US company has to make. The form name is the second conversation, not the first. If the parent team asks about India USA tax treaty, answer it from this same file. It is not a separate project. Keep DTAA rates in the kickoff note. People use different words for it, and the papers are the same papers.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Put TRC on the checklist before the first filing, not after someone asks where it went. The slow piece for a US parent is the state apostille on the board resolution, not the Indian portal. Form 5471 and the group audit pack come after the Indian entity exists. GST registration should follow the activity, not a guess in the first week. Registering too early creates returns with nothing on them.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Registering late creates a different problem. Store the treaty residency certificate with the withholding working paper. The rate is only as good as the paper that supports it. Once a year, read the intercompany agreements against the invoices. Contracts and billing drift apart, and the drift is what gets questioned. Corporate tax, GST and transfer pricing are three calendars. A team that watches only the income-tax return will miss a GST date, and the GST date is monthly.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">The order that usually works</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Give every intercompany charge a basis before the invoice goes out. A year-end true-up with no working paper is how a transfer-pricing file gets thin. Compute withholding on the Indian rule, then check the treaty. Doing it the other way round is how a rate gets applied to the wrong payment. Write invoice descriptions that a tax officer can understand without a call. 'Management support' with no hours and no names will not do.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Keep the advance-tax dates in the same diary as the group forecast. A missed instalment is a quiet interest cost the parent will ask about later. Keep the signed PDF, not a photo of the signed PDF. Banks and the Registrar both send those back, and the week you lose is never the week you had spare. Do not translate the Indian sequence into the sequence you use at home.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The words look familiar. The order is not, and the home order will get a form rejected. When a date moves, tell the parent the same day. A quiet slip becomes a quarter-end surprise, and the person who has to explain it is rarely the person who moved the date. Save the acknowledgement. The form, on its own, does not prove you filed. The acknowledgement is what you produce when the group auditor asks.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Use the legal name of the Indian entity on the invoice, the contract and the bank. A brand name that is close enough for a website is not close enough for a KYC team. If a step needs a wet-ink signature, book it before the signatory travels. Chasing a director through an airport lounge is how a simple filing takes a month. One folder for the year, with a dull name, beats a trail of attachments.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 scroll-mt-24">What we ask on the first call</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            The next finance manager should be able to open it and see what was filed without calling anyone. Read the activity you registered against the work you actually do. Drift is quiet. It shows up when a bank, a customer or an auditor asks a question you did not expect. A fixed scope is kinder than an open promise to 'handle India'. List the forms, the period and what is outside the work.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            People can plan around a list. The first year is clumsier than the third. Budget time for a portal that wants the same document twice, and for a director who has not used an Indian login before. Ask the bank what it wants before the money leaves. Every bank has a slightly different pack, and the second version of the pack is the one that gets accepted. Write the owner's name next to every filing.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            If the owner is 'the team', then nobody owns it, and the reminder will sit in a channel until the date has passed. Give the work a single name that both offices recognise. If India calls it onboarding and the parent calls it legal, the status email will talk about two projects that are one project. Decide what 'done' means before you start. Done is not 'we sent the documents'.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            Done is the acknowledgement in the folder and the parent told, on the same day. Keep a decision log of three columns: the question, the answer, and who may change the answer. Memory is a poor system once a second director joins the thread. Do not collect passport scans in a personal WhatsApp chat. Put them in the folder with a restricted list. You will need them again, and you will not want to hunt a phone.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4 break-words">
            When two documents disagree on a date of birth or a spelling, stop. Pick the passport and make everything else match it. Do not file the hopeful version. A weekly fifteen-minute call beats a monthly essay. The call has three questions: what moved, what is stuck, and what you need from the parent before Friday. If the parent wants a dashboard, give them five dates and a red or a green.
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
            Keep the signed pack in one shared folder.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mb-4">
            If you want the filings done rather than only explained, see our <a href="/corporate-tax-gst-transfer-pricing" className="font-semibold text-blue-800 underline">tax and transfer pricing</a>.
          </p>
        </section>
        {/* seo-expand:end */}
      </article>

      <GuideLeadForm
        title="Applying the India-US Treaty to Your Group?"
        description="Tell us the payments and people moving between India and the US — we'll confirm how the treaty applies and what documents you need."
      />
    </main>
  )
}
