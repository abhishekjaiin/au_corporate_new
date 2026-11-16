import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russia to India Company Setup FAQ: Timeline and Filings",
  },
  description:
    "Russia to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
  keywords: ["Russia to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("russia", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russia%20to%20India%20Company%20Setup%20FAQ%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russia to India Company Setup FAQ: Timeline and Filings",
    description:
      "Russia to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
    url: "https://www.theaucorp.com/russia-to-india/faq",
    locale: "en_RU",
  },
  twitter: {
    title: "Russia to India Company Setup FAQ: Timeline and Filings",
    description:
      "Russia to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
