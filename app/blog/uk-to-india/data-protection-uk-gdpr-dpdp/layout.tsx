import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance for UK Companies: 2026 Filing Guide",
  },
  description:
    "DPDP Act compliance for UK companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  keywords: ["DPDP Act compliance for UK companies", "data protection India", "cross-border data transfer", "Data Fiduciary", "consent", "DPDP Rules 2025", "GDPR"],
  alternates: guideAlternates("uk", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=DPDP%20Act%20Compliance%20for%20UK%20Companies%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "DPDP Act Compliance for UK Companies: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "DPDP Act Compliance for UK Companies: 2026 Filing Guide",
    description:
      "DPDP Act compliance for UK companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/data-protection-uk-gdpr-dpdp",
    locale: "en_GB",
  },
  twitter: {
    title: "DPDP Act Compliance for UK Companies: 2026 Filing Guide",
    description:
      "DPDP Act compliance for UK companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
