import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ESOP for Indian Subsidiary Employees of US Parent: Guide",
  },
  description:
    "ESOP for Indian subsidiary employees of US parent. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
  keywords: ["ESOP for Indian subsidiary employees of US parent", "cross-border ESOP India", "RSU taxation India", "perquisite tax", "FEMA ODI", "vesting", "SAR"],
  alternates: guideAlternates("usa", "esop"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ESOP%20for%20Indian%20Subsidiary%20Employees%20of%20US%20Parent%3A%20Guide", width: 1200, height: 630, alt: "ESOP for Indian Subsidiary Employees of US Parent: Guide" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "ESOP for Indian Subsidiary Employees of US Parent: Guide",
    description:
      "ESOP for Indian subsidiary employees of US parent. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
    url: "https://www.theaucorp.com/usa-to-india/esop",
  },
  twitter: {
    title: "ESOP for Indian Subsidiary Employees of US Parent: Guide",
    description:
      "ESOP for Indian subsidiary employees of US parent. It covers the right visa, the employer on the contract and the papers to carry in practice. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
