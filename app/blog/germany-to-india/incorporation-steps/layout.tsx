import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from Germany in 2026",
  },
  description:
    "How to register a company in India from Germany. It covers the structure, the papers your parent signs and the filings that follow today. Start with the papers.",
  keywords: ["how to register a company in India from Germany", "German company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("germany", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20Germany%20in%202026", width: 1200, height: 630, alt: "How to Register a Company in India from Germany in 2026" }],
    siteName: "AU Corporate",
    title: "How to Register a Company in India from Germany in 2026",
    description:
      "How to register a company in India from Germany. It covers the structure, the papers your parent signs and the filings that follow today. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/incorporation-steps",
    locale: "en_DE",
  },
  twitter: {
    title: "How to Register a Company in India from Germany in 2026",
    description:
      "How to register a company in India from Germany. It covers the structure, the papers your parent signs and the filings that follow today. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
