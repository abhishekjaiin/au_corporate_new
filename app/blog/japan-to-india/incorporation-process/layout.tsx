import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from Japan: Key Steps",
  },
  description:
    "How to register a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
  keywords: ["how to register a company in India from Japan", "Japanese company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("japan", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20Japan%3A%20Key%20Steps", width: 1200, height: 630, alt: "How to Register a Company in India from Japan: Key Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "How to Register a Company in India from Japan: Key Steps",
    description:
      "How to register a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/incorporation-process",
  },
  twitter: {
    title: "How to Register a Company in India from Japan: Key Steps",
    description:
      "How to register a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
