import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FC-GPR Filing for Australian Investors: Key Filing Steps",
  },
  description:
    "FC-GPR filing for Australian investors. It covers share-capital reporting, parent loans and the clock that starts on allotment this year. Start with the papers.",
  keywords: ["FC-GPR filing for Australian investors", "FEMA compliance", "FDI reporting", "FIRMS portal", "30 days", "valuation certificate", "KYC", "share allotment"],
  alternates: guideAlternates("australia", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FC-GPR%20Filing%20for%20Australian%20Investors%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "FC-GPR Filing for Australian Investors: Key Filing Steps" }],
    siteName: "AU Corporate",
    title: "FC-GPR Filing for Australian Investors: Key Filing Steps",
    description:
      "FC-GPR filing for Australian investors. It covers share-capital reporting, parent loans and the clock that starts on allotment this year. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/funding-fema-fc-gpr",
    locale: "en_AU",
  },
  twitter: {
    title: "FC-GPR Filing for Australian Investors: Key Filing Steps",
    description:
      "FC-GPR filing for Australian investors. It covers share-capital reporting, parent loans and the clock that starts on allotment this year. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
