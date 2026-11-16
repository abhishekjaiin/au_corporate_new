import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Employment Visa India for US Nationals: Key Filing Steps",
  },
  description:
    "Employment visa India for US nationals. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  keywords: ["employment visa India for US nationals", "FRRO registration", "business visa India", "e-visa", "salary threshold", "tax residency"],
  alternates: guideAlternates("usa", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Employment%20Visa%20India%20for%20US%20Nationals%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Employment Visa India for US Nationals: Key Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Employment Visa India for US Nationals: Key Filing Steps",
    description:
      "Employment visa India for US nationals. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
    url: "https://www.theaucorp.com/usa-to-india/expat-visa",
  },
  twitter: {
    title: "Employment Visa India for US Nationals: Key Filing Steps",
    description:
      "Employment visa India for US nationals. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
