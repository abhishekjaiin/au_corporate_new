import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India UK DTAA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India UK DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner in writing.",
  keywords: ["India UK DTAA: Documents, Deadlines and Filing Steps", "India UK tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("uk", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20UK%20DTAA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "India UK DTAA: Documents, Deadlines and Filing Steps" }],
    siteName: "AU Corporate",
    title: "India UK DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India UK DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner in writing.",
    url: "https://www.theaucorp.com/uk-to-india/india-uk-dtaa",
    locale: "en_GB",
  },
  twitter: {
    title: "India UK DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India UK DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner in writing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
