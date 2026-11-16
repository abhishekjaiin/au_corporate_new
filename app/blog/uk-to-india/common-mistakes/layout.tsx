import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Mistakes When Setting Up a Company in India from UK",
  },
  description:
    "Mistakes when setting up a company in India from UK. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
  keywords: ["mistakes when setting up a company in India from UK", "India entry pitfalls", "FEMA penalties", "late filing", "resident director", "bank account"],
  alternates: guideAlternates("uk", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Mistakes%20When%20Setting%20Up%20a%20Company%20in%20India%20from%20UK", width: 1200, height: 630, alt: "Mistakes When Setting Up a Company in India from UK" }],
    siteName: "AU Corporate",
    title: "Mistakes When Setting Up a Company in India from UK",
    description:
      "Mistakes when setting up a company in India from UK. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
    url: "https://www.theaucorp.com/uk-to-india/common-mistakes",
    locale: "en_GB",
  },
  twitter: {
    title: "Mistakes When Setting Up a Company in India from UK",
    description:
      "Mistakes when setting up a company in India from UK. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
