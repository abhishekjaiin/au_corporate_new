import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from USA: 2026 Guide",
  },
  description:
    "How to register a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  keywords: ["how to register a company in India from USA", "US company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("usa", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20USA%3A%202026%20Guide", width: 1200, height: 630, alt: "How to Register a Company in India from USA: 2026 Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "How to Register a Company in India from USA: 2026 Guide",
    description:
      "How to register a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/incorporation-process",
  },
  twitter: {
    title: "How to Register a Company in India from USA: 2026 Guide",
    description:
      "How to register a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
