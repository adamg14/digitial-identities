"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleWalletAction = async () => {
    if (isConnected) {
      // Disconnect wallet
      setIsConnected(false)
      setWalletAddress("")
    } else {
      // Connect wallet
      if (typeof window.ethereum !== "undefined") {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" })
          const accounts = await window.ethereum.request({ method: "eth_accounts" })
          setWalletAddress(accounts[0])
          setIsConnected(true)
        } catch (error) {
          console.error("Failed to connect to wallet:", error)
        }
      } else {
        alert("Please install MetaMask!")
      }
    }
  }

  return (
    <Button onClick={handleWalletAction} className="bg-primary hover:bg-primary/90 text-white">
      {isConnected ? `Disconnect: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
    </Button>
  )
}

