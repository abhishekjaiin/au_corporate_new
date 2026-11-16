import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "Social Security for US Expats in India: Key Filing Steps",
  },
  description:
    "Social security for US expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  keywords: ["social security for US expats in India", "India US social security", "totalization", "EPF", "international worker"],
  alternates: guideAlternates("usa", "social-security-agreement"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=Social%20Security%20for%20US%20Expats%20in%20India%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "Social Security for US Expats in India: Key Filing Steps" }],
    locale: "en_US",
    siteName: "AU Corporate",
    title: "Social Security for US Expats in India: Key Filing Steps",
    description:
      "Social security for US expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
    url: "https://www.theaucorp.com/usa-to-india/tax-and-social-security-treaties/social-security-us-expats-india",
  },
  twitter: {
    title: "Social Security for US Expats in India: Key Filing Steps",
    description:
      "Social security for US expats in India. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
