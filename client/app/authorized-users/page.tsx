"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@/contexts/WalletContext"
import UserList from "@/components/UserList"

export default function AuthorizedUsers() {
  const { isConnected } = useWallet()
  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.push("/")
    }
  }, [isConnected, router])

  return (
    <main className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Authorized Users</h1>
      <UserList />
    </main>
  )
}

