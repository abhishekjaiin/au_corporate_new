import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GST in India vs VAT for US Companies: 2026 Filing Guide",
  },
  description:
    "GST in India vs VAT for US companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
  keywords: ["GST in India vs VAT for US companies", "GST registration subsidiary", "reverse charge", "input tax credit", "export of services", "LUT"],
  alternates: guideAlternates("usa", "global-vat"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GST%20in%20India%20vs%20VAT%20for%20US%20Companies%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "GST in India vs VAT for US Companies: 2026 Filing Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "GST in India vs VAT for US Companies: 2026 Filing Guide",
    description:
      "GST in India vs VAT for US companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/global-vat",
  },
  twitter: {
    title: "GST in India vs VAT for US Companies: 2026 Filing Guide",
    description:
      "GST in India vs VAT for US companies. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
