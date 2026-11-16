import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Japanese Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "Japanese parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow before money moves.",
  keywords: ["Japanese parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("japan", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Japanese%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Japanese Parent Company Obligations for Indian Subsidiary" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "Japanese Parent Company Obligations for Indian Subsidiary",
    description:
      "Japanese parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow before money moves.",
    url: "https://www.theaucorp.com/japan-to-india/japan-parent-obligations",
  },
  twitter: {
    title: "Japanese Parent Company Obligations for Indian Subsidiary",
    description:
      "Japanese parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow before money moves.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
