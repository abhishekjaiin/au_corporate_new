import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Accounting in India: Timeline and Filings",
  },
  description:
    "Project office accounting in India. It covers the contract, the permission, the bank file and the closing steps so the dates stay honest. Start with the papers.",
  keywords: ["project office accounting in India", "project office audit", "WIP", "retention", "head office reconciliation"],
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Project%20Office%20Accounting%20in%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Project Office Accounting in India: Timeline and Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Accounting in India: Timeline and Filings",
    description:
      "Project office accounting in India. It covers the contract, the permission, the bank file and the closing steps so the dates stay honest. Start with the papers.",
    url: "https://www.theaucorp.com/project-office-accounting-audit",
  },
  twitter: {
    title: "Project Office Accounting in India: Timeline and Filings",
    description:
      "Project office accounting in India. It covers the contract, the permission, the bank file and the closing steps so the dates stay honest. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
