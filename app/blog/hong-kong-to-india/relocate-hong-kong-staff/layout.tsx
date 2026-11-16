import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate Hong Kong Staff to India: Timeline and Filings",
  },
  description:
    "Relocate Hong Kong staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
  keywords: ["relocate Hong Kong staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("hongkong", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20Hong%20Kong%20Staff%20to%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Relocate Hong Kong Staff to India: Timeline and Filings" }],
    siteName: "AU Corporate",
    title: "Relocate Hong Kong Staff to India: Timeline and Filings",
    description:
      "Relocate Hong Kong staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/hong-kong-to-india/relocate-hong-kong-staff",
    locale: "en_HK",
  },
  twitter: {
    title: "Relocate Hong Kong Staff to India: Timeline and Filings",
    description:
      "Relocate Hong Kong staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
