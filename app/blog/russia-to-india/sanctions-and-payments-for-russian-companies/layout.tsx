import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Russia Payments and Sanctions: 2026 Filing Guide",
  },
  description:
    "India Russia payments and sanctions. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  keywords: ["India Russia payments and sanctions", "rupee trade settlement", "SRVA account", "OFAC", "EU sanctions", "vostro"],
  alternates: guideAlternates("russia", "sanctions-payments"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Russia%20Payments%20and%20Sanctions%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India Russia Payments and Sanctions: 2026 Filing Guide",
    description:
      "India Russia payments and sanctions. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
    url: "https://www.theaucorp.com/russia-to-india/sanctions-and-payments-for-russian-companies",
    locale: "en_RU",
  },
  twitter: {
    title: "India Russia Payments and Sanctions: 2026 Filing Guide",
    description:
      "India Russia payments and sanctions. It covers the structure, the papers your parent signs and the filings that follow in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
