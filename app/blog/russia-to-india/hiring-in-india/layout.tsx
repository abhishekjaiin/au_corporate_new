import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for Russian Companies in 2026",
  },
  description:
    "Hiring employees in India for Russian companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  keywords: ["hiring employees in India for Russian companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("russia", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20Russian%20Companies%20in%202026", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for Russian Companies in 2026",
    description:
      "Hiring employees in India for Russian companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
    url: "https://www.theaucorp.com/russia-to-india/hiring-in-india",
    locale: "en_RU",
  },
  twitter: {
    title: "Hiring Employees in India for Russian Companies in 2026",
    description:
      "Hiring employees in India for Russian companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
