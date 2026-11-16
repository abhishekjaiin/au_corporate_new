import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from UK: 2026 Filing Guide",
  },
  description:
    "Set up a subsidiary in India from UK. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  keywords: ["set up a subsidiary in India from UK", "UK company setup in India", "register a company in India from UK", "India entry for UK companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("uk", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20UK%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from UK: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from UK: 2026 Filing Guide",
    description:
      "Set up a subsidiary in India from UK. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from UK: 2026 Filing Guide",
    description:
      "Set up a subsidiary in India from UK. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
