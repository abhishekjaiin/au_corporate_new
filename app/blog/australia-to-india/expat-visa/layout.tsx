import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Employment Visa India for Australian Nationals: Filings",
  },
  description:
    "Employment visa India for Australian nationals. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
  keywords: ["employment visa India for Australian nationals", "FRRO registration", "business visa India", "e-visa", "salary threshold", "tax residency"],
  alternates: guideAlternates("australia", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Employment%20Visa%20India%20for%20Australian%20Nationals%3A%20Filings", width: 1200, height: 630, alt: "Employment Visa India for Australian Nationals: Filings" }],
    siteName: "AU Corporate",
    title: "Employment Visa India for Australian Nationals: Filings",
    description:
      "Employment visa India for Australian nationals. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/expat-visa",
    locale: "en_AU",
  },
  twitter: {
    title: "Employment Visa India for Australian Nationals: Filings",
    description:
      "Employment visa India for Australian nationals. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
