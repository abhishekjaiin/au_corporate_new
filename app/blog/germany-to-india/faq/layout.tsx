import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Germany to India Company Setup FAQ: Timeline and Filings",
  },
  description:
    "Germany to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
  keywords: ["Germany to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("germany", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Germany%20to%20India%20Company%20Setup%20FAQ%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Germany to India Company Setup FAQ: Timeline and Filings" }],
    siteName: "AU Corporate",
    title: "Germany to India Company Setup FAQ: Timeline and Filings",
    description:
      "Germany to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/faq",
    locale: "en_DE",
  },
  twitter: {
    title: "Germany to India Company Setup FAQ: Timeline and Filings",
    description:
      "Germany to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
