import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Funding and FEMA Compliance for German Companies",
  },
  description:
    "FDI funding and FEMA compliance for German companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before money moves.",
  keywords: ["FDI funding and FEMA compliance for German companies", "FC-GPR filing", "ECB from parent", "FIRMS portal", "pricing guidelines", "share capital", "RBI"],
  alternates: guideAlternates("germany", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20Funding%20and%20FEMA%20Compliance%20for%20German%20Companies", width: 1200, height: 630, alt: "FDI Funding and FEMA Compliance for German Companies" }],
    siteName: "AU Corporate",
    title: "FDI Funding and FEMA Compliance for German Companies",
    description:
      "FDI funding and FEMA compliance for German companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before money moves.",
    url: "https://www.theaucorp.com/germany-to-india/funding-and-fema",
    locale: "en_DE",
  },
  twitter: {
    title: "FDI Funding and FEMA Compliance for German Companies",
    description:
      "FDI funding and FEMA compliance for German companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before money moves.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
