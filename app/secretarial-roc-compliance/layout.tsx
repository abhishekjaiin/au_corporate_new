import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Secretarial Compliance Services in India: A 2026 Guide",
  },
  description:
    "Secretarial compliance services in India. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  keywords: ["secretarial compliance services in India", "ROC compliance for subsidiary", "annual ROC filing", "board meeting compliance", "AGM", "MGT-7", "AOC-4", "DIR-3 KYC", "registered office", "strike off"],
  alternates: {
    canonical: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Secretarial%20Compliance%20Services%20in%20India%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Secretarial Compliance Services in India: A 2026 Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Secretarial Compliance Services in India: A 2026 Guide",
    description:
      "Secretarial compliance services in India. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
    url: "https://www.theaucorp.com/secretarial-roc-compliance",
  },
  twitter: {
    title: "Secretarial Compliance Services in India: A 2026 Guide",
    description:
      "Secretarial compliance services in India. It covers the structure, the papers your parent signs and the filings that follow so the group calendar does not slip.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
