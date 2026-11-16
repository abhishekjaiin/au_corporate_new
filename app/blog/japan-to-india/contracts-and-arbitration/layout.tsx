import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Dispute Resolution and Arbitration in India: 2026 Guide",
  },
  description:
    "Dispute resolution and arbitration in India for Japanese companies. See the papers, the order and the timing, including the usual timing. Start with the papers.",
  keywords: ["dispute resolution and arbitration in India for Japanese companies", "enforcing contracts in India", "arbitration clause", "Arbitration and Conciliation Act", "SIAC", "LCIA", "enforcement", "jurisdiction"],
  alternates: guideAlternates("japan", "contracts-and-arbitration"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Dispute%20Resolution%20and%20Arbitration%20in%20India%3A%202026%20Guide", width: 1200, height: 630, alt: "Dispute Resolution and Arbitration in India: 2026 Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for Japanese companies. See the papers, the order and the timing, including the usual timing. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/contracts-and-arbitration",
  },
  twitter: {
    title: "Dispute Resolution and Arbitration in India: 2026 Guide",
    description:
      "Dispute resolution and arbitration in India for Japanese companies. See the papers, the order and the timing, including the usual timing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
