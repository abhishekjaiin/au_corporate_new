import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Singapore Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "Singapore parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow. We map the steps.",
  keywords: ["Singapore parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("singapore", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Singapore%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "Singapore Parent Company Obligations for Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "Singapore Parent Company Obligations for Indian Subsidiary",
    description:
      "Singapore parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow. We map the steps.",
    url: "https://www.theaucorp.com/singapore-to-india/singapore-parent-obligations",
    locale: "en_SG",
  },
  twitter: {
    title: "Singapore Parent Company Obligations for Indian Subsidiary",
    description:
      "Singapore parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
