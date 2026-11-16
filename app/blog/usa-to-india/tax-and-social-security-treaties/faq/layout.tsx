import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India USA Tax Treaty FAQ: A Practical 2026 Filing Guide",
  },
  description:
    "India USA tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, in the order a parent can follow. Start with the papers.",
  keywords: ["India USA tax treaty FAQ", "DTAA FAQ", "treaty", "social security"],
  alternates: guideAlternates("usa", "treaties-faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20USA%20Tax%20Treaty%20FAQ%3A%20A%20Practical%202026%20Filing%20Guide", width: 1200, height: 630, alt: "India USA Tax Treaty FAQ: A Practical 2026 Filing Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India USA Tax Treaty FAQ: A Practical 2026 Filing Guide",
    description:
      "India USA tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, in the order a parent can follow. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/faq",
  },
  twitter: {
    title: "India USA Tax Treaty FAQ: A Practical 2026 Filing Guide",
    description:
      "India USA tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, in the order a parent can follow. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
