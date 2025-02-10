"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Wallet } from "lucide-react"
import { useWallet } from "@/contexts/WalletContext"
import Cookies from "js-cookie"

declare global {
  interface Window {
    ethereum?: any
  }
}

export function ConnectWallet() {
  const [isConnecting, setIsConnecting] = useState(false)
  const { walletAddress, setWalletAddress } = useWallet()
  const { toast } = useToast()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  async function checkIfWalletIsConnected() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          Cookies.set("walletConnected", "true", { expires: 1 }) // Set cookie for 1 day
        }
      } catch (error) {
        console.error("An error occurred while checking the wallet connection:", error)
      }
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        setIsConnecting(true)
        await window.ethereum.request({ method: "eth_requestAccounts" })
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        setWalletAddress(accounts[0])
        Cookies.set("walletConnected", "true", { expires: 1 }) // Set cookie for 1 day
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0]}`,
        })
      } catch (error) {
        console.error("An error occurred while connecting the wallet:", error)
        toast({
          title: "Connection Failed",
          description: "There was an error connecting to your wallet. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsConnecting(false)
      }
    } else {
      toast({
        title: "MetaMask Not Detected",
        description: "Please install MetaMask to connect your wallet.",
        variant: "destructive",
      })
    }
  }

  function disconnectWallet() {
    setWalletAddress(null)
    Cookies.remove("walletConnected")
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  function truncateAddress(address: string): string {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <Button
      onClick={walletAddress ? disconnectWallet : connectWallet}
      disabled={isConnecting}
      variant="secondary"
      className="bg-indigo-600 hover:bg-indigo-700 text-white"
    >
      <Wallet className="mr-2 h-4 w-4" />
      {isConnecting
        ? "Connecting..."
        : walletAddress
          ? `Disconnect ${truncateAddress(walletAddress)}`
          : "Connect Wallet"}
    </Button>
  )
}

