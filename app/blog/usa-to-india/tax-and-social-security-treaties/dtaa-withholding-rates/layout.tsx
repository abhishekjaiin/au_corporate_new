import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DTAA Withholding Tax Rates India USA: 2026 Filing Guide",
  },
  description:
    "DTAA withholding tax rates India USA. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
  keywords: ["DTAA withholding tax rates India USA", "India USA DTAA rates", "dividend", "interest", "royalty", "fees for technical services"],
  alternates: guideAlternates("usa", "dtaa-withholding-rates"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=DTAA%20Withholding%20Tax%20Rates%20India%20USA%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "DTAA Withholding Tax Rates India USA: 2026 Filing Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "DTAA Withholding Tax Rates India USA: 2026 Filing Guide",
    description:
      "DTAA withholding tax rates India USA. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/dtaa-withholding-rates",
  },
  twitter: {
    title: "DTAA Withholding Tax Rates India USA: 2026 Filing Guide",
    description:
      "DTAA withholding tax rates India USA. It covers corporate tax, GST, intercompany charges and the calendar to track, written for finance leads. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
