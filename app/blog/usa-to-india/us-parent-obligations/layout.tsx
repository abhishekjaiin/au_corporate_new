import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "US Parent Company Obligations for Indian Subsidiary",
  },
  description:
    "US parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
  keywords: ["US parent company obligations for Indian subsidiary", "parent company reporting India", "consolidation", "CbCR", "Form 3CEAA", "FLA return", "ultimate beneficial owner"],
  alternates: guideAlternates("usa", "parent-obligations"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=US%20Parent%20Company%20Obligations%20for%20Indian%20Subsidiary", width: 1200, height: 630, alt: "US Parent Company Obligations for Indian Subsidiary" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "US Parent Company Obligations for Indian Subsidiary",
    description:
      "US parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
    url: "https://www.theaucorp.com/usa-to-india/us-parent-obligations",
  },
  twitter: {
    title: "US Parent Company Obligations for Indian Subsidiary",
    description:
      "US parent company obligations for Indian subsidiary. It covers the structure, the papers your parent signs and the filings that follow so the dates stay honest.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
