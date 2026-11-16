import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary vs Branch vs Liaison Office in India in 2026",
  },
  description:
    "Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers.",
  keywords: ["subsidiary vs branch vs liaison office in India", "India entry structure for Russian companies", "LLP vs private limited", "wholly owned subsidiary", "branch office", "liaison office", "tax rate"],
  alternates: guideAlternates("russia", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Subsidiary%20vs%20Branch%20vs%20Liaison%20Office%20in%20India%20in%202026", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Subsidiary vs Branch vs Liaison Office in India in 2026",
    description:
      "Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/structure-options",
    locale: "en_RU",
  },
  twitter: {
    title: "Subsidiary vs Branch vs Liaison Office in India in 2026",
    description:
      "Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
