import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FDI Funding and FEMA Compliance for UK Companies: Guide",
  },
  description:
    "FDI funding and FEMA compliance for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. Start with the papers.",
  keywords: ["FDI funding and FEMA compliance for UK companies", "FC-GPR filing", "ECB from parent", "FIRMS portal", "pricing guidelines", "share capital", "RBI"],
  alternates: guideAlternates("uk", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FDI%20Funding%20and%20FEMA%20Compliance%20for%20UK%20Companies%3A%20Guide", width: 1200, height: 630, alt: "FDI Funding and FEMA Compliance for UK Companies: Guide" }],
    siteName: "AU Corporate",
    title: "FDI Funding and FEMA Compliance for UK Companies: Guide",
    description:
      "FDI funding and FEMA compliance for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. Start with the papers.",
    url: "https://www.theaucorp.com/uk-to-india/funding-and-fema",
    locale: "en_GB",
  },
  twitter: {
    title: "FDI Funding and FEMA Compliance for UK Companies: Guide",
    description:
      "FDI funding and FEMA compliance for UK companies. It covers share-capital reporting, parent loans and the clock that starts on allotment. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
