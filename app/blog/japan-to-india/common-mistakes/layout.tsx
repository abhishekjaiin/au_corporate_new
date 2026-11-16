import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Mistakes When Setting Up a Company in India from Japan",
  },
  description:
    "Mistakes when setting up a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow in plain English here.",
  keywords: ["mistakes when setting up a company in India from Japan", "India entry pitfalls", "FEMA penalties", "late filing", "resident director", "bank account"],
  alternates: guideAlternates("japan", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Mistakes%20When%20Setting%20Up%20a%20Company%20in%20India%20from%20Japan", width: 1200, height: 630, alt: "Mistakes When Setting Up a Company in India from Japan" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Mistakes When Setting Up a Company in India from Japan",
    description:
      "Mistakes when setting up a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow in plain English here.",
    url: "https://www.theaucorp.com/japan-to-india/common-mistakes",
  },
  twitter: {
    title: "Mistakes When Setting Up a Company in India from Japan",
    description:
      "Mistakes when setting up a company in India from Japan. It covers the structure, the papers your parent signs and the filings that follow in plain English here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
