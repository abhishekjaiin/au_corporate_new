import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOP for Indian Subsidiary Employees of Australian Parent",
  },
  description:
    "ESOP for Indian subsidiary employees of Australian parent. See the papers, the order and the timing and how long the papers usually take. Start with the papers.",
  keywords: ["ESOP for Indian subsidiary employees of Australian parent", "cross-border ESOP India", "RSU taxation India", "perquisite tax", "FEMA ODI", "vesting", "SAR"],
  alternates: guideAlternates("australia", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOP%20for%20Indian%20Subsidiary%20Employees%20of%20Australian%20Parent", width: 1200, height: 630, alt: "ESOP for Indian Subsidiary Employees of Australian Parent" }],
    siteName: "AU Corporate",
    title: "ESOP for Indian Subsidiary Employees of Australian Parent",
    description:
      "ESOP for Indian subsidiary employees of Australian parent. See the papers, the order and the timing and how long the papers usually take. Start with the papers.",
    url: "https://www.theaucorp.com/australia-to-india/esop",
    locale: "en_AU",
  },
  twitter: {
    title: "ESOP for Indian Subsidiary Employees of Australian Parent",
    description:
      "ESOP for Indian subsidiary employees of Australian parent. See the papers, the order and the timing and how long the papers usually take. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
