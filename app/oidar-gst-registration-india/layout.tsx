import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "OIDAR Registration in India: 2026 Guide for Foreign Firms",
  },
  description:
    "OIDAR registration in India. It covers corporate tax, GST, intercompany charges and the calendar to track so your parent is not guessing. Start with the papers.",
  keywords: ["OIDAR registration in India", "OIDAR GST registration", "GSTR-5A filing", "GST for foreign SaaS", "NTOR", "B2C", "REG-10", "digital services", "IGST", "place of supply"],
  alternates: {
    canonical: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  openGraph: {
    type: "website",
    images: [{ url: "https://www.theaucorp.com/og?title=OIDAR%20Registration%20in%20India%3A%202026%20Guide%20for%20Foreign%20Firms", width: 1200, height: 630, alt: "OIDAR Registration in India: 2026 Guide for Foreign Firms" }],
    locale: "en_IN",
    siteName: "AU Corporate",
    title: "OIDAR Registration in India: 2026 Guide for Foreign Firms",
    description:
      "OIDAR registration in India. It covers corporate tax, GST, intercompany charges and the calendar to track so your parent is not guessing. Start with the papers.",
    url: "https://www.theaucorp.com/oidar-gst-registration-india",
  },
  twitter: {
    title: "OIDAR Registration in India: 2026 Guide for Foreign Firms",
    description:
      "OIDAR registration in India. It covers corporate tax, GST, intercompany charges and the calendar to track so your parent is not guessing. Start with the papers.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
