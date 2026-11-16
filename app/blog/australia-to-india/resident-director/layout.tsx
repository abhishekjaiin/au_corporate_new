import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Resident Director in India: 2026 Guide for Foreign Firms",
  },
  description:
    "Resident director in India. It covers the structure, the papers your parent signs and the filings that follow, including who signs each paper. We map the steps.",
  keywords: ["resident director in India", "nominee director services India", "section 149(3) resident director", "182 days", "DIN", "director liability", "Companies Act"],
  alternates: guideAlternates("australia", "resident-director"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Resident%20Director%20in%20India%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "Resident Director in India: 2026 Guide for Foreign Firms" }],
    siteName: "AU Corporate",
    title: "Resident Director in India: 2026 Guide for Foreign Firms",
    description:
      "Resident director in India. It covers the structure, the papers your parent signs and the filings that follow, including who signs each paper. We map the steps.",
    url: "https://www.theaucorp.com/australia-to-india/resident-director",
    locale: "en_AU",
  },
  twitter: {
    title: "Resident Director in India: 2026 Guide for Foreign Firms",
    description:
      "Resident director in India. It covers the structure, the papers your parent signs and the filings that follow, including who signs each paper. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
