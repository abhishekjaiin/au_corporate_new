import type { Metadata } from "next"
import { guideAlternates } from "@/lib/guides/countries"

export const metadata: Metadata = {
  title: {
    absolute: "ICOFR Audit for Indian Subsidiaries: 2026 Filing Guide",
  },
  description:
    "ICOFR audit for Indian subsidiaries. It covers the Indian statutory audit, the parent pack and how to prepare the file in plain English and with one owner here.",
  keywords: ["ICOFR audit for Indian subsidiaries", "SOX compliance India subsidiary", "statutory audit", "internal financial controls", "CARO", "Ind AS"],
  alternates: guideAlternates("japan", "audit-icofr"),
  openGraph: {
    type: "article",
    images: [{ url: "https://www.theaucorp.com/og?title=ICOFR%20Audit%20for%20Indian%20Subsidiaries%3A%202026%20Filing%20Guide", width: 1200, height: 630, alt: "ICOFR Audit for Indian Subsidiaries: 2026 Filing Guide" }],
    locale: "en_JP",
    siteName: "AU Corporate",
    title: "ICOFR Audit for Indian Subsidiaries: 2026 Filing Guide",
    description:
      "ICOFR audit for Indian subsidiaries. It covers the Indian statutory audit, the parent pack and how to prepare the file in plain English and with one owner here.",
    url: "https://www.theaucorp.com/japan-to-india/audit-icofr",
  },
  twitter: {
    title: "ICOFR Audit for Indian Subsidiaries: 2026 Filing Guide",
    description:
      "ICOFR audit for Indian subsidiaries. It covers the Indian statutory audit, the parent pack and how to prepare the file in plain English and with one owner here.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
