import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "EOR vs Subsidiary in India: 2026 Guide for Foreign Firms",
  },
  description:
    "EOR vs subsidiary in India. It covers the employer, the pay date, provident fund and the expat papers in plain English with the dates named this year carefully.",
  keywords: ["EOR vs subsidiary in India", "employer of record India", "when to set up subsidiary", "PE risk", "cost", "IP ownership", "hiring"],
  alternates: guideAlternates("japan", "eor-vs-subsidiary"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=EOR%20vs%20Subsidiary%20in%20India%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "EOR vs Subsidiary in India: 2026 Guide for Foreign Firms" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "EOR vs Subsidiary in India: 2026 Guide for Foreign Firms",
    description:
      "EOR vs subsidiary in India. It covers the employer, the pay date, provident fund and the expat papers in plain English with the dates named this year carefully.",
    url: "https://www.theaucorp.com/japan-to-india/eor-vs-subsidiary",
  },
  twitter: {
    title: "EOR vs Subsidiary in India: 2026 Guide for Foreign Firms",
    description:
      "EOR vs subsidiary in India. It covers the employer, the pay date, provident fund and the expat papers in plain English with the dates named this year carefully.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
