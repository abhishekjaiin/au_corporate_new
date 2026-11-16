import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "FEMA Compliance for Foreign Companies in India: Filings",
  },
  description:
    "FEMA compliance for foreign companies in India. It covers share-capital reporting, parent loans and the clock that starts on allotment so the dates stay honest.",
  keywords: ["FEMA compliance for foreign companies in India", "FC-GPR filing", "FLA return", "ECB compliance", "FC-TRS", "RBI", "FIRMS portal", "compounding", "downstream investment", "pricing guidelines"],
  alternates: {
    canonical: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=FEMA%20Compliance%20for%20Foreign%20Companies%20in%20India%3A%20Filings", width: 1200, height: 630, alt: "FEMA Compliance for Foreign Companies in India: Filings" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "FEMA Compliance for Foreign Companies in India: Filings",
    description:
      "FEMA compliance for foreign companies in India. It covers share-capital reporting, parent loans and the clock that starts on allotment so the dates stay honest.",
    url: "https://www.theaucorp.com/fema-rbi-compliance",
  },
  twitter: {
    title: "FEMA Compliance for Foreign Companies in India: Filings",
    description:
      "FEMA compliance for foreign companies in India. It covers share-capital reporting, parent loans and the clock that starts on allotment so the dates stay honest.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
