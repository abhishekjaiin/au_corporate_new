import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Rules of Origin for Goods Via Hong Kong to India: Guide",
  },
  description:
    "Rules of origin for goods via Hong Kong to India. It covers the structure, the papers your parent signs and the filings that follow this year. We map the steps.",
  keywords: ["rules of origin for goods via Hong Kong to India", "India customs Hong Kong", "CAROTAR", "origin", "procurement"],
  alternates: guideAlternates("hongkong", "trade-origin"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Rules%20of%20Origin%20for%20Goods%20Via%20Hong%20Kong%20to%20India%3A%20Guide", width: 1200, height: 630, alt: "Rules of Origin for Goods Via Hong Kong to India: Guide" }],
    siteName: "AU Corporate",
    title: "Rules of Origin for Goods Via Hong Kong to India: Guide",
    description:
      "Rules of origin for goods via Hong Kong to India. It covers the structure, the papers your parent signs and the filings that follow this year. We map the steps.",
    url: "https://www.theaucorp.com/hong-kong-to-india/goods-via-hong-kong-origin-customs-and-procurement",
    locale: "en_HK",
  },
  twitter: {
    title: "Rules of Origin for Goods Via Hong Kong to India: Guide",
    description:
      "Rules of origin for goods via Hong Kong to India. It covers the structure, the papers your parent signs and the filings that follow this year. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
