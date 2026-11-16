import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing India for German Parent Companies",
  },
  description:
    "Transfer pricing India for German parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track for you. Start with the papers.",
  keywords: ["transfer pricing India for German parent companies", "intercompany pricing India", "Form 3CEB", "arm's length", "safe harbour", "APA", "benchmarking", "master file"],
  alternates: guideAlternates("germany", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20India%20for%20German%20Parent%20Companies", width: 1200, height: 630, alt: "Transfer Pricing India for German Parent Companies" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing India for German Parent Companies",
    description:
      "Transfer pricing India for German parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track for you. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/transfer-pricing",
    locale: "en_DE",
  },
  twitter: {
    title: "Transfer Pricing India for German Parent Companies",
    description:
      "Transfer pricing India for German parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track for you. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
