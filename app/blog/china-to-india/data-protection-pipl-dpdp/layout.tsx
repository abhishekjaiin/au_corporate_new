import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance for Chinese Companies: A 2026 Guide",
  },
  description:
    "DPDP Act compliance for Chinese companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  keywords: ["DPDP Act compliance for Chinese companies", "data protection India", "cross-border data transfer", "Data Fiduciary", "consent", "DPDP Rules 2025", "GDPR"],
  alternates: guideAlternates("china", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=DPDP%20Act%20Compliance%20for%20Chinese%20Companies%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "DPDP Act Compliance for Chinese Companies: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "DPDP Act Compliance for Chinese Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for Chinese companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/data-protection-pipl-dpdp",
    locale: "en_CN",
  },
  twitter: {
    title: "DPDP Act Compliance for Chinese Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for Chinese companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
