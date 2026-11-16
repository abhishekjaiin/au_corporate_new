import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong Holding Company for India: 2026 Filing Guide",
  },
  description:
    "Hong Kong holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  keywords: ["Hong Kong holding company for India", "regional hub", "DTAA", "holding structure", "beneficial owner"],
  alternates: guideAlternates("hongkong", "holdco"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20Holding%20Company%20for%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Hong Kong Holding Company for India: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "Hong Kong Holding Company for India: 2026 Filing Guide",
    description:
      "Hong Kong holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hong-kong-as-regional-hub-for-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Hong Kong Holding Company for India: 2026 Filing Guide",
    description:
      "Hong Kong holding company for India. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
