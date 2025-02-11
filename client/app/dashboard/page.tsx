"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useWallet } from "@/contexts/WalletContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Check, X } from "lucide-react"
import type React from "react" // Added import for React

export default function Dashboard() {
  const [authorizedWallets, setAuthorizedWallets] = useState<string[]>([])
  const [pendingRequests, setPendingRequests] = useState<string[]>([])
  const [viewableWallets, setViewableWallets] = useState<string[]>([])
  const [newWalletRequest, setNewWalletRequest] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const { walletAddress, isConnected } = useWallet()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!isConnected) {
      router.push("/")
    } else {
      fetchWalletPermissions()
    }
  }, [isConnected, router])

  const fetchWalletPermissions = async () => {
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setAuthorizedWallets(["0x1234...5678", "0x9876...5432"])
      setPendingRequests(["0xabcd...efgh"])
      setViewableWallets(["0x2468...1357"])
    } catch (error) {
      console.error("Error fetching wallet permissions:", error)
      toast({
        title: "Error",
        description: "Failed to fetch wallet permissions. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePermissionUpdate = async (address: string, action: "accept" | "reject") => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      if (action === "accept") {
        setAuthorizedWallets((prev) => [...prev, address])
      }
      setPendingRequests((prev) => prev.filter((a) => a !== address))
      toast({
        title: "Success",
        description: `Request ${action}ed successfully.`,
      })
    } catch (error) {
      console.error("Error updating permission:", error)
      toast({
        title: "Error",
        description: `Failed to ${action} request. Please try again.`,
        variant: "destructive",
      })
    }
  }

  const handleNewWalletRequest = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newWalletRequest) return

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setViewableWallets((prev) => [...prev, newWalletRequest])
      setNewWalletRequest("")
      toast({
        title: "Success",
        description: "Request sent successfully.",
      })
    } catch (error) {
      console.error("Error sending wallet request:", error)
      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-100">Your Dashboard</h1>

      <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-gray-100">Authorized Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          {authorizedWallets.length > 0 ? (
            <ul className="space-y-2">
              {authorizedWallets.map((wallet) => (
                <li key={wallet} className="text-gray-300">
                  {wallet}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No wallets authorized to view your details.</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-gray-100">Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          {pendingRequests.length > 0 ? (
            <ul className="space-y-4">
              {pendingRequests.map((wallet) => (
                <li key={wallet} className="flex items-center justify-between">
                  <span className="text-gray-300">{wallet}</span>
                  <div className="space-x-2">
                    <Button
                      onClick={() => handlePermissionUpdate(wallet, "accept")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Check className="mr-2 h-4 w-4" /> Accept
                    </Button>
                    <Button onClick={() => handlePermissionUpdate(wallet, "reject")} variant="destructive">
                      <X className="mr-2 h-4 w-4" /> Reject
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No pending requests.</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="text-gray-100">Viewable Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          {viewableWallets.length > 0 ? (
            <ul className="space-y-2">
              {viewableWallets.map((wallet) => (
                <li key={wallet} className="text-gray-300">
                  {wallet}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">You don't have access to view any wallet details.</p>
          )}
        </CardContent>
      </Card>

      <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700">
        <CardHeader>
          <CardTitle className="text-gray-100">Request Access to a Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewWalletRequest} className="space-y-4">
            <Input
              value={newWalletRequest}
              onChange={(e) => setNewWalletRequest(e.target.value)}
              placeholder="Enter wallet address"
              className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
            />
            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-gray-100">
              Send Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

