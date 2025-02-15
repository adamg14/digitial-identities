"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, Clock } from "lucide-react"

type User = {
  id: string
  name: string
  status: "Authorized" | "Pending"
}

export default function AuthorizedUsers() {
  const [users, setUsers] = useState<User[]>([
    { id: "1", name: "Alice Johnson", status: "Authorized" },
    { id: "2", name: "Bob Smith", status: "Pending" },
    { id: "3", name: "Charlie Brown", status: "Pending" },
  ])

  const handleAuthorize = (id: string) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, status: "Authorized" } : user)))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Authorized Users</h1>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-primary/20">
            <TableHead className="text-secondary-foreground">Name</TableHead>
            <TableHead className="text-secondary-foreground">Status</TableHead>
            <TableHead className="text-secondary-foreground">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-b border-primary/20">
              <TableCell className="text-muted-foreground">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">
                {user.status === "Authorized" ? (
                  <span className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    Authorized
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Clock className="text-yellow-500 mr-2" size={16} />
                    Pending
                  </span>
                )}
              </TableCell>
              <TableCell>
                {user.status === "Pending" && (
                  <Button
                    onClick={() => handleAuthorize(user.id)}
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    Authorize
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

