import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Funding and FEMA Compliance for Hong Kong Companies",
  },
  description:
    "FDI funding and FEMA compliance for Hong Kong companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
  keywords: ["FDI funding and FEMA compliance for Hong Kong companies", "FC-GPR filing", "ECB from parent", "FIRMS portal", "pricing guidelines", "share capital", "RBI"],
  alternates: guideAlternates("hongkong", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20Funding%20and%20FEMA%20Compliance%20for%20Hong%20Kong%20Companies", width: 1200, height: 630, alt: "FDI Funding and FEMA Compliance for Hong Kong Companies" }],
    siteName: "AU Corporate",
    title: "FDI Funding and FEMA Compliance for Hong Kong Companies",
    description:
      "FDI funding and FEMA compliance for Hong Kong companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
    url: "https://www.theaucorp.com/hong-kong-to-india/funding-and-fema",
    locale: "en_HK",
  },
  twitter: {
    title: "FDI Funding and FEMA Compliance for Hong Kong Companies",
    description:
      "FDI funding and FEMA compliance for Hong Kong companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
