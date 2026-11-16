import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Russian Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "Russian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year carefully.",
  keywords: ["Russian parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("russia", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Russian%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "Russian Parent Company Obligations for Indian Subsidiary",
    description:
      "Russian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year carefully.",
    url: "https://www.theaucorp.com/russia-to-india/russian-parent-obligations",
    locale: "en_RU",
  },
  twitter: {
    title: "Russian Parent Company Obligations for Indian Subsidiary",
    description:
      "Russian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow this year carefully.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
