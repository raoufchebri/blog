import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raouf Chebri",
  description: "Developer Relations | AI Engineer | AWS Community Builder",
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mono.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
