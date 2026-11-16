import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "China to India Company Setup FAQ: A Practical 2026 Guide",
  },
  description:
    "China to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
  keywords: ["China to India company setup FAQ", "India subsidiary FAQ", "FDI", "resident director", "tax"],
  alternates: guideAlternates("china", "faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=China%20to%20India%20Company%20Setup%20FAQ%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "China to India Company Setup FAQ: A Practical 2026 Guide" }],
    siteName: "AU Corporate",
    title: "China to India Company Setup FAQ: A Practical 2026 Guide",
    description:
      "China to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/faq",
    locale: "en_CN",
  },
  twitter: {
    title: "China to India Company Setup FAQ: A Practical 2026 Guide",
    description:
      "China to India company setup FAQ. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
