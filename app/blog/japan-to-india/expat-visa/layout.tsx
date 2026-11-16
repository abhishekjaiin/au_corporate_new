import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Employment Visa India for Japanese Nationals: Key Steps",
  },
  description:
    "Employment visa India for Japanese nationals. It covers the right visa, the employer on the contract and the papers to carry in practice. Start with the papers.",
  keywords: ["employment visa India for Japanese nationals", "FRRO registration", "business visa India", "e-visa", "salary threshold", "tax residency"],
  alternates: guideAlternates("japan", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Employment%20Visa%20India%20for%20Japanese%20Nationals%3A%20Key%20Steps", width: 1200, height: 630, alt: "Employment Visa India for Japanese Nationals: Key Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Employment Visa India for Japanese Nationals: Key Steps",
    description:
      "Employment visa India for Japanese nationals. It covers the right visa, the employer on the contract and the papers to carry in practice. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/expat-visa",
  },
  twitter: {
    title: "Employment Visa India for Japanese Nationals: Key Steps",
    description:
      "Employment visa India for Japanese nationals. It covers the right visa, the employer on the contract and the papers to carry in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
