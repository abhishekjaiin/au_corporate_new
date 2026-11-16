import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Taxation in India: A Practical 2026 Guide",
  },
  description:
    "Project office taxation in India. It covers the contract, the permission, the bank file and the closing steps, including who signs each paper. We map the steps.",
  keywords: ["project office taxation in India", "project office PE", "lower deduction certificate", "presumptive tax", "GST", "transfer pricing"],
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-tax-gst-transfer-pricing",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Project%20Office%20Taxation%20in%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Project Office Taxation in India: A Practical 2026 Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Taxation in India: A Practical 2026 Guide",
    description:
      "Project office taxation in India. It covers the contract, the permission, the bank file and the closing steps, including who signs each paper. We map the steps.",
    url: "https://www.theaucorp.com/project-office-tax-gst-transfer-pricing",
  },
  twitter: {
    title: "Project Office Taxation in India: A Practical 2026 Guide",
    description:
      "Project office taxation in India. It covers the contract, the permission, the bank file and the closing steps, including who signs each paper. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
