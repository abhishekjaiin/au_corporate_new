import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GCC in India for German Companies: Timeline and Filings",
  },
  description:
    "GCC in India for German companies. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
  keywords: ["GCC in India for German companies", "global capability centre India", "captive centre", "BOT", "SEZ", "cost", "talent"],
  alternates: guideAlternates("germany", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20in%20India%20for%20German%20Companies%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "GCC in India for German Companies: Timeline and Filings" }],
    siteName: "AU Corporate",
    title: "GCC in India for German Companies: Timeline and Filings",
    description:
      "GCC in India for German companies. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
    url: "https://www.theaucorp.com/germany-to-india/gcc-for-german-companies",
    locale: "en_DE",
  },
  twitter: {
    title: "GCC in India for German Companies: Timeline and Filings",
    description:
      "GCC in India for German companies. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
