import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SQL - Álgebra Relacional",
  description: "Um interpretador de álgebra relacional em SQL.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}