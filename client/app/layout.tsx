import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Toaster } from "@/components/ui/toaster"
import { ConnectWallet } from "@/components/ConnectWallet"
import { WalletProvider } from "@/contexts/WalletContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blockchain Identity",
  description: "Secure your identity on the blockchain",
}

function Navigation({ isConnected }: { isConnected: boolean }) {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/" className="text-gray-300 hover:text-gray-100">
        Home
      </Link>
      {isConnected && (
        <>
          <Link href="/register" className="text-gray-300 hover:text-gray-100">
            Register
          </Link>
          <Link href="/authorized-users" className="text-gray-300 hover:text-gray-100">
            Authorized Users
          </Link>
          <Link href="/dashboard" className="text-gray-300 hover:text-gray-100">
            Dashboard
          </Link>
        </>
      )}
      <ConnectWallet />
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-radial from-gray-900 via-gray-900 to-indigo-900 min-h-screen`}>
        <WalletProvider>
          <nav className="bg-gray-800/50 backdrop-blur-card sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <Link href="/" className="text-gray-100 text-xl font-bold">
                Blockchain Identity
              </Link>
              <Navigation isConnected={false} />
            </div>
          </nav>
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Toaster />
        </WalletProvider>
      </body>
    </html>
  )
}

