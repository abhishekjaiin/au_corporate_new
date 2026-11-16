import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "USA to India Company Setup FAQ: Documents and Deadlines",
  },
  description:
    "USA to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  keywords: ["USA to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("usa", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=USA%20to%20India%20Company%20Setup%20FAQ%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "USA to India Company Setup FAQ: Documents and Deadlines" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "USA to India Company Setup FAQ: Documents and Deadlines",
    description:
      "USA to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/faq",
  },
  twitter: {
    title: "USA to India Company Setup FAQ: Documents and Deadlines",
    description:
      "USA to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
