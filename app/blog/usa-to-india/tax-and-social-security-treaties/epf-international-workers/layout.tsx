import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EPF for International Workers in India: Key Filing Steps",
  },
  description:
    "EPF for international workers in India. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  keywords: ["EPF for international workers in India", "IW PF India", "12% contribution", "SSA", "withdrawal"],
  alternates: guideAlternates("usa", "epf-international-workers"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EPF%20for%20International%20Workers%20in%20India%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "EPF for International Workers in India: Key Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "EPF for International Workers in India: Key Filing Steps",
    description:
      "EPF for international workers in India. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/epf-international-workers",
  },
  twitter: {
    title: "EPF for International Workers in India: Key Filing Steps",
    description:
      "EPF for international workers in India. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
