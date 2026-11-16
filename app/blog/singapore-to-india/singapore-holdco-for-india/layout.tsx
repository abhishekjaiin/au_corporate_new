import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Holding Company for India: 2026 Filing Guide",
  },
  description:
    "Singapore holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  keywords: ["Singapore holding company for India", "Singapore holdco structure", "DTAA", "GAAR", "LOB clause", "capital gains"],
  alternates: guideAlternates("singapore", "holdco"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Singapore%20Holding%20Company%20for%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Singapore Holding Company for India: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "Singapore Holding Company for India: 2026 Filing Guide",
    description:
      "Singapore holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
    url: "https://www.theaucorp.com/singapore-to-india/singapore-holdco-for-india",
    locale: "en_SG",
  },
  twitter: {
    title: "Singapore Holding Company for India: 2026 Filing Guide",
    description:
      "Singapore holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
