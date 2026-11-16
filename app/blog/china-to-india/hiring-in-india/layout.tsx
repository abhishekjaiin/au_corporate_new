import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for Chinese Companies in 2026",
  },
  description:
    "Hiring employees in India for Chinese companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  keywords: ["hiring employees in India for Chinese companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("china", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20Chinese%20Companies%20in%202026", width: 1200, height: 630, alt: "Hiring Employees in India for Chinese Companies in 2026" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for Chinese Companies in 2026",
    description:
      "Hiring employees in India for Chinese companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
    url: "https://www.theaucorp.com/china-to-india/hiring-in-india",
    locale: "en_CN",
  },
  twitter: {
    title: "Hiring Employees in India for Chinese Companies in 2026",
    description:
      "Hiring employees in India for Chinese companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
