"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// Import your wallet context (adjust the path as needed)
import { useWallet } from "@/context/walletContext";

type Identity = {
  name: string;
  identityHash: string;
  photoUrl: string;
};

export default function MyIdentity() {
  // Get the connected wallet address from your wallet context
  const { walletAddress } = useWallet();
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch identity details when walletAddress is available
  useEffect(() => {
    if (!walletAddress) return;

    setLoading(true);
    axios
      .get("http://localhost:8000/getUserIdentity", {
        params: { userAddress: walletAddress },
      })
      .then((response) => {
        const data = response.data;
        // Map the API response to the keys your component expects.
        // Server returns: { fullName, hashedIdentity, wallet }
        // We want: { name, identityHash, photoUrl }
        const formattedData: Identity = {
          name: data.fullName,
          identityHash: data.hashedIdentity,
          photoUrl: "/placeholder.svg", // You can change this to a dynamic image if available.
        };
        setIdentity(formattedData);
      })
      .catch((err) => {
        console.error("Error fetching identity:", err);
        setError("Error fetching identity details");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [walletAddress]);

  // If no wallet is connected, prompt the user to connect
  if (!walletAddress) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Please connect your wallet to view your identity.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!identity) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        No identity found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">My Identity</h1>
      <Card className="max-w-md mx-auto bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Identity Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center">
            <Image
              src={identity.photoUrl}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-secondary-foreground">
              Name
            </h2>
            <p className="text-muted-foreground">{identity.name}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-secondary-foreground">
              Identity Hash
            </h2>
            <p className="text-muted-foreground break-all">
              {identity.identityHash}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
