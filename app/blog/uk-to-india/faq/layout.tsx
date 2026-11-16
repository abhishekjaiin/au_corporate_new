import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK to India Company Setup FAQ: Documents and Deadlines",
  },
  description:
    "UK to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
  keywords: ["UK to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("uk", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=UK%20to%20India%20Company%20Setup%20FAQ%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "UK to India Company Setup FAQ: Documents and Deadlines" }],
    siteName: "AU Corporate",
    title: "UK to India Company Setup FAQ: Documents and Deadlines",
    description:
      "UK to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
    url: "https://www.theaucorp.com/uk-to-india/faq",
    locale: "en_GB",
  },
  twitter: {
    title: "UK to India Company Setup FAQ: Documents and Deadlines",
    description:
      "UK to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
