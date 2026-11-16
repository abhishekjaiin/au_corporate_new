import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Branch Office Registration in India: 2026 Filing Guide",
  },
  description:
    "Branch office registration in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. We map the steps.",
  keywords: ["branch office registration in India", "foreign company branch office India", "Form FNC", "RBI approval branch office", "branch office vs subsidiary", "AD Category-I bank", "UIN", "FC-1", "net worth", "profit track record", "permitted activities"],
  alternates: {
    canonical: "https://www.theaucorp.com/branch-office-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Branch%20Office%20Registration%20in%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Branch Office Registration in India: 2026 Filing Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Branch Office Registration in India: 2026 Filing Guide",
    description:
      "Branch office registration in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. We map the steps.",
    url: "https://www.theaucorp.com/branch-office-registration",
  },
  twitter: {
    title: "Branch Office Registration in India: 2026 Filing Guide",
    description:
      "Branch office registration in India. It covers the RBI permission, the activity limit and how profits go home, including who signs each paper. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
