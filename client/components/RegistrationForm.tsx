'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, Loader2 } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import { useWallet } from '@/contexts/WalletContext'

export default function RegistrationForm() {
  const [fullName, setFullName] = useState('')
  const [documentId, setDocumentId] = useState('')
  const [profilePicture, setProfilePicture] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { walletAddress } = useWallet()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!walletAddress) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet before registering.",
        variant: "destructive",
      })
      return
    }
    setIsSubmitting(true)
    // Here you would typically interact with your blockchain
    console.log('Submitting:', { fullName, documentId, profilePicture, walletAddress })
    // Mock API call
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, documentId, profilePicture: profilePicture?.name, walletAddress }),
      })
      const data = await response.json()
      console.log('Response:', data)
      toast({
        title: "Registration Successful",
        description: "Your identity has been registered on the blockchain.",
      })
      setFullName('')
      setDocumentId('')
      setProfilePicture(null)
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Registration Failed",
        description: "There was an error registering your identity. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-gray-100">Register Your Identity</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-gray-300">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="documentId" className="text-gray-300">Document ID</Label>
            <Input
              id="documentId"
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
              placeholder="Enter your document ID"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="profilePicture" className="text-gray-300">Profile Picture</Label>
            <div className="flex items-center space-x-2">
              <Input
                id="profilePicture"
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePicture(e.target.files?.[0] || null)}
                className="hidden"
              />
              <Button
                type="button"
                variant="secondary"
                onClick={() => document.getElementById('profilePicture')?.click()}
                className="w-full bg-gray-700 hover:bg-gray-600 text-gray-100 border-gray-600"
              >
                <Upload className="mr-2 h-4 w-4" /> Upload Picture
              </Button>
              {profilePicture && (
                <span className="text-gray-100 text-sm truncate">{profilePicture.name}</span>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-gray-300">Wallet Address</Label>
            <Input
              value={walletAddress || ''}
              readOnly
              className="bg-gray-700 border-gray-600 text-gray-100"
              placeholder="Connect wallet to see address"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-gray-100"
            disabled={isSubmitting || !walletAddress}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registering...
              </>
            ) : (
              'Register'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

