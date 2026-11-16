import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Payroll in India: A Practical 2026 Guide",
  },
  description:
    "Liaison office payroll in India. It covers what the office may do, how expenses are funded and when you renew, including who signs each paper. We map the steps.",
  keywords: ["liaison office payroll in India", "PF for liaison office", "professional tax", "FRRO"],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Payroll%20in%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Liaison Office Payroll in India: A Practical 2026 Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Payroll in India: A Practical 2026 Guide",
    description:
      "Liaison office payroll in India. It covers what the office may do, how expenses are funded and when you renew, including who signs each paper. We map the steps.",
    url: "https://www.theaucorp.com/liaison-office-payroll-compliance",
  },
  twitter: {
    title: "Liaison Office Payroll in India: A Practical 2026 Guide",
    description:
      "Liaison office payroll in India. It covers what the office may do, how expenses are funded and when you renew, including who signs each paper. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
