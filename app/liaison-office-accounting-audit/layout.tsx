import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Accounting in India: Timeline and Filings",
  },
  description:
    "Liaison office accounting in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
  keywords: ["liaison office accounting in India", "liaison office audit", "remittance", "expense reconciliation"],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Accounting%20in%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Liaison Office Accounting in India: Timeline and Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Accounting in India: Timeline and Filings",
    description:
      "Liaison office accounting in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
    url: "https://www.theaucorp.com/liaison-office-accounting-audit",
  },
  twitter: {
    title: "Liaison Office Accounting in India: Timeline and Filings",
    description:
      "Liaison office accounting in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
