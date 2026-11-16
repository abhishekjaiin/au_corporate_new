import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "UK Parent Company Reporting Obligations: 2026 Guide",
  },
  description:
    "UK parent company reporting obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year here.",
  keywords: ["UK parent company reporting obligations for Indian subsidiary", "UK consolidation India subsidiary", "CbCR", "Companies House", "FLA return"],
  alternates: guideAlternates("uk", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=UK%20Parent%20Company%20Reporting%20Obligations%3A%202026%20Guide", width: 1200, height: 630, alt: "UK Parent Company Reporting Obligations: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "UK Parent Company Reporting Obligations: 2026 Guide",
    description:
      "UK parent company reporting obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year here.",
    url: "https://www.theaucorp.com/uk-to-india/uk-parent-reporting",
    locale: "en_GB",
  },
  twitter: {
    title: "UK Parent Company Reporting Obligations: 2026 Guide",
    description:
      "UK parent company reporting obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
