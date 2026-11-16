import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Germany Social Security for Employees: 2026 Guide",
  },
  description:
    "India Germany social security for employees. It covers the right visa, the employer on the contract and the papers to carry so the group calendar does not slip.",
  keywords: ["India Germany social security for employees", "international worker PF", "certificate of coverage", "EPF", "social security agreement", "exemption"],
  alternates: guideAlternates("germany", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Germany%20Social%20Security%20for%20Employees%3A%202026%20Guide", width: 1200, height: 630, alt: "India Germany Social Security for Employees: 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India Germany Social Security for Employees: 2026 Guide",
    description:
      "India Germany social security for employees. It covers the right visa, the employer on the contract and the papers to carry so the group calendar does not slip.",
    url: "https://www.theaucorp.com/germany-to-india/german-employees-in-india-ssa",
    locale: "en_DE",
  },
  twitter: {
    title: "India Germany Social Security for Employees: 2026 Guide",
    description:
      "India Germany social security for employees. It covers the right visa, the employer on the contract and the papers to carry so the group calendar does not slip.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
