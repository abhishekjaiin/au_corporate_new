import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Japan: Key Filing Steps",
  },
  description:
    "Set up a subsidiary in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
  keywords: ["set up a subsidiary in India from Japan", "Japanese company setup in India", "register a company in India from Japan", "India entry for Japanese companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("japan", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Japan%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Japan: Key Filing Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Japan: Key Filing Steps",
    description:
      "Set up a subsidiary in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Japan: Key Filing Steps",
    description:
      "Set up a subsidiary in India from Japan. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
