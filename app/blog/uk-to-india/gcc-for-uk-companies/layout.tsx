import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GCC in India for UK Companies: Documents and Deadlines",
  },
  description:
    "GCC in India for UK companies. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
  keywords: ["GCC in India for UK companies", "global capability centre India", "captive centre", "BOT", "SEZ", "cost", "talent"],
  alternates: guideAlternates("uk", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20in%20India%20for%20UK%20Companies%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "GCC in India for UK Companies: Documents and Deadlines" }],
    siteName: "AU Corporate",
    title: "GCC in India for UK Companies: Documents and Deadlines",
    description:
      "GCC in India for UK companies. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
    url: "https://www.theaucorp.com/uk-to-india/gcc-for-uk-companies",
    locale: "en_GB",
  },
  twitter: {
    title: "GCC in India for UK Companies: Documents and Deadlines",
    description:
      "GCC in India for UK companies. It covers the structure, the papers your parent signs and the filings that follow, with the bank pack included. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
