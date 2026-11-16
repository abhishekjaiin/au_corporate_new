import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from China: Key Steps",
  },
  description:
    "How to register a company in India from China. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
  keywords: ["how to register a company in India from China", "Chinese company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("china", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20China%3A%20Key%20Steps", width: 1200, height: 630, alt: "How to Register a Company in India from China: Key Steps" }],
    siteName: "AU Corporate",
    title: "How to Register a Company in India from China: Key Steps",
    description:
      "How to register a company in India from China. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/incorporation-steps",
    locale: "en_CN",
  },
  twitter: {
    title: "How to Register a Company in India from China: Key Steps",
    description:
      "How to register a company in India from China. It covers the structure, the papers your parent signs and the filings that follow for you. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
