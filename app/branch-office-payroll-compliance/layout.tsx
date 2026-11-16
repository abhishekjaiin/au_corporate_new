import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Branch Office Payroll in India: Documents and Deadlines",
  },
  description:
    "Branch office payroll in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. Start with the papers.",
  keywords: ["branch office payroll in India", "PF ESI branch office", "FRRO registration", "professional tax", "labour codes", "expat"],
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Branch%20Office%20Payroll%20in%20India%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "Branch Office Payroll in India: Documents and Deadlines" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Branch Office Payroll in India: Documents and Deadlines",
    description:
      "Branch office payroll in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. Start with the papers.",
    url: "https://www.theaucorp.com/branch-office-payroll-compliance",
  },
  twitter: {
    title: "Branch Office Payroll in India: Documents and Deadlines",
    description:
      "Branch office payroll in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
