import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppHeader } from "@/components/app-header"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Okdesk #1 Help Desk система",
  description: "Help desk system interface with Notion styling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-[#FFFFFF]"> {/* Added bg from ticket page */}
            <AppHeader />
            <div className="flex flex-1 overflow-hidden">
              <Sidebar />
              {/* Ensure children container takes remaining space and handles its own scrolling if needed */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
