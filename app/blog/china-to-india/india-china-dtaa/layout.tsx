import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India China DTAA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India China DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
  keywords: ["India China DTAA: Documents, Deadlines and Filing Steps", "India China tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("china", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20China%20DTAA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "India China DTAA: Documents, Deadlines and Filing Steps" }],
    siteName: "AU Corporate",
    title: "India China DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India China DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
    url: "https://www.theaucorp.com/china-to-india/india-china-dtaa",
    locale: "en_CN",
  },
  twitter: {
    title: "India China DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India China DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
