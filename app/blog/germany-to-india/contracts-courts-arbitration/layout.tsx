import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Dispute Resolution and Arbitration in India: 2026 Guide",
  },
  description:
    "Dispute resolution and arbitration in India for German companies. See the papers, the order and the timing before anyone promises a date. Start with the papers.",
  keywords: ["dispute resolution and arbitration in India for German companies", "enforcing contracts in India", "arbitration clause", "Arbitration and Conciliation Act", "SIAC", "LCIA", "enforcement", "jurisdiction"],
  alternates: guideAlternates("germany", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Dispute%20Resolution%20and%20Arbitration%20in%20India%3A%202026%20Guide", width: 1200, height: 630, alt: "Dispute Resolution and Arbitration in India: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for German companies. See the papers, the order and the timing before anyone promises a date. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/contracts-courts-arbitration",
    locale: "en_DE",
  },
  twitter: {
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for German companies. See the papers, the order and the timing before anyone promises a date. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
