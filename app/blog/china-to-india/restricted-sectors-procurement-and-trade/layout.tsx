import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Restrictions on Chinese Companies in India: A 2026 Guide",
  },
  description:
    "Restrictions on Chinese companies in India. It covers the structure, the papers your parent signs and the filings that follow in writing. Start with the papers.",
  keywords: ["restrictions on Chinese companies in India", "public procurement restrictions China", "GFR 144(xi)", "Press Note 3", "registration"],
  alternates: guideAlternates("china", "restricted-sectors"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Restrictions%20on%20Chinese%20Companies%20in%20India%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "Restrictions on Chinese Companies in India: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "Restrictions on Chinese Companies in India: A 2026 Guide",
    description:
      "Restrictions on Chinese companies in India. It covers the structure, the papers your parent signs and the filings that follow in writing. Start with the papers.",
    url: "https://www.theaucorp.com/china-to-india/restricted-sectors-procurement-and-trade",
    locale: "en_CN",
  },
  twitter: {
    title: "Restrictions on Chinese Companies in India: A 2026 Guide",
    description:
      "Restrictions on Chinese companies in India. It covers the structure, the papers your parent signs and the filings that follow in writing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
