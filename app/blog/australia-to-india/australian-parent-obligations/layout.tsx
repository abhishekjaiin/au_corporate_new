import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Australian Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "Australian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow with clear dates.",
  keywords: ["Australian parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("australia", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Australian%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Australian Parent Company Obligations for Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Australian Parent Company Obligations for Indian Subsidiary",
    description:
      "Australian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow with clear dates.",
    url: "https://www.theaucorp.com/australia-to-india/australian-parent-obligations",
    locale: "en_AU",
  },
  twitter: {
    title: "Australian Parent Company Obligations for Indian Subsidiary",
    description:
      "Australian parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow with clear dates.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
