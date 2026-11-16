import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Liaison Office Compliance in India: Timeline and Filings",
  },
  description:
    "Liaison office compliance in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
  keywords: ["liaison office compliance in India", "annual activity certificate liaison office", "liaison office extension", "AD bank", "RBI", "compounding"],
  alternates: {
    canonical: "https://www.theaucorp.com/liaison-office-fema-rbi-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Liaison%20Office%20Compliance%20in%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Liaison Office Compliance in India: Timeline and Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Liaison Office Compliance in India: Timeline and Filings",
    description:
      "Liaison office compliance in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
    url: "https://www.theaucorp.com/liaison-office-fema-rbi-compliance",
  },
  twitter: {
    title: "Liaison Office Compliance in India: Timeline and Filings",
    description:
      "Liaison office compliance in India. It covers what the office may do, how expenses are funded and when you renew, with the bank pack included. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
