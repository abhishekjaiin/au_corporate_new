import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Singapore CECA for Foreign Companies: 2026 Guide",
  },
  description:
    "India Singapore CECA. It covers the structure, the papers your parent signs and the filings that follow in plain English for your finance team on a single page.",
  keywords: ["India Singapore CECA for Foreign Companies: 2026 Guide", "CECA benefits", "rules of origin", "tariff", "services", "investment"],
  alternates: guideAlternates("singapore", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Singapore%20CECA%20for%20Foreign%20Companies%3A%202026%20Guide", width: 1200, height: 630, alt: "India Singapore CECA for Foreign Companies: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India Singapore CECA for Foreign Companies: 2026 Guide",
    description:
      "India Singapore CECA. It covers the structure, the papers your parent signs and the filings that follow in plain English for your finance team on a single page.",
    url: "https://www.theaucorp.com/singapore-to-india/india-singapore-ceca",
    locale: "en_SG",
  },
  twitter: {
    title: "India Singapore CECA for Foreign Companies: 2026 Guide",
    description:
      "India Singapore CECA. It covers the structure, the papers your parent signs and the filings that follow in plain English for your finance team on a single page.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
