import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate Chinese Staff to India: A Practical 2026 Guide",
  },
  description:
    "Relocate Chinese staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
  keywords: ["relocate Chinese staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("china", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20Chinese%20Staff%20to%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Relocate Chinese Staff to India: A Practical 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Relocate Chinese Staff to India: A Practical 2026 Guide",
    description:
      "Relocate Chinese staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/relocate-chinese-staff",
    locale: "en_CN",
  },
  twitter: {
    title: "Relocate Chinese Staff to India: A Practical 2026 Guide",
    description:
      "Relocate Chinese staff to India. It covers the right visa, the employer on the contract and the papers to carry so the dates stay honest. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
