'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { User, UserCheck, Loader2 } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

interface BlockchainUser {
  id: string
  documentId: string
  profilePicture: string
  authorized: boolean
}

export default function UserList() {
  const [users, setUsers] = useState<BlockchainUser[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    } catch (error) {
      console.error('Error fetching users:', error)
      toast({
        title: "Error",
        description: "Failed to fetch users. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAuthorize = async (userId: string) => {
    try {
      const response = await fetch(`/api/authorize/${userId}`, { method: 'POST' })
      const data = await response.json()
      if (data.success) {
        setUsers(users.map(user => 
          user.id === userId ? { ...user, authorized: true } : user
        ))
        toast({
          title: "User Authorized",
          description: `User ${userId} has been successfully authorized.`,
        })
      }
    } catch (error) {
      console.error('Error authorizing user:', error)
      toast({
        title: "Authorization Failed",
        description: "There was an error authorizing the user. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700">
      <CardHeader>
        <CardTitle className="text-gray-100">User List</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-300">Document ID</TableHead>
                <TableHead className="text-gray-300">Profile Picture</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-gray-700">
                  <TableCell className="text-gray-300">{user.documentId}</TableCell>
                  <TableCell>
                    <img src={user.profilePicture} alt="Profile" className="w-10 h-10 rounded-full" />
                  </TableCell>
                  <TableCell>
                    {user.authorized ? (
                      <span className="text-green-400 flex items-center">
                        <UserCheck className="mr-1" /> Authorized
                      </span>
                    ) : (
                      <span className="text-yellow-400 flex items-center">
                        <User className="mr-1" /> Pending
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {!user.authorized && (
                      <Button
                        onClick={() => handleAuthorize(user.id)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-gray-100"
                      >
                        Authorize
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}

