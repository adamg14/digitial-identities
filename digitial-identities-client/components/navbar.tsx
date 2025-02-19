import Link from "next/link"
import { ConnectWallet } from "./connect-wallet"

export function Navbar() {
  return (
    <nav className="bg-secondary border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-bold text-xl">
              BlockchainIdentity
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-muted-foreground hover:bg-primary/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/register"
                className="text-muted-foreground hover:bg-primary/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Register
              </Link>
              <Link
                href="/authorized-users"
                className="text-muted-foreground hover:bg-primary/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Authorized Users
              </Link>
              <Link
                href="/my-identity"
                className="text-muted-foreground hover:bg-primary/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                My Identity
              </Link>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </nav>
  )
}

