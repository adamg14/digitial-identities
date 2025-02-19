"use client";

import { useWallet } from "@/context/walletContext";
import { Button } from "@/components/ui/button";

export function ConnectWallet() {
  // Use the wallet context instead of local state
  const { walletAddress, setWalletAddress } = useWallet();
  const isConnected = walletAddress !== null && walletAddress !== "";

  const handleWalletAction = async () => {
    if (isConnected) {
      // Disconnect wallet: clear the context's wallet address
      setWalletAddress("");
    } else {
      // Connect wallet
      if (typeof window.ethereum !== "undefined") {
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          // Update the wallet address in context
          setWalletAddress(accounts[0]);
        } catch (error) {
          console.error("Failed to connect to wallet:", error);
        }
      } else {
        alert("Please install MetaMask!");
      }
    }
  };

  return (
    <Button
      onClick={handleWalletAction}
      className="bg-primary hover:bg-primary/90 text-white"
    >
      {isConnected
        ? `Disconnect: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
        : "Connect Wallet"}
    </Button>
  );
}
