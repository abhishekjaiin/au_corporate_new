import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Taxation in India: A Practical 2026 Guide",
  },
  description:
    "Liaison office taxation in India. It covers what the office may do, how expenses are funded and when you renew so your parent is not guessing. We map the steps.",
  keywords: ["liaison office taxation in India", "Form 49C", "liaison office PE risk", "TDS", "annual statement", "GST"],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Taxation%20in%20India%3A%20A%20Practical%202026%20Guide", width: 1200, height: 630, alt: "Liaison Office Taxation in India: A Practical 2026 Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Taxation in India: A Practical 2026 Guide",
    description:
      "Liaison office taxation in India. It covers what the office may do, how expenses are funded and when you renew so your parent is not guessing. We map the steps.",
    url: "https://www.theaucorp.com/liaison-office-tax-compliance",
  },
  twitter: {
    title: "Liaison Office Taxation in India: A Practical 2026 Guide",
    description:
      "Liaison office taxation in India. It covers what the office may do, how expenses are funded and when you renew so your parent is not guessing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
