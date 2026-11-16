import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Repatriation of Profits from India: Timeline and Filings",
  },
  description:
    "Repatriation of profits from India. It covers when profits can go home, the bank pack and what must exist first so the dates stay honest. Start with the papers.",
  keywords: ["repatriation of profits from India", "dividend repatriation India", "royalty and service fees", "withholding tax", "DTAA", "buyback", "Form 15CA 15CB"],
  alternates: guideAlternates("uk", "repatriating-profits"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Repatriation%20of%20Profits%20from%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Repatriation of Profits from India: Timeline and Filings" }],
    siteName: "AU Corporate",
    title: "Repatriation of Profits from India: Timeline and Filings",
    description:
      "Repatriation of profits from India. It covers when profits can go home, the bank pack and what must exist first so the dates stay honest. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/repatriating-profits",
    locale: "en_GB",
  },
  twitter: {
    title: "Repatriation of Profits from India: Timeline and Filings",
    description:
      "Repatriation of profits from India. It covers when profits can go home, the bank pack and what must exist first so the dates stay honest. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
