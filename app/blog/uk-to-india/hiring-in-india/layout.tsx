import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Hiring Employees in India for UK Companies: A 2026 Guide",
  },
  description:
    "Hiring employees in India for UK companies. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  keywords: ["hiring employees in India for UK companies", "payroll compliance India", "employee benefits India", "PF", "ESI", "gratuity", "labour codes", "CTC"],
  alternates: guideAlternates("uk", "hiring-and-payroll"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Hiring%20Employees%20in%20India%20for%20UK%20Companies%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Hiring Employees in India for UK Companies: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Hiring Employees in India for UK Companies: A 2026 Guide",
    description:
      "Hiring employees in India for UK companies. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/hiring-in-india",
    locale: "en_GB",
  },
  twitter: {
    title: "Hiring Employees in India for UK Companies: A 2026 Guide",
    description:
      "Hiring employees in India for UK companies. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
