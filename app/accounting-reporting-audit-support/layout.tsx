import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Accounting Services for Foreign Companies in India",
  },
  description:
    "Accounting services for foreign companies in India. It covers the Indian statutory audit, the parent pack and how to prepare the file for you. We map the steps.",
  keywords: ["accounting services for foreign companies in India", "statutory audit India subsidiary", "US GAAP reporting India", "monthly bookkeeping India", "IFRS", "Ind AS", "tax audit", "reconciliation", "TDS", "GST"],
  alternates: {
    canonical: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Accounting%20Services%20for%20Foreign%20Companies%20in%20India", width: 1200, height: 630, alt: "Accounting Services for Foreign Companies in India" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Accounting Services for Foreign Companies in India",
    description:
      "Accounting services for foreign companies in India. It covers the Indian statutory audit, the parent pack and how to prepare the file for you. We map the steps.",
    url: "https://www.theaucorp.com/accounting-reporting-audit-support",
  },
  twitter: {
    title: "Accounting Services for Foreign Companies in India",
    description:
      "Accounting services for foreign companies in India. It covers the Indian statutory audit, the parent pack and how to prepare the file for you. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
