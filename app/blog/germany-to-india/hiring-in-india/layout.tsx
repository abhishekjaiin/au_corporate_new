import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for German Companies: Filings",
  },
  description:
    "Hiring employees in India for German companies. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
  keywords: ["hiring employees in India for German companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("germany", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20German%20Companies%3A%20Filings", width: 1200, height: 630, alt: "Hiring Employees in India for German Companies: Filings" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for German Companies: Filings",
    description:
      "Hiring employees in India for German companies. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/hiring-in-india",
    locale: "en_DE",
  },
  twitter: {
    title: "Hiring Employees in India for German Companies: Filings",
    description:
      "Hiring employees in India for German companies. It covers the right visa, the employer on the contract and the papers to carry this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
