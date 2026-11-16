import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Australia Social Security Agreement: A 2026 Guide",
  },
  description:
    "India Australia social security agreement. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  keywords: ["India Australia social security agreement", "certificate of coverage", "international worker PF", "EPF", "superannuation", "exemption"],
  alternates: guideAlternates("australia", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Australia%20Social%20Security%20Agreement%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "India Australia Social Security Agreement: A 2026 Guide" }],
    siteName: "AU Corporate",
    title: "India Australia Social Security Agreement: A 2026 Guide",
    description:
      "India Australia social security agreement. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
    url: "https://www.theaucorp.com/australia-to-india/foreign-employee-treaty-ssa",
    locale: "en_AU",
  },
  twitter: {
    title: "India Australia Social Security Agreement: A 2026 Guide",
    description:
      "India Australia social security agreement. It covers the right visa, the employer on the contract and the papers to carry in plain English with the dates named.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
