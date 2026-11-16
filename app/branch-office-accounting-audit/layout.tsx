import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Branch Office Audit in India: Documents and Deadlines",
  },
  description:
    "Branch office audit in India. It covers the RBI permission, the activity limit and how profits go home, in the order a parent can follow. Start with the papers.",
  keywords: ["branch office audit in India", "branch office accounting", "head office reconciliation", "tax audit", "IFRS", "US GAAP", "statutory audit"],
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Branch%20Office%20Audit%20in%20India%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "Branch Office Audit in India: Documents and Deadlines" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Branch Office Audit in India: Documents and Deadlines",
    description:
      "Branch office audit in India. It covers the RBI permission, the activity limit and how profits go home, in the order a parent can follow. Start with the papers.",
    url: "https://www.theaucorp.com/branch-office-accounting-audit",
  },
  twitter: {
    title: "Branch Office Audit in India: Documents and Deadlines",
    description:
      "Branch office audit in India. It covers the RBI permission, the activity limit and how profits go home, in the order a parent can follow. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
