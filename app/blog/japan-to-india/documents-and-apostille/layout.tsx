import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents Required for Subsidiary Registration in India",
  },
  description:
    "Documents required for subsidiary registration in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  keywords: ["documents required for subsidiary registration in India", "apostille documents for India", "Japanese parent company documents", "notarisation", "board resolution", "certificate of incorporation", "KYC", "consularisation"],
  alternates: guideAlternates("japan", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20Required%20for%20Subsidiary%20Registration%20in%20India", width: 1200, height: 630, alt: "Documents Required for Subsidiary Registration in India" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Documents Required for Subsidiary Registration in India",
    description:
      "Documents required for subsidiary registration in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
    url: "https://www.theaucorp.com/japan-to-india/documents-and-apostille",
  },
  twitter: {
    title: "Documents Required for Subsidiary Registration in India",
    description:
      "Documents required for subsidiary registration in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
