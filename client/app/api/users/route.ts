import { NextResponse } from 'next/server'

const mockUsers = [
  { id: '1', documentId: 'DOC001', profilePicture: '/placeholder.svg?height=40&width=40', authorized: true },
  { id: '2', documentId: 'DOC002', profilePicture: '/placeholder.svg?height=40&width=40', authorized: false },
  { id: '3', documentId: 'DOC003', profilePicture: '/placeholder.svg?height=40&width=40', authorized: false },
]

export async function GET() {
  // Simulate fetching users from the blockchain
  await new Promise(resolve => setTimeout(resolve, 500))

  return NextResponse.json({ users: mockUsers })
}

