import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "German Supply Chain Act India Suppliers: Key Filing Steps",
  },
  description:
    "German Supply Chain Act India suppliers. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
  keywords: ["German Supply Chain Act India suppliers", "ESG compliance India", "LkSG", "CSDDD", "due diligence"],
  alternates: guideAlternates("germany", "esg-supply-chain"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=German%20Supply%20Chain%20Act%20India%20Suppliers%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "German Supply Chain Act India Suppliers: Key Filing Steps" }],
    siteName: "AU Corporate",
    title: "German Supply Chain Act India Suppliers: Key Filing Steps",
    description:
      "German Supply Chain Act India suppliers. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
    url: "https://www.theaucorp.com/germany-to-india/supply-chain-and-esg-duties",
    locale: "en_DE",
  },
  twitter: {
    title: "German Supply Chain Act India Suppliers: Key Filing Steps",
    description:
      "German Supply Chain Act India suppliers. It covers the structure, the papers your parent signs and the filings that follow for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
