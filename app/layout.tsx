import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Georgina Kimani - Full-Stack Developer & UI/UX Designer",
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
      <body>{children}</body>
    </html>
  )
}
