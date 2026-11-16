import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Project Office Registration in India: 2026 Filing Guide",
  },
  description:
    "Project office registration in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. We map the steps.",
  keywords: ["project office registration in India", "project office for foreign company", "general permission RBI", "Form FNC", "contract", "AD bank", "foreign funded project", "UIN"],
  alternates: {
    canonical: "https://www.theaucorp.com/project-office-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Project%20Office%20Registration%20in%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Project Office Registration in India: 2026 Filing Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Project Office Registration in India: 2026 Filing Guide",
    description:
      "Project office registration in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/project-office-registration",
  },
  twitter: {
    title: "Project Office Registration in India: 2026 Filing Guide",
    description:
      "Project office registration in India. It covers the contract, the permission, the bank file and the closing steps, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
