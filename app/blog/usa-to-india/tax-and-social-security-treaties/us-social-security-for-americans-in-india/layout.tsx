import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Social Security for Americans in India: A 2026 Guide",
  },
  description:
    "US social security for Americans in India. It covers corporate tax, GST, intercompany charges and the calendar to track with clear dates. Start with the papers.",
  keywords: ["US social security for Americans in India", "SSA benefits India", "totalization", "FICA"],
  alternates: guideAlternates("usa", "home-social-security"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Social%20Security%20(FICA)%20for%20Americans%20Working%20in%20India", width: 1200, height: 630, alt: "US Social Security for Americans in India: A 2026 Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "US Social Security for Americans in India: A 2026 Guide",
    description:
      "US social security for Americans in India. It covers corporate tax, GST, intercompany charges and the calendar to track with clear dates. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/us-social-security-for-americans-in-india",
  },
  twitter: {
    title: "US Social Security for Americans in India: A 2026 Guide",
    description:
      "US social security for Americans in India. It covers corporate tax, GST, intercompany charges and the calendar to track with clear dates. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
