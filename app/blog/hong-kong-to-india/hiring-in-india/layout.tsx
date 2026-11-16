import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for Hong Kong Companies: Guide",
  },
  description:
    "Hiring employees in India for Hong Kong companies. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
  keywords: ["hiring employees in India for Hong Kong companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("hongkong", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20Hong%20Kong%20Companies%3A%20Guide", width: 1200, height: 630, alt: "Hiring Employees in India for Hong Kong Companies: Guide" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for Hong Kong Companies: Guide",
    description:
      "Hiring employees in India for Hong Kong companies. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hiring-in-india",
    locale: "en_HK",
  },
  twitter: {
    title: "Hiring Employees in India for Hong Kong Companies: Guide",
    description:
      "Hiring employees in India for Hong Kong companies. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
