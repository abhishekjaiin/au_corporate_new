import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Income Tax Notices for Foreign Subsidiaries in India",
  },
  description:
    "Income tax notices for foreign subsidiaries in India. It covers corporate tax, GST, intercompany charges and the calendar to track today. Start with the papers.",
  keywords: ["income tax notices for foreign subsidiaries in India", "tax litigation India", "faceless assessment", "appeal", "CIT(A)", "ITAT"],
  alternates: guideAlternates("australia", "tax-notices-and-litigation"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Income%20Tax%20Notices%20for%20Foreign%20Subsidiaries%20in%20India", width: 1200, height: 630, alt: "Income Tax Notices for Foreign Subsidiaries in India" }],
    siteName: "AU Corporate",
    title: "Income Tax Notices for Foreign Subsidiaries in India",
    description:
      "Income tax notices for foreign subsidiaries in India. It covers corporate tax, GST, intercompany charges and the calendar to track today. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/tax-notices-and-litigation",
    locale: "en_AU",
  },
  twitter: {
    title: "Income Tax Notices for Foreign Subsidiaries in India",
    description:
      "Income tax notices for foreign subsidiaries in India. It covers corporate tax, GST, intercompany charges and the calendar to track today. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
