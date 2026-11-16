import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Japan DTAA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India Japan DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
  keywords: ["India Japan DTAA: Documents, Deadlines and Filing Steps", "India Japan tax treaty", "DTAA rates", "dividend", "royalty", "PE", "Form 10F", "TRC"],
  alternates: guideAlternates("japan", "india-dtaa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India-Japan%20Tax%20Treaty%20(DTAA)%20Explained", width: 1200, height: 630, alt: "India Japan DTAA: Documents, Deadlines and Filing Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "India Japan DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India Japan DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/india-japan-dtaa-guide",
  },
  twitter: {
    title: "India Japan DTAA: Documents, Deadlines and Filing Steps",
    description:
      "India Japan DTAA. It covers corporate tax, GST, intercompany charges and the calendar to track in plain English with the dates named for your finance team here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
