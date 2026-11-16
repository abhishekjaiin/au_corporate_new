import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Russia DTAA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India Russia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team now.",
  keywords: ["India Russia DTAA: Documents, Deadlines and Filing Steps", "India Russia tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("russia", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Russia%20DTAA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India Russia DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India Russia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team now.",
    url: "https://www.theaucorp.com/russia-to-india/india-russia-dtaa",
    locale: "en_RU",
  },
  twitter: {
    title: "India Russia DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India Russia DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team now.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
