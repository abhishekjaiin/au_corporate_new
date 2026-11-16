import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing India for Russian Parent Companies",
  },
  description:
    "Transfer pricing India for Russian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. We map the steps.",
  keywords: ["transfer pricing India for Russian parent companies", "intercompany pricing India", "Form 3CEB", "arm's length", "safe harbour", "APA", "benchmarking", "master file"],
  alternates: guideAlternates("russia", "transfer-pricing"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20India%20for%20Russian%20Parent%20Companies", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Transfer Pricing India for Russian Parent Companies",
    description:
      "Transfer pricing India for Russian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. We map the steps.",
    url: "https://www.theaucorp.com/russia-to-india/transfer-pricing",
    locale: "en_RU",
  },
  twitter: {
    title: "Transfer Pricing India for Russian Parent Companies",
    description:
      "Transfer pricing India for Russian parent companies. It covers corporate tax, GST, intercompany charges and the calendar to track in practice. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
