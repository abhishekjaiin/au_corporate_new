import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Documents Required for Subsidiary Registration in India",
  },
  description:
    "Documents required for subsidiary registration in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  keywords: ["documents required for subsidiary registration in India", "apostille documents for India", "Chinese parent company documents", "notarisation", "board resolution", "certificate of incorporation", "KYC", "consularisation"],
  alternates: guideAlternates("china", "documents-and-apostille"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Documents%20Required%20for%20Subsidiary%20Registration%20in%20India", width: 1200, height: 630, alt: "Documents Required for Subsidiary Registration in India" }],
    siteName: "AU Corporate",
    title: "Documents Required for Subsidiary Registration in India",
    description:
      "Documents required for subsidiary registration in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
    url: "https://www.theaucorp.com/china-to-india/documents-notarisation-legalisation",
    locale: "en_CN",
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
