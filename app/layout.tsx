import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon.ico"
  },
  title: "GeorginaDev",
  description:
    "Portfolio of Georgina Kimani, a Full-Stack Developer and UI/UX Designer specializing in web technologies.",
  generator: "Next.js",
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
