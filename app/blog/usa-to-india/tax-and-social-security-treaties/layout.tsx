import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India USA Tax and Social Security Treaties: A 2026 Guide",
  },
  description:
    "India USA tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
  keywords: ["India USA tax and social security treaties", "India USA DTAA", "social security agreement", "treaty", "totalization", "PE"],
  alternates: guideAlternates("usa", "treaties-hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20USA%20Tax%20and%20Social%20Security%20Treaties%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "India USA Tax and Social Security Treaties: A 2026 Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India USA Tax and Social Security Treaties: A 2026 Guide",
    description:
      "India USA tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties",
  },
  twitter: {
    title: "India USA Tax and Social Security Treaties: A 2026 Guide",
    description:
      "India USA tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track before you file. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
