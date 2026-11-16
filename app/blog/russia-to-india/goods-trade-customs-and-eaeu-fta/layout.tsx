import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India EAEU FTA: Documents, Deadlines and Filing Steps",
  },
  description:
    "India EAEU FTA. It covers the structure, the papers your parent signs and the filings that follow before the bank is asked to move money. Start with the papers.",
  keywords: ["India EAEU FTA: Documents, Deadlines and Filing Steps", "India Russia trade customs", "tariff", "rules of origin", "BIS"],
  alternates: guideAlternates("russia", "trade-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20EAEU%20FTA%3A%20Documents%2C%20Deadlines%20and%20Filing%20Steps", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India EAEU FTA: Documents, Deadlines and Filing Steps",
    description:
      "India EAEU FTA. It covers the structure, the papers your parent signs and the filings that follow before the bank is asked to move money. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/goods-trade-customs-and-eaeu-fta",
    locale: "en_RU",
  },
  twitter: {
    title: "India EAEU FTA: Documents, Deadlines and Filing Steps",
    description:
      "India EAEU FTA. It covers the structure, the papers your parent signs and the filings that follow before the bank is asked to move money. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
