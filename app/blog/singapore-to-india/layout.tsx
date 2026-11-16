import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Singapore: 2026 Guide",
  },
  description:
    "Set up a subsidiary in India from Singapore. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  keywords: ["set up a subsidiary in India from Singapore", "Singapore company setup in India", "register a company in India from Singapore", "India entry for Singapore companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("singapore", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Singapore%3A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Singapore: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Singapore: 2026 Guide",
    description:
      "Set up a subsidiary in India from Singapore. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
    url: "https://www.theaucorp.com/singapore-to-india",
    locale: "en_SG",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Singapore: 2026 Guide",
    description:
      "Set up a subsidiary in India from Singapore. It covers the structure, the papers your parent signs and the filings that follow this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
