import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for Australian Companies",
  },
  description:
    "Hiring employees in India for Australian companies. It covers the right visa, the employer on the contract and the papers to carry today. Start with the papers.",
  keywords: ["hiring employees in India for Australian companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("australia", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20Australian%20Companies", width: 1200, height: 630, alt: "Hiring Employees in India for Australian Companies" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for Australian Companies",
    description:
      "Hiring employees in India for Australian companies. It covers the right visa, the employer on the contract and the papers to carry today. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/hiring-and-payroll",
    locale: "en_AU",
  },
  twitter: {
    title: "Hiring Employees in India for Australian Companies",
    description:
      "Hiring employees in India for Australian companies. It covers the right visa, the employer on the contract and the papers to carry today. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
