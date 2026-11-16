import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Germany DTAA: Documents, Deadlines and Next Steps",
  },
  description:
    "India Germany DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner today.",
  keywords: ["India Germany DTAA: Documents, Deadlines and Next Steps", "India Germany tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("germany", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Germany%20DTAA%3A%20Documents%2C%20Deadlines%20and%20Next%20Steps", width: 1200, height: 630, alt: "India Germany DTAA: Documents, Deadlines and Next Steps" }],
    siteName: "AU Corporate",
    title: "India Germany DTAA: Documents, Deadlines and Next Steps",
    description:
      "India Germany DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner today.",
    url: "https://www.theaucorp.com/germany-to-india/india-germany-dtaa",
    locale: "en_DE",
  },
  twitter: {
    title: "India Germany DTAA: Documents, Deadlines and Next Steps",
    description:
      "India Germany DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner today.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
