import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for Japanese Companies: Guide",
  },
  description:
    "Hiring employees in India for Japanese companies. It covers the right visa, the employer on the contract and the papers to carry for you. Start with the papers.",
  keywords: ["hiring employees in India for Japanese companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("japan", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20Japanese%20Companies%3A%20Guide", width: 1200, height: 630, alt: "Hiring Employees in India for Japanese Companies: Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Hiring Employees in India for Japanese Companies: Guide",
    description:
      "Hiring employees in India for Japanese companies. It covers the right visa, the employer on the contract and the papers to carry for you. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/hiring-and-payroll",
  },
  twitter: {
    title: "Hiring Employees in India for Japanese Companies: Guide",
    description:
      "Hiring employees in India for Japanese companies. It covers the right visa, the employer on the contract and the papers to carry for you. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
