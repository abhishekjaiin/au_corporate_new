import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency of Japanese Expats in India: A 2026 Guide",
  },
  description:
    "Tax residency of Japanese expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  keywords: ["tax residency of Japanese expats in India", "expat tax India", "182 days", "RNOR", "DTAA tie-breaker"],
  alternates: guideAlternates("japan", "expat-tax-residency"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Tax%20Residency%20of%20Japanese%20Expats%20in%20India%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Tax Residency of Japanese Expats in India: A 2026 Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Tax Residency of Japanese Expats in India: A 2026 Guide",
    description:
      "Tax residency of Japanese expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/expat-tax-residency-india-japan",
  },
  twitter: {
    title: "Tax Residency of Japanese Expats in India: A 2026 Guide",
    description:
      "Tax residency of Japanese expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
