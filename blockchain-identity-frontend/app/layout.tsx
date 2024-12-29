import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blockchain Identity',
  description: 'Secure your identity on the blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-indigo-900`}>
        <nav className="bg-gray-800/50 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-gray-100 text-xl font-bold">Blockchain Identity</Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-300 hover:text-gray-100">Home</Link>
              <Link href="/register" className="text-gray-300 hover:text-gray-100">Register</Link>
              <Link href="/authorized-users" className="text-gray-300 hover:text-gray-100">Authorized Users</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  )
}