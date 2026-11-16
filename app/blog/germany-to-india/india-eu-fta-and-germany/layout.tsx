import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India EU FTA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India EU FTA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named for your finance team now.",
  keywords: ["India EU FTA: Documents, Deadlines and Filing Steps", "India EU free trade agreement Germany", "tariff", "rules of origin", "CBAM"],
  alternates: guideAlternates("germany", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20EU%20FTA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "India EU FTA: Documents, Deadlines and Filing Steps" }],
    siteName: "AU Corporate",
    title: "India EU FTA: Documents, Deadlines and Filing Steps",
    description:
      "India EU FTA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named for your finance team now.",
    url: "https://www.theaucorp.com/germany-to-india/india-eu-fta-and-germany",
    locale: "en_DE",
  },
  twitter: {
    title: "India EU FTA: Documents, Deadlines and Filing Steps",
    description:
      "India EU FTA. It covers the structure, the papers your parent signs and the filings that follow in plain English with the dates named for your finance team now.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
