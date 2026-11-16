import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Dispute Resolution and Arbitration in India: 2026 Guide",
  },
  description:
    "Dispute resolution and arbitration in India for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment in writing.",
  keywords: ["dispute resolution and arbitration in India for UK companies", "enforcing contracts in India", "arbitration clause", "Arbitration and Conciliation Act", "SIAC", "LCIA", "enforcement", "jurisdiction"],
  alternates: guideAlternates("uk", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Dispute%20Resolution%20and%20Arbitration%20in%20India%3A%202026%20Guide", width: 1200, height: 630, alt: "Dispute Resolution and Arbitration in India: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment in writing.",
    url: "https://www.theaucorp.com/uk-to-india/contracts-courts-arbitration",
    locale: "en_GB",
  },
  twitter: {
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment in writing.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
