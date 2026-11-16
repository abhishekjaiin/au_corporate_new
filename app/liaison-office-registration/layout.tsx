import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Registration in India: 2026 Filing Guide",
  },
  description:
    "Liaison office registration in India. It covers what the office may do, how expenses are funded and when you renew, written for finance leads. We map the steps.",
  keywords: ["liaison office registration in India", "liaison office in India", "RBI approval liaison office", "Form FNC liaison office", "AD Category-I bank", "UIN", "permitted activities", "net worth", "3-year validity"],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Registration%20in%20India%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "Liaison Office Registration in India: 2026 Filing Guide" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Registration in India: 2026 Filing Guide",
    description:
      "Liaison office registration in India. It covers what the office may do, how expenses are funded and when you renew, written for finance leads. We map the steps.",
    url: "https://www.theaucorp.com/liaison-office-registration",
  },
  twitter: {
    title: "Liaison Office Registration in India: 2026 Filing Guide",
    description:
      "Liaison office registration in India. It covers what the office may do, how expenses are funded and when you renew, written for finance leads. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
