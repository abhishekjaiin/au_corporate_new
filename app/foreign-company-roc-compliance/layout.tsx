import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Foreign Company ROC Compliance: Documents and Deadlines",
  },
  description:
    "Foreign company ROC compliance. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  keywords: ["foreign company ROC compliance", "Form FC-3 filing", "Form FC-4 annual return", "Form FC-1 registration", "FC-2", "authorised representative", "MCA", "Companies Act section 380", "late fee"],
  alternates: {
    canonical: "https://www.theaucorp.com/foreign-company-roc-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Foreign%20Company%20ROC%20Compliance%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "Foreign Company ROC Compliance: Documents and Deadlines" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Foreign Company ROC Compliance: Documents and Deadlines",
    description:
      "Foreign company ROC compliance. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/foreign-company-roc-compliance",
  },
  twitter: {
    title: "Foreign Company ROC Compliance: Documents and Deadlines",
    description:
      "Foreign company ROC compliance. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
