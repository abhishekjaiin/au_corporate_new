import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Indian Subsidiary Compliance Calendar: Key Filing Steps",
  },
  description:
    "Indian subsidiary compliance calendar. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
  keywords: ["Indian subsidiary compliance calendar", "ROC due dates", "TDS due dates for subsidiaries", "AOC-4", "MGT-7", "FLA", "GST returns", "advance tax"],
  alternates: guideAlternates("russia", "compliance-calendar"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Indian%20Subsidiary%20Compliance%20Calendar%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Indian Subsidiary Compliance Calendar: Key Filing Steps",
    description:
      "Indian subsidiary compliance calendar. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/compliance-calendar",
    locale: "en_RU",
  },
  twitter: {
    title: "Indian Subsidiary Compliance Calendar: Key Filing Steps",
    description:
      "Indian subsidiary compliance calendar. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
