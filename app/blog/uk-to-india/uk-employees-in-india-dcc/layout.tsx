import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India UK Social Security for Employees: Key Filing Steps",
  },
  description:
    "India UK social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  keywords: ["India UK social security for employees", "international worker PF", "certificate of coverage", "EPF", "social security agreement", "exemption"],
  alternates: guideAlternates("uk", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20UK%20Social%20Security%20for%20Employees%3A%20Key%20Filing%20Steps", width: 1200, height: 630, alt: "India UK Social Security for Employees: Key Filing Steps" }],
    siteName: "AU Corporate",
    title: "India UK Social Security for Employees: Key Filing Steps",
    description:
      "India UK social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
    url: "https://www.theaucorp.com/uk-to-india/uk-employees-in-india-dcc",
    locale: "en_GB",
  },
  twitter: {
    title: "India UK Social Security for Employees: Key Filing Steps",
    description:
      "India UK social security for employees. It covers the right visa, the employer on the contract and the papers to carry in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
