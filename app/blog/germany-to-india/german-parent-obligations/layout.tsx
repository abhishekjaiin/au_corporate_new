import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "German parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  keywords: ["German parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("germany", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "German Parent Company Obligations for Indian Subsidiary" }],
    siteName: "AU Corporate",
    title: "German Parent Company Obligations for Indian Subsidiary",
    description:
      "German parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
    url: "https://www.theaucorp.com/germany-to-india/german-parent-obligations",
    locale: "en_DE",
  },
  twitter: {
    title: "German Parent Company Obligations for Indian Subsidiary",
    description:
      "German parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow for a foreign parent.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
