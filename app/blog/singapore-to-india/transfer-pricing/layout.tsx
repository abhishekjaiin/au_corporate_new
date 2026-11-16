import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing India for Singapore Parent Companies",
  },
  description:
    "Transfer pricing India for Singapore parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track this year. We map the steps.",
  keywords: ["transfer pricing India for Singapore parent companies", "intercompany pricing India", "Form 3CEB", "arm's length", "safe harbour", "APA", "benchmarking", "master file"],
  alternates: guideAlternates("singapore", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20India%20for%20Singapore%20Parent%20Companies", width: 1200, height: 630, alt: "Transfer Pricing India for Singapore Parent Companies" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing India for Singapore Parent Companies",
    description:
      "Transfer pricing India for Singapore parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track this year. We map the steps.",
    url: "https://www.theaucorp.com/singapore-to-india/transfer-pricing",
    locale: "en_SG",
  },
  twitter: {
    title: "Transfer Pricing India for Singapore Parent Companies",
    description:
      "Transfer pricing India for Singapore parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track this year. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
