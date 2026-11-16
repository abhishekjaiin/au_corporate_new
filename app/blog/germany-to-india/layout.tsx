import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from Germany: A 2026 Guide",
  },
  description:
    "Set up a subsidiary in India from Germany. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  keywords: ["set up a subsidiary in India from Germany", "German company setup in India", "register a company in India from Germany", "India entry for German companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("germany", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20Germany%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from Germany: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from Germany: A 2026 Guide",
    description:
      "Set up a subsidiary in India from Germany. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india",
    locale: "en_DE",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from Germany: A 2026 Guide",
    description:
      "Set up a subsidiary in India from Germany. It covers the structure, the papers your parent signs and the filings that follow in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
