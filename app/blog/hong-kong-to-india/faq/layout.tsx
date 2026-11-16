import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hong Kong to India Company Setup FAQ: 2026 Filing Guide",
  },
  description:
    "Hong Kong to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  keywords: ["Hong Kong to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("hongkong", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hong%20Kong%20to%20India%20Company%20Setup%20FAQ%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Hong Kong to India Company Setup FAQ: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "Hong Kong to India Company Setup FAQ: 2026 Filing Guide",
    description:
      "Hong Kong to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
    url: "https://www.theaucorp.com/hong-kong-to-india/faq",
    locale: "en_HK",
  },
  twitter: {
    title: "Hong Kong to India Company Setup FAQ: 2026 Filing Guide",
    description:
      "Hong Kong to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
