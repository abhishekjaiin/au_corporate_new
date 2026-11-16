import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate Singapore Staff to India: Timeline and Filings",
  },
  description:
    "Relocate Singapore staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
  keywords: ["relocate Singapore staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("singapore", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20Singapore%20Staff%20to%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Relocate Singapore Staff to India: Timeline and Filings" }],
    siteName: "AU Corporate",
    title: "Relocate Singapore Staff to India: Timeline and Filings",
    description:
      "Relocate Singapore staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/singapore-to-india/relocate-singapore-staff",
    locale: "en_SG",
  },
  twitter: {
    title: "Relocate Singapore Staff to India: Timeline and Filings",
    description:
      "Relocate Singapore staff to India. It covers the right visa, the employer on the contract and the papers to carry, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
