import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India China Social Security for Employees: A 2026 Guide",
  },
  description:
    "India China social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  keywords: ["India China social security for employees", "international worker PF", "certificate of coverage", "EPF", "social security agreement", "exemption"],
  alternates: guideAlternates("china", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20China%20Social%20Security%20for%20Employees%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "India China Social Security for Employees: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India China Social Security for Employees: A 2026 Guide",
    description:
      "India China social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
    url: "https://www.theaucorp.com/china-to-india/chinese-employees-in-india",
    locale: "en_CN",
  },
  twitter: {
    title: "India China Social Security for Employees: A 2026 Guide",
    description:
      "India China social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
