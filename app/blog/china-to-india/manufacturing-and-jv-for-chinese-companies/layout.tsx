import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Chinese Joint Venture in India Manufacturing: Key Steps",
  },
  description:
    "Chinese joint venture in India manufacturing. It covers the structure, the papers your parent signs and the filings that follow for your team. We map the steps.",
  keywords: ["Chinese joint venture in India manufacturing", "PLI scheme Chinese companies", "Press Note 3", "JV", "manufacturing"],
  alternates: guideAlternates("china", "manufacturing-jv"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Chinese%20Joint%20Venture%20in%20India%20Manufacturing%3A%20Key%20Steps", width: 1200, height: 630, alt: "Chinese Joint Venture in India Manufacturing: Key Steps" }],
    siteName: "AU Corporate",
    title: "Chinese Joint Venture in India Manufacturing: Key Steps",
    description:
      "Chinese joint venture in India manufacturing. It covers the structure, the papers your parent signs and the filings that follow for your team. We map the steps.",
    url: "https://www.theaucorp.com/china-to-india/manufacturing-and-jv-for-chinese-companies",
    locale: "en_CN",
  },
  twitter: {
    title: "Chinese Joint Venture in India Manufacturing: Key Steps",
    description:
      "Chinese joint venture in India manufacturing. It covers the structure, the papers your parent signs and the filings that follow for your team. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
