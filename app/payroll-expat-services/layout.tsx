import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Payroll Outsourcing India for Foreign Companies in 2026",
  },
  description:
    "Payroll outsourcing India for foreign companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  keywords: ["payroll outsourcing India for foreign companies", "PF ESI compliance", "expat payroll India", "FRRO registration", "professional tax", "labour codes", "gratuity", "Form 16", "employment contract"],
  alternates: {
    canonical: "https://www.theaucorp.com/payroll-expat-services",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Payroll%20Outsourcing%20India%20for%20Foreign%20Companies%20in%202026", width: 1200, height: 630, alt: "Payroll Outsourcing India for Foreign Companies in 2026" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Payroll Outsourcing India for Foreign Companies in 2026",
    description:
      "Payroll outsourcing India for foreign companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
    url: "https://www.theaucorp.com/payroll-expat-services",
  },
  twitter: {
    title: "Payroll Outsourcing India for Foreign Companies in 2026",
    description:
      "Payroll outsourcing India for foreign companies. It covers the right visa, the employer on the contract and the papers to carry for your team. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
