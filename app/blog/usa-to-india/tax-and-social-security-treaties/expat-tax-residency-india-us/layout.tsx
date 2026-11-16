import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Tax Residency of US Expats in India: 2026 Filing Guide",
  },
  description:
    "Tax residency of US expats in India. It covers the right visa, the employer on the contract and the papers to carry for a foreign parent. Start with the papers.",
  keywords: ["tax residency of US expats in India", "expat tax India", "182 days", "RNOR", "DTAA tie-breaker"],
  alternates: guideAlternates("usa", "expat-tax-residency"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Tax%20Residency%20of%20US%20Expats%20in%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Tax Residency of US Expats in India: 2026 Filing Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Tax Residency of US Expats in India: 2026 Filing Guide",
    description:
      "Tax residency of US expats in India. It covers the right visa, the employer on the contract and the papers to carry for a foreign parent. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/expat-tax-residency-india-us",
  },
  twitter: {
    title: "Tax Residency of US Expats in India: 2026 Filing Guide",
    description:
      "Tax residency of US expats in India. It covers the right visa, the employer on the contract and the papers to carry for a foreign parent. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
