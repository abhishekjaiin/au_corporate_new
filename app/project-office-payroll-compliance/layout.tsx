import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Payroll in India: A Practical 2026 Guide",
  },
  description:
    "Project office payroll in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. Start with the papers.",
  keywords: ["project office payroll in India", "contract labour compliance", "PF", "ESI", "FRRO"],
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Project%20Office%20Payroll%20in%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Project Office Payroll in India: A Practical 2026 Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Payroll in India: A Practical 2026 Guide",
    description:
      "Project office payroll in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. Start with the papers.",
    url: "https://www.theaucorp.com/project-office-payroll-compliance",
  },
  twitter: {
    title: "Project Office Payroll in India: A Practical 2026 Guide",
    description:
      "Project office payroll in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
