import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Relocate German Staff to India: Documents and Deadlines",
  },
  description:
    "Relocate German staff to India. It covers the right visa, the employer on the contract and the papers to carry so your parent is not guessing. We map the steps.",
  keywords: ["relocate German staff to India", "employment visa India", "expat tax India", "FRRO", "social security", "e-visa", "tax residency"],
  alternates: guideAlternates("germany", "expat-visa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Relocate%20German%20Staff%20to%20India%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "Relocate German Staff to India: Documents and Deadlines" }],
    siteName: "AU Corporate",
    title: "Relocate German Staff to India: Documents and Deadlines",
    description:
      "Relocate German staff to India. It covers the right visa, the employer on the contract and the papers to carry so your parent is not guessing. We map the steps.",
    url: "https://www.theaucorp.com/germany-to-india/relocate-german-staff",
    locale: "en_DE",
  },
  twitter: {
    title: "Relocate German Staff to India: Documents and Deadlines",
    description:
      "Relocate German staff to India. It covers the right visa, the employer on the contract and the papers to carry so your parent is not guessing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
