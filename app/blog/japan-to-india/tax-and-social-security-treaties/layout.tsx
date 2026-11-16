import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Japan Tax and Social Security Treaties: Key Steps",
  },
  description:
    "India Japan tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
  keywords: ["India Japan tax and social security treaties", "India Japan DTAA", "social security agreement", "treaty", "totalization", "PE"],
  alternates: guideAlternates("japan", "treaties-hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Japan%20Tax%20and%20Social%20Security%20Treaties%3A%20Key%20Steps", width: 1200, height: 630, alt: "India Japan Tax and Social Security Treaties: Key Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India Japan Tax and Social Security Treaties: Key Steps",
    description:
      "India Japan tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties",
  },
  twitter: {
    title: "India Japan Tax and Social Security Treaties: Key Steps",
    description:
      "India Japan tax and social security treaties. It covers corporate tax, GST, intercompany charges and the calendar to track for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
