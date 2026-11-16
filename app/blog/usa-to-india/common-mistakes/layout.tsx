import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Mistakes When Setting Up a Company in India from USA",
  },
  description:
    "Mistakes when setting up a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow today. We map the steps.",
  keywords: ["mistakes when setting up a company in India from USA", "India entry pitfalls", "FEMA penalties", "late filing", "resident director", "bank account"],
  alternates: guideAlternates("usa", "common-mistakes"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Mistakes%20When%20Setting%20Up%20a%20Company%20in%20India%20from%20USA", width: 1200, height: 630, alt: "Mistakes When Setting Up a Company in India from USA" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Mistakes When Setting Up a Company in India from USA",
    description:
      "Mistakes when setting up a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow today. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/common-mistakes",
  },
  twitter: {
    title: "Mistakes When Setting Up a Company in India from USA",
    description:
      "Mistakes when setting up a company in India from USA. It covers the structure, the papers your parent signs and the filings that follow today. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
