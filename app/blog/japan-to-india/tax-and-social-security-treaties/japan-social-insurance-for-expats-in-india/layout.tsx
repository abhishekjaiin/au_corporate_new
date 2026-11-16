import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japan Social Insurance for Expats in India: A 2026 Guide",
  },
  description:
    "Japan social insurance for expats in India. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  keywords: ["Japan social insurance for expats in India", "India Japan SSA", "certificate of coverage", "EPF"],
  alternates: guideAlternates("japan", "home-social-security"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japan%20Social%20Insurance%20for%20Expats%20in%20India%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Japan Social Insurance for Expats in India: A 2026 Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japan Social Insurance for Expats in India: A 2026 Guide",
    description:
      "Japan social insurance for expats in India. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/japan-social-insurance-for-expats-in-india",
  },
  twitter: {
    title: "Japan Social Insurance for Expats in India: A 2026 Guide",
    description:
      "Japan social insurance for expats in India. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
