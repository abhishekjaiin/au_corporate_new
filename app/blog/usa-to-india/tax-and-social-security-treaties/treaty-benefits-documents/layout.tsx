import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Form 10F and Tax Residency Certificate: Key Filing Steps",
  },
  description:
    "Form 10F and tax residency certificate. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  keywords: ["Form 10F and tax residency certificate", "DTAA benefit documents", "TRC", "Form 10F", "no PE declaration"],
  alternates: guideAlternates("usa", "treaty-benefits-documents"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Form%2010F%20and%20Tax%20Residency%20Certificate%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Form 10F and Tax Residency Certificate: Key Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Form 10F and Tax Residency Certificate: Key Filing Steps",
    description:
      "Form 10F and tax residency certificate. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/treaty-benefits-documents",
  },
  twitter: {
    title: "Form 10F and Tax Residency Certificate: Key Filing Steps",
    description:
      "Form 10F and tax residency certificate. It covers corporate tax, GST, intercompany charges and the calendar to track so the dates stay honest. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
