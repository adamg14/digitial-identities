"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Register() {
  const [name, setName] = useState("")
  const [documentId, setDocumentId] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [walletAddress, setWalletAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend or smart contract
    console.log({ name, documentId, image, walletAddress })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

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
                <Label htmlFor="image" className="text-secondary-foreground">
                  Profile Picture (Optional)
                </Label>
                <Input id="image" type="file" onChange={handleImageChange} className="bg-input text-white" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="walletAddress" className="text-secondary-foreground">
                  Connected Wallet Address
                </Label>
                <Input id="walletAddress" value={walletAddress} readOnly className="bg-input text-white" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="bg-accent hover:bg-accent/90 text-white">
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

