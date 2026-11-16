import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Register a Company in India from Hong Kong: Guide",
  },
  description:
    "How to register a company in India from Hong Kong. It covers the structure, the papers your parent signs and the filings that follow, written for finance leads.",
  keywords: ["how to register a company in India from Hong Kong", "Hong Kong company incorporation in India", "SPICe+ incorporation", "incorporation timeline", "DIN", "DSC", "name approval", "MOA AOA", "PAN TAN"],
  alternates: guideAlternates("hongkong", "incorporation-process"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=How%20to%20Register%20a%20Company%20in%20India%20from%20Hong%20Kong%3A%20Guide", width: 1200, height: 630, alt: "How to Register a Company in India from Hong Kong: Guide" }],
    siteName: "AU Corporate",
    title: "How to Register a Company in India from Hong Kong: Guide",
    description:
      "How to register a company in India from Hong Kong. It covers the structure, the papers your parent signs and the filings that follow, written for finance leads.",
    url: "https://www.theaucorp.com/hong-kong-to-india/incorporation-steps",
    locale: "en_HK",
  },
  twitter: {
    title: "How to Register a Company in India from Hong Kong: Guide",
    description:
      "How to register a company in India from Hong Kong. It covers the structure, the papers your parent signs and the filings that follow, written for finance leads.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
