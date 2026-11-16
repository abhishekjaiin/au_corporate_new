import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Indian Subsidiary Registration: Documents and Deadlines",
  },
  description:
    "Indian subsidiary registration. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  keywords: ["Indian subsidiary registration", "wholly owned subsidiary in India", "foreign subsidiary company registration", "set up subsidiary in India", "FDI automatic route", "SPICe+", "DIN", "resident director", "apostille", "FC-GPR"],
  alternates: {
    canonical: "https://www.theaucorp.com/india-subsidiary-registration",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=Indian%20Subsidiary%20Registration%3A%20Documents%20and%20Deadlines", width: 1200, height: 630, alt: "Indian Subsidiary Registration: Documents and Deadlines" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "Indian Subsidiary Registration: Documents and Deadlines",
    description:
      "Indian subsidiary registration. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
    url: "https://www.theaucorp.com/india-subsidiary-registration",
  },
  twitter: {
    title: "Indian Subsidiary Registration: Documents and Deadlines",
    description:
      "Indian subsidiary registration. It covers the structure, the papers your parent signs and the filings that follow, including the usual timing. We map the steps.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
