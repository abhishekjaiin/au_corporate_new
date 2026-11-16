import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "FC-GPR Filing for Japanese Investors: 2026 Filing Guide",
  },
  description:
    "FC-GPR filing for Japanese investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in practice. Start with the papers.",
  keywords: ["FC-GPR filing for Japanese investors", "FEMA compliance", "FDI reporting", "FIRMS portal", "30 days", "valuation certificate", "KYC", "share allotment"],
  alternates: guideAlternates("japan", "funding-fema-fc-gpr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=FC-GPR%20Filing%20for%20Japanese%20Investors%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "FC-GPR Filing for Japanese Investors: 2026 Filing Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "FC-GPR Filing for Japanese Investors: 2026 Filing Guide",
    description:
      "FC-GPR filing for Japanese investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in practice. Start with the papers.",
    url: "https://www.theaucorp.com/japan-to-india/funding-fema-fc-gpr",
  },
  twitter: {
    title: "FC-GPR Filing for Japanese Investors: 2026 Filing Guide",
    description:
      "FC-GPR filing for Japanese investors. It covers share-capital reporting, parent loans and the clock that starts on allotment in practice. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
