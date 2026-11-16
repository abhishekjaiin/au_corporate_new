import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GST in India vs VAT for Australian Companies: Key Steps",
  },
  description:
    "GST in India vs VAT for Australian companies. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
  keywords: ["GST in India vs VAT for Australian companies", "GST registration subsidiary", "reverse charge", "input tax credit", "export of services", "LUT"],
  alternates: guideAlternates("australia", "global-vat"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GST%20in%20India%20vs%20VAT%20for%20Australian%20Companies%3A%20Key%20Steps", width: 1200, height: 630, alt: "GST in India vs VAT for Australian Companies: Key Steps" }],
    siteName: "AU Corporate",
    title: "GST in India vs VAT for Australian Companies: Key Steps",
    description:
      "GST in India vs VAT for Australian companies. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/global-vat",
    locale: "en_AU",
  },
  twitter: {
    title: "GST in India vs VAT for Australian Companies: Key Steps",
    description:
      "GST in India vs VAT for Australian companies. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
