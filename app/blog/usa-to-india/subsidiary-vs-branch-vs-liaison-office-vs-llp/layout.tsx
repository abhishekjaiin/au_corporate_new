import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Subsidiary vs Branch vs Liaison Office in India in 2026",
  },
  description:
    "Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers.",
  keywords: ["subsidiary vs branch vs liaison office in India", "LLP for foreign company", "India entry structure", "wholly owned subsidiary", "branch office", "liaison office", "FDI", "tax rate"],
  alternates: guideAlternates("usa", "subsidiary-vs-branch-vs-liaison-office-vs-llp"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Subsidiary%20vs%20Branch%20vs%20Liaison%20Office%20in%20India%20in%202026", width: 1200, height: 630, alt: "Subsidiary vs Branch vs Liaison Office in India in 2026" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Subsidiary vs Branch vs Liaison Office in India in 2026",
    description:
      "Subsidiary vs branch vs liaison office in India. It covers what the office may do, how expenses are funded and when you renew in writing. Start with the papers.",
    url: "https://www.theaucorp.com/usa-to-india/subsidiary-vs-branch-vs-liaison-office-vs-llp",
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
