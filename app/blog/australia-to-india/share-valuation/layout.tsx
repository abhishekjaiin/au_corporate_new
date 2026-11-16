import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Share Valuation for FDI in India: A Practical 2026 Guide",
  },
  description:
    "Share valuation for FDI in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
  keywords: ["share valuation for FDI in India", "DCF valuation FEMA", "registered valuer", "merchant banker", "fair value", "Rule 11UA", "pricing guidelines"],
  alternates: guideAlternates("australia", "share-valuation"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Share%20Valuation%20for%20FDI%20in%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Share Valuation for FDI in India: A Practical 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Share Valuation for FDI in India: A Practical 2026 Guide",
    description:
      "Share valuation for FDI in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/share-valuation",
    locale: "en_AU",
  },
  twitter: {
    title: "Share Valuation for FDI in India: A Practical 2026 Guide",
    description:
      "Share valuation for FDI in India. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
