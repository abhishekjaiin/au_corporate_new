import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from Russia: Filings",
  },
  description:
    "How to register a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow in practice. We map the steps.",
  keywords: ["how to register a company in India from Russia", "Russian company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("russia", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20Russia%3A%20Filings", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "How to Register a Company in India from Russia: Filings",
    description:
      "How to register a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow in practice. We map the steps.",
    url: "https://www.theaucorp.com/russia-to-india/incorporation-steps",
    locale: "en_RU",
  },
  twitter: {
    title: "How to Register a Company in India from Russia: Filings",
    description:
      "How to register a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow in practice. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
