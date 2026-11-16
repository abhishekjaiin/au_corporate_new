import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Japan Social Security Agreement: Key Filing Steps",
  },
  description:
    "India Japan social security agreement. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
  keywords: ["India Japan social security agreement", "certificate of coverage Japan", "EPF", "exemption"],
  alternates: guideAlternates("japan", "social-security-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Japan%20Social%20Security%20Agreement%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "India Japan Social Security Agreement: Key Filing Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India Japan Social Security Agreement: Key Filing Steps",
    description:
      "India Japan social security agreement. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/india-japan-social-security-agreement",
  },
  twitter: {
    title: "India Japan Social Security Agreement: Key Filing Steps",
    description:
      "India Japan social security agreement. It covers corporate tax, GST, intercompany charges and the calendar to track for a foreign parent. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
