import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Branch Office Compliance in India: Timeline and Filings",
  },
  description:
    "Branch office compliance in India. It covers the RBI permission, the activity limit and how profits go home, with the bank pack included. Start with the papers.",
  keywords: ["branch office compliance in India", "annual activity certificate", "branch office FEMA compliance", "Form FNC", "AD bank", "UIN", "profit remittance", "compounding", "RBI"],
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-fema-rbi-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Branch%20Office%20Compliance%20in%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Branch Office Compliance in India: Timeline and Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Branch Office Compliance in India: Timeline and Filings",
    description:
      "Branch office compliance in India. It covers the RBI permission, the activity limit and how profits go home, with the bank pack included. Start with the papers.",
    url: "https://www.theaucorp.com/branch-office-fema-rbi-compliance",
  },
  twitter: {
    title: "Branch Office Compliance in India: Timeline and Filings",
    description:
      "Branch office compliance in India. It covers the RBI permission, the activity limit and how profits go home, with the bank pack included. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
