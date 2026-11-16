import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "How to Close a Subsidiary in India: Timeline and Filings",
  },
  description:
    "How to close a subsidiary in India. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
  keywords: ["how to close a subsidiary in India", "strike off company India", "merger and restructuring", "NCLT", "voluntary liquidation", "Section 248", "share transfer"],
  alternates: guideAlternates("japan", "restructuring-and-exit"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Exit%20Options%20for%20a%20Japanese%20Group's%20Indian%20Subsidiary", width: 1200, height: 630, alt: "How to Close a Subsidiary in India: Timeline and Filings" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "How to Close a Subsidiary in India: Timeline and Filings",
    description:
      "How to close a subsidiary in India. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/restructuring-and-exit",
  },
  twitter: {
    title: "How to Close a Subsidiary in India: Timeline and Filings",
    description:
      "How to close a subsidiary in India. It covers the structure, the papers your parent signs and the filings that follow before money moves. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
