import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India UK CETA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India UK CETA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named and with one owner today.",
  keywords: ["India UK CETA: Documents, Deadlines and Filing Steps", "India UK free trade agreement", "tariff benefits", "rules of origin", "services", "mobility", "double contribution"],
  alternates: guideAlternates("uk", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20UK%20CETA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "India UK CETA: Documents, Deadlines and Filing Steps" }],
    siteName: "AU Corporate",
    title: "India UK CETA: Documents, Deadlines and Filing Steps",
    description:
      "India UK CETA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named and with one owner today.",
    url: "https://www.theaucorp.com/uk-to-india/india-uk-ceta",
    locale: "en_GB",
  },
  twitter: {
    title: "India UK CETA: Documents, Deadlines and Filing Steps",
    description:
      "India UK CETA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named and with one owner today.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
