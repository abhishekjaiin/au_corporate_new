import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing India for Australian Parent Companies",
  },
  description:
    "Transfer pricing India for Australian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads.",
  keywords: ["transfer pricing India for Australian parent companies", "intercompany pricing India", "Form 3CEB", "arm's length", "safe harbour", "APA", "benchmarking", "master file"],
  alternates: guideAlternates("australia", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20India%20for%20Australian%20Parent%20Companies", width: 1200, height: 630, alt: "Transfer Pricing India for Australian Parent Companies" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing India for Australian Parent Companies",
    description:
      "Transfer pricing India for Australian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads.",
    url: "https://www.theaucorp.com/australia-to-india/transfer-pricing",
    locale: "en_AU",
  },
  twitter: {
    title: "Transfer Pricing India for Australian Parent Companies",
    description:
      "Transfer pricing India for Australian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
