import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Mistakes When Setting Up a Company in India from Russia",
  },
  description:
    "Mistakes when setting up a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  keywords: ["mistakes when setting up a company in India from Russia", "India entry pitfalls", "FEMA penalties", "late filing", "resident director", "bank account"],
  alternates: guideAlternates("russia", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Mistakes%20When%20Setting%20Up%20a%20Company%20in%20India%20from%20Russia", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Mistakes When Setting Up a Company in India from Russia",
    description:
      "Mistakes when setting up a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
    url: "https://www.theaucorp.com/russia-to-india/common-mistakes",
    locale: "en_RU",
  },
  twitter: {
    title: "Mistakes When Setting Up a Company in India from Russia",
    description:
      "Mistakes when setting up a company in India from Russia. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
