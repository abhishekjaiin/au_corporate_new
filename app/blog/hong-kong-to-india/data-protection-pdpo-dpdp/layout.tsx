import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance for Hong Kong Companies: 2026 Guide",
  },
  description:
    "DPDP Act compliance for Hong Kong companies. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  keywords: ["DPDP Act compliance for Hong Kong companies", "data protection India", "cross-border data transfer", "Data Fiduciary", "consent", "DPDP Rules 2025", "GDPR"],
  alternates: guideAlternates("hongkong", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20PDPO%20and%20India's%20DPDP%20Act", width: 1200, height: 630, alt: "DPDP Act Compliance for Hong Kong Companies: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "DPDP Act Compliance for Hong Kong Companies: 2026 Guide",
    description:
      "DPDP Act compliance for Hong Kong companies. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
    url: "https://www.theaucorp.com/hong-kong-to-india/data-protection-pdpo-dpdp",
    locale: "en_HK",
  },
  twitter: {
    title: "DPDP Act Compliance for Hong Kong Companies: 2026 Guide",
    description:
      "DPDP Act compliance for Hong Kong companies. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
