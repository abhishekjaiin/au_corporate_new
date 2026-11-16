import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FC-GPR Filing for US Investors: Documents and Deadlines",
  },
  description:
    "FC-GPR filing for US investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in plain English and with one owner here.",
  keywords: ["FC-GPR filing for US investors", "FEMA compliance", "FDI reporting", "FIRMS portal", "30 days", "valuation certificate", "KYC", "share allotment"],
  alternates: guideAlternates("usa", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FC-GPR%20Filing%20for%20US%20Investors%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "FC-GPR Filing for US Investors: Documents and Deadlines" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "FC-GPR Filing for US Investors: Documents and Deadlines",
    description:
      "FC-GPR filing for US investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in plain English and with one owner here.",
    url: "https://www.theaucorp.com/usa-to-india/funding-fema-fc-gpr",
  },
  twitter: {
    title: "FC-GPR Filing for US Investors: Documents and Deadlines",
    description:
      "FC-GPR filing for US investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
