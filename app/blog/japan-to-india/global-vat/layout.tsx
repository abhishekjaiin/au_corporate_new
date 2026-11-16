import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GST in India vs VAT for Japanese Companies: A 2026 Guide",
  },
  description:
    "GST in India vs VAT for Japanese companies. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
  keywords: ["GST in India vs VAT for Japanese companies", "GST registration subsidiary", "reverse charge", "input tax credit", "export of services", "LUT"],
  alternates: guideAlternates("japan", "global-vat"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GST%20in%20India%20vs%20VAT%20for%20Japanese%20Companies%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "GST in India vs VAT for Japanese Companies: A 2026 Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "GST in India vs VAT for Japanese Companies: A 2026 Guide",
    description:
      "GST in India vs VAT for Japanese companies. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/global-vat",
  },
  twitter: {
    title: "GST in India vs VAT for Japanese Companies: A 2026 Guide",
    description:
      "GST in India vs VAT for Japanese companies. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
