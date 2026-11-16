import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Set Up a Subsidiary in India from USA: Key Filing Steps",
  },
  description:
    "Set up a subsidiary in India from USA. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
  keywords: ["set up a subsidiary in India from USA", "US company setup in India", "register a company in India from USA", "India entry for US companies", "FDI", "wholly owned subsidiary", "FEMA", "DTAA", "resident director", "FC-GPR"],
  alternates: guideAlternates("usa", "hub"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Set%20Up%20a%20Subsidiary%20in%20India%20from%20USA%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Set Up a Subsidiary in India from USA: Key Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Set Up a Subsidiary in India from USA: Key Filing Steps",
    description:
      "Set up a subsidiary in India from USA. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india",
  },
  twitter: {
    title: "Set Up a Subsidiary in India from USA: Key Filing Steps",
    description:
      "Set up a subsidiary in India from USA. It covers the structure, the papers your parent signs and the filings that follow before you file. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
