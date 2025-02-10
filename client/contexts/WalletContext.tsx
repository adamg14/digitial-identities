"use client"

import { createContext, useState, useContext, type ReactNode, useEffect } from "react"
import Cookies from "js-cookie"

interface WalletContextType {
  walletAddress: string | null
  setWalletAddress: (address: string | null) => void
  isConnected: boolean
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    const walletConnected = Cookies.get("walletConnected") === "true"
    setIsConnected(walletConnected)
  }, [])

  useEffect(() => {
    setIsConnected(!!walletAddress)
    if (walletAddress) {
      Cookies.set("walletConnected", "true", { expires: 1 })
    } else {
      Cookies.remove("walletConnected")
    }
  }, [walletAddress])

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress, isConnected }}>{children}</WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

