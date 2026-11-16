import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Japan Tax Treaty FAQ: 2026 Guide for Foreign Firms",
  },
  description:
    "India Japan tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, including who signs each paper. Start with the papers.",
  keywords: ["India Japan tax treaty FAQ", "DTAA FAQ", "treaty", "social security"],
  alternates: guideAlternates("japan", "treaties-faq"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Japan%20Tax%20Treaty%20FAQ%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "India Japan Tax Treaty FAQ: 2026 Guide for Foreign Firms" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India Japan Tax Treaty FAQ: 2026 Guide for Foreign Firms",
    description:
      "India Japan tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, including who signs each paper. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/faq",
  },
  twitter: {
    title: "India Japan Tax Treaty FAQ: 2026 Guide for Foreign Firms",
    description:
      "India Japan tax treaty FAQ. It covers corporate tax, GST, intercompany charges and the calendar to track, including who signs each paper. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
