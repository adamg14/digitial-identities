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
    const storedWalletAddress = Cookies.get("walletAddress")
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress)
      setIsConnected(true)
    }
  }, [])

  const setWalletAddressAndCookie = (address: string | null) => {
    setWalletAddress(address)
    setIsConnected(!!address)
    if (address) {
      Cookies.set("walletAddress", address, { expires: 1 }) // Set cookie for 1 day
    } else {
      Cookies.remove("walletAddress")
    }
  }

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress: setWalletAddressAndCookie, isConnected }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

