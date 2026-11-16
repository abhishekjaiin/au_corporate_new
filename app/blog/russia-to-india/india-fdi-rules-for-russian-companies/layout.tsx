import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI in India from Russia: A Practical 2026 Filing Guide",
  },
  description:
    "FDI in India from Russia. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. Start with the papers.",
  keywords: ["FDI in India from Russia: A Practical 2026 Filing Guide", "Russian investment India rules", "automatic route", "sectoral caps", "sanctions"],
  alternates: guideAlternates("russia", "fdi-rules"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20in%20India%20from%20Russia%3A%20A%20Practical%202026%20Filing%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "FDI in India from Russia: A Practical 2026 Filing Guide",
    description:
      "FDI in India from Russia. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/india-fdi-rules-for-russian-companies",
    locale: "en_RU",
  },
  twitter: {
    title: "FDI in India from Russia: A Practical 2026 Filing Guide",
    description:
      "FDI in India from Russia. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
