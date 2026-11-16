import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Funding and FEMA Compliance for Chinese Companies",
  },
  description:
    "FDI funding and FEMA compliance for Chinese companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. We map the steps.",
  keywords: ["FDI funding and FEMA compliance for Chinese companies", "FC-GPR filing", "ECB from parent", "FIRMS portal", "pricing guidelines", "share capital", "RBI"],
  alternates: guideAlternates("china", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20Funding%20and%20FEMA%20Compliance%20for%20Chinese%20Companies", width: 1200, height: 630, alt: "FDI Funding and FEMA Compliance for Chinese Companies" }],
    siteName: "AU Corporate",
    title: "FDI Funding and FEMA Compliance for Chinese Companies",
    description:
      "FDI funding and FEMA compliance for Chinese companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. We map the steps.",
    url: "https://www.theaucorp.com/china-to-india/funding-and-fema",
    locale: "en_CN",
  },
  twitter: {
    title: "FDI Funding and FEMA Compliance for Chinese Companies",
    description:
      "FDI funding and FEMA compliance for Chinese companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
