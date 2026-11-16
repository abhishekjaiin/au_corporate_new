import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Hong Kong DTAA for Foreign Companies: 2026 Guide",
  },
  description:
    "India Hong Kong DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
  keywords: ["India Hong Kong DTAA for Foreign Companies: 2026 Guide", "India Hong Kong tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("hongkong", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Hong%20Kong%20DTAA%20for%20Foreign%20Companies%3A%202026%20Guide", width: 1200, height: 630, alt: "India Hong Kong DTAA for Foreign Companies: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India Hong Kong DTAA for Foreign Companies: 2026 Guide",
    description:
      "India Hong Kong DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
    url: "https://www.theaucorp.com/hong-kong-to-india/india-hong-kong-dtaa",
    locale: "en_HK",
  },
  twitter: {
    title: "India Hong Kong DTAA for Foreign Companies: 2026 Guide",
    description:
      "India Hong Kong DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner now.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
