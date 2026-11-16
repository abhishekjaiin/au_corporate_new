import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India USA DTAA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India USA DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner this year.",
  keywords: ["India USA DTAA: Documents, Deadlines and Filing Steps", "India USA tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("usa", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20USA%20DTAA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "India USA DTAA: Documents, Deadlines and Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "India USA DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India USA DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner this year.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/india-us-dtaa-guide",
  },
  twitter: {
    title: "India USA DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India USA DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named and with one owner this year.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
