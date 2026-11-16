import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "GCC in India for Singapore Companies: 2026 Filing Guide",
  },
  description:
    "GCC in India for Singapore companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  keywords: ["GCC in India for Singapore companies", "global capability centre India", "captive centre", "BOT", "SEZ", "cost", "talent"],
  alternates: guideAlternates("singapore", "gcc"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=GCC%20in%20India%20for%20Singapore%20Companies%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "GCC in India for Singapore Companies: 2026 Filing Guide" }],
    siteName: "AU Corporate",
    title: "GCC in India for Singapore Companies: 2026 Filing Guide",
    description:
      "GCC in India for Singapore companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
    url: "https://www.theaucorp.com/singapore-to-india/gcc-for-singapore-companies",
    locale: "en_SG",
  },
  twitter: {
    title: "GCC in India for Singapore Companies: 2026 Filing Guide",
    description:
      "GCC in India for Singapore companies. It covers the structure, the papers your parent signs and the filings that follow with clear dates. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
