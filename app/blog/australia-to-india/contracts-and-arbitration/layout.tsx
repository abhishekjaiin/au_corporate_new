import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Dispute Resolution and Arbitration in India: 2026 Guide",
  },
  description:
    "Dispute resolution and arbitration in India for Australian companies. See the papers, the order and the timing so your parent is not guessing. We map the steps.",
  keywords: ["dispute resolution and arbitration in India for Australian companies", "enforcing contracts in India", "arbitration clause", "Arbitration and Conciliation Act", "SIAC", "LCIA", "enforcement", "jurisdiction"],
  alternates: guideAlternates("australia", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Dispute%20Resolution%20and%20Arbitration%20in%20India%3A%202026%20Guide", width: 1200, height: 630, alt: "Dispute Resolution and Arbitration in India: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for Australian companies. See the papers, the order and the timing so your parent is not guessing. We map the steps.",
    url: "https://www.theaucorp.com/australia-to-india/contracts-and-arbitration",
    locale: "en_AU",
  },
  twitter: {
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for Australian companies. See the papers, the order and the timing so your parent is not guessing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
