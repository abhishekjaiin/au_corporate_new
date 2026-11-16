import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance for German Companies: A 2026 Guide",
  },
  description:
    "DPDP Act compliance for German companies. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  keywords: ["DPDP Act compliance for German companies", "data protection India", "cross-border data transfer", "Data Fiduciary", "consent", "DPDP Rules 2025", "GDPR"],
  alternates: guideAlternates("germany", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=DPDP%20Act%20Compliance%20for%20German%20Companies%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "DPDP Act Compliance for German Companies: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "DPDP Act Compliance for German Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for German companies. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
    url: "https://www.theaucorp.com/germany-to-india/data-protection-gdpr-dpdp",
    locale: "en_DE",
  },
  twitter: {
    title: "DPDP Act Compliance for German Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for German companies. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
