import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "India Russia Social Security for Employees: A 2026 Guide",
  },
  description:
    "India Russia social security for employees. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  keywords: ["India Russia social security for employees", "international worker PF", "certificate of coverage", "EPF", "social security agreement", "exemption"],
  alternates: guideAlternates("russia", "foreign-employee-treaty-ssa"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=India%20Russia%20Social%20Security%20for%20Employees%3A%20A%202026%20Guide", width: 1200, height: 630, alt: "AU Corporate" }],
    siteName: "AU Corporate",
    title: "India Russia Social Security for Employees: A 2026 Guide",
    description:
      "India Russia social security for employees. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
    url: "https://www.theaucorp.com/russia-to-india/russian-employees-in-india",
    locale: "en_RU",
  },
  twitter: {
    title: "India Russia Social Security for Employees: A 2026 Guide",
    description:
      "India Russia social security for employees. It covers the right visa, the employer on the contract and the papers to carry for your team. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
