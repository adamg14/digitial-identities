"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useWallet } from "@/context/walletContext";

export default function Register() {
  const [name, setName] = useState("");
  const [documentId, setDocumentId] = useState("");
  const { walletAddress } = useWallet();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walletAddress) {
      setError("Please connect your wallet.");
      return;
    }
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      // Call the backend GET endpoint for registration, passing data as query parameters.
      const response = await axios.get("http://localhost:8000/registerIdentity", {
        params: {
          fullName: name,
          documentId: documentId,
          walletAddress: walletAddress,
        },
      });
      setMessage(response.data.message);
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.response?.data?.error || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto bg-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">Register Your Identity</CardTitle>
          <CardDescription className="text-muted-foreground">
            Provide your details to secure your identity on the blockchain
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-secondary-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-input text-white"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="documentId" className="text-secondary-foreground">
                  Document ID
                </Label>
                <Input
                  id="documentId"
                  value={documentId}
                  onChange={(e) => setDocumentId(e.target.value)}
                  required
                  className="bg-input text-white"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="walletAddress" className="text-secondary-foreground">
                  Connected Wallet Address
                </Label>
                <Input
                  id="walletAddress"
                  value={walletAddress || ""}
                  readOnly
                  className="bg-input text-white"
                />
              </div>
            </div>
            <CardFooter>
              <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-white">
                {loading ? "Registering..." : "Register"}
              </Button>
            </CardFooter>
          </form>
          {message && <p className="text-green-500 mt-4">{message}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
