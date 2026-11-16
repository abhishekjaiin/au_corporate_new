import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DPDP Act Compliance for Russian Companies: A 2026 Guide",
  },
  description:
    "DPDP Act compliance for Russian companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  keywords: ["DPDP Act compliance for Russian companies", "data protection India", "cross-border data transfer", "Data Fiduciary", "consent", "DPDP Rules 2025", "GDPR"],
  alternates: guideAlternates("russia", "data-protection"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russia%20152-FZ%20and%20India's%20DPDP%20Act", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "DPDP Act Compliance for Russian Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for Russian companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/data-protection-152fz-dpdp",
    locale: "en_RU",
  },
  twitter: {
    title: "DPDP Act Compliance for Russian Companies: A 2026 Guide",
    description:
      "DPDP Act compliance for Russian companies. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
