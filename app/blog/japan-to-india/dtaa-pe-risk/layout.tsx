import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Permanent Establishment Risk in India: Key Filing Steps",
  },
  description:
    "Permanent establishment risk in India. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
  keywords: ["permanent establishment risk in India", "PE risk DTAA Japan", "service PE", "fixed place", "dependent agent", "tax treaty", "withholding"],
  alternates: guideAlternates("japan", "dtaa-pe-risk"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Permanent%20Establishment%20Risk%20in%20India%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Permanent Establishment Risk in India: Key Filing Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Permanent Establishment Risk in India: Key Filing Steps",
    description:
      "Permanent establishment risk in India. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/dtaa-pe-risk",
  },
  twitter: {
    title: "Permanent Establishment Risk in India: Key Filing Steps",
    description:
      "Permanent establishment risk in India. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
