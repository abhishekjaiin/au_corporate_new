import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Russia: A 2026 Guide",
  },
  description:
    "Set up a subsidiary in India from Russia. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  keywords: ["set up a subsidiary in India from Russia", "Russian company setup in India", "register a company in India from Russia", "India entry for Russian companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("russia", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Russia%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Russia: A 2026 Guide",
    description:
      "Set up a subsidiary in India from Russia. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
    url: "https://www.theaucorp.com/russia-to-india",
    locale: "en_RU",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Russia: A 2026 Guide",
    description:
      "Set up a subsidiary in India from Russia. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
