import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Australia DTAA for Foreign Companies: 2026 Guide",
  },
  description:
    "India Australia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
  keywords: ["India Australia DTAA for Foreign Companies: 2026 Guide", "India Australia tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("australia", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Australia%20DTAA%20for%20Foreign%20Companies%3A%202026%20Guide", width: 1200, height: 630, alt: "India Australia DTAA for Foreign Companies: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India Australia DTAA for Foreign Companies: 2026 Guide",
    description:
      "India Australia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
    url: "https://www.theaucorp.com/australia-to-india/india-australia-dtaa",
    locale: "en_AU",
  },
  twitter: {
    title: "India Australia DTAA for Foreign Companies: 2026 Guide",
    description:
      "India Australia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
