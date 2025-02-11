"use client"

import "./globals.css"
import Link from "next/link"
import { Toaster } from "@/components/ui/toaster"
import { ConnectWallet } from "@/components/ConnectWallet"
import { WalletProvider, useWallet } from "@/contexts/WalletContext"
import type React from "react"

function Navigation() {
  const { isConnected } = useWallet()

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

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gradient-radial from-gray-900 via-gray-900 to-indigo-900 min-h-screen">
        <nav className="bg-gray-800/50 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-gray-100 text-xl font-bold">
              Blockchain Identity
            </Link>
            <Navigation />
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Toaster />
      </body>
    </html>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WalletProvider>
      <LayoutContent>{children}</LayoutContent>
    </WalletProvider>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
