import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Press Note 3 FDI Approval: 2026 Guide for Foreign Firms",
  },
  description:
    "Press Note 3 FDI approval. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. Start with the papers.",
  keywords: ["Press Note 3 FDI approval", "FDI from China India", "land border country FDI", "government route", "beneficial owner", "MHA clearance"],
  alternates: guideAlternates("china", "press-note-3"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Press%20Note%203%20FDI%20Approval%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "Press Note 3 FDI Approval: 2026 Guide for Foreign Firms" }],
    siteName: "AU Corporate",
    title: "Press Note 3 FDI Approval: 2026 Guide for Foreign Firms",
    description:
      "Press Note 3 FDI approval. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/india-press-note-3-and-chinese-investors",
    locale: "en_CN",
  },
  twitter: {
    title: "Press Note 3 FDI Approval: 2026 Guide for Foreign Firms",
    description:
      "Press Note 3 FDI approval. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
