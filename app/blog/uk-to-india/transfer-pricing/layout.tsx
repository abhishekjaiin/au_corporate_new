import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing India for UK Parent Companies: Filings",
  },
  description:
    "Transfer pricing India for UK parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. Start with the papers.",
  keywords: ["transfer pricing India for UK parent companies", "intercompany pricing India", "Form 3CEB", "arm's length", "safe harbour", "APA", "benchmarking", "master file"],
  alternates: guideAlternates("uk", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20India%20for%20UK%20Parent%20Companies%3A%20Filings", width: 1200, height: 630, alt: "Transfer Pricing India for UK Parent Companies: Filings" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing India for UK Parent Companies: Filings",
    description:
      "Transfer pricing India for UK parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/transfer-pricing",
    locale: "en_GB",
  },
  twitter: {
    title: "Transfer Pricing India for UK Parent Companies: Filings",
    description:
      "Transfer pricing India for UK parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
