import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "DTAA Withholding Tax Rates India Japan: Key Filing Steps",
  },
  description:
    "DTAA withholding tax rates India Japan. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  keywords: ["DTAA withholding tax rates India Japan", "India Japan DTAA rates", "dividend", "interest", "royalty", "fees for technical services"],
  alternates: guideAlternates("japan", "dtaa-withholding-rates"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=DTAA%20Withholding%20Tax%20Rates%20India%20Japan%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "DTAA Withholding Tax Rates India Japan: Key Filing Steps" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "DTAA Withholding Tax Rates India Japan: Key Filing Steps",
    description:
      "DTAA withholding tax rates India Japan. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
    url: "https://www.theaucorp.com/japan-to-india/tax-and-social-security-treaties/dtaa-withholding-rates",
  },
  twitter: {
    title: "DTAA Withholding Tax Rates India Japan: Key Filing Steps",
    description:
      "DTAA withholding tax rates India Japan. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
