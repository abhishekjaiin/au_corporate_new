import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate UK Staff to India: 2026 Guide for Foreign Firms",
  },
  description:
    "Relocate UK staff to India. It covers the right visa, the employer on the contract and the papers to carry before anyone promises a date. Start with the papers.",
  keywords: ["relocate UK staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("uk", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20UK%20Staff%20to%20India%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "Relocate UK Staff to India: 2026 Guide for Foreign Firms" }],
    siteName: "AU Corporate",
    title: "Relocate UK Staff to India: 2026 Guide for Foreign Firms",
    description:
      "Relocate UK staff to India. It covers the right visa, the employer on the contract and the papers to carry before anyone promises a date. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/relocate-uk-staff",
    locale: "en_GB",
  },
  twitter: {
    title: "Relocate UK Staff to India: 2026 Guide for Foreign Firms",
    description:
      "Relocate UK staff to India. It covers the right visa, the employer on the contract and the papers to carry before anyone promises a date. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
