import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Funding and FEMA Compliance for Singapore Companies",
  },
  description:
    "FDI funding and FEMA compliance for Singapore companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
  keywords: ["FDI funding and FEMA compliance for Singapore companies", "FC-GPR filing", "ECB from parent", "FIRMS portal", "pricing guidelines", "share capital", "RBI"],
  alternates: guideAlternates("singapore", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20Funding%20and%20FEMA%20Compliance%20for%20Singapore%20Companies", width: 1200, height: 630, alt: "FDI Funding and FEMA Compliance for Singapore Companies" }],
    siteName: "AU Corporate",
    title: "FDI Funding and FEMA Compliance for Singapore Companies",
    description:
      "FDI funding and FEMA compliance for Singapore companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
    url: "https://www.theaucorp.com/singapore-to-india/funding-and-fema",
    locale: "en_SG",
  },
  twitter: {
    title: "FDI Funding and FEMA Compliance for Singapore Companies",
    description:
      "FDI funding and FEMA compliance for Singapore companies. It covers share-capital reporting, parent loans and the clock that starts on allotment before you file.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
