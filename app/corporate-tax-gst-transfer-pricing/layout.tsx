import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Transfer Pricing Services in India: Timeline and Filings",
  },
  description:
    "Transfer pricing services in India. It covers corporate tax, GST, intercompany charges and the calendar to track, with the bank pack included. We map the steps.",
  keywords: ["transfer pricing services in India", "corporate tax rate India subsidiary", "GST for foreign subsidiary", "DTAA", "Form 3CEB", "safe harbour", "arm's length price", "25.17%", "APA", "withholding tax"],
  alternates: {
    canonical: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Transfer%20Pricing%20Services%20in%20India%3A%20Timeline%20and%20Filings", width: 1200, height: 630, alt: "Transfer Pricing Services in India: Timeline and Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Transfer Pricing Services in India: Timeline and Filings",
    description:
      "Transfer pricing services in India. It covers corporate tax, GST, intercompany charges and the calendar to track, with the bank pack included. We map the steps.",
    url: "https://www.theaucorp.com/corporate-tax-gst-transfer-pricing",
  },
  twitter: {
    title: "Transfer Pricing Services in India: Timeline and Filings",
    description:
      "Transfer pricing services in India. It covers corporate tax, GST, intercompany charges and the calendar to track, with the bank pack included. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
