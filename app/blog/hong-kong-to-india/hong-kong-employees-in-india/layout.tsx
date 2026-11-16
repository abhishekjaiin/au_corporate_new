import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Hong Kong Social Security for Employees: Key Steps",
  },
  description:
    "India Hong Kong social security for employees. It covers the right visa, the employer on the contract and the papers to carry in writing. Start with the papers.",
  keywords: ["India Hong Kong social security for employees", "international worker PF", "certificate of coverage", "EPF", "social security agreement", "exemption"],
  alternates: guideAlternates("hongkong", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Hong%20Kong%20Social%20Security%20for%20Employees%3A%20Key%20Steps", width: 1200, height: 630, alt: "India Hong Kong Social Security for Employees: Key Steps" }],
    siteName: "AU Corporate",
    title: "India Hong Kong Social Security for Employees: Key Steps",
    description:
      "India Hong Kong social security for employees. It covers the right visa, the employer on the contract and the papers to carry in writing. Start with the papers.",
    url: "https://www.theaucorp.com/hong-kong-to-india/hong-kong-employees-in-india",
    locale: "en_HK",
  },
  twitter: {
    title: "India Hong Kong Social Security for Employees: Key Steps",
    description:
      "India Hong Kong social security for employees. It covers the right visa, the employer on the contract and the papers to carry in writing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
