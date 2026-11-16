import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate Russian Staff to India: A Practical 2026 Guide",
  },
  description:
    "Relocate Russian staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
  keywords: ["relocate Russian staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("russia", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20Russian%20Staff%20to%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Relocate Russian Staff to India: A Practical 2026 Guide",
    description:
      "Relocate Russian staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/relocate-russian-staff",
    locale: "en_RU",
  },
  twitter: {
    title: "Relocate Russian Staff to India: A Practical 2026 Guide",
    description:
      "Relocate Russian staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
