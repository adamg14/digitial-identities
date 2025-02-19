"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, Clock } from "lucide-react";

type UsersData = {
  verified: string[];
  pending: string[];
};

export default function authorisedUsers() {
  const [data, setData] = useState<UsersData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/getAuthorisedUsers");
      setData(res.data);
      setError(null);
    } catch (err: any) {
      console.error("Error fetching users:", err);
      setError(err.response?.data?.error || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <p>No data available.</p>;

  // Combine data into one list for display.
  const combinedUsers = [
    ...data.verified.map((addr) => ({
      id: addr,
      name: addr,
      status: "Authorized" as const,
    })),
    ...data.pending.map((addr) => ({
      id: addr,
      name: addr,
      status: "Pending" as const,
    })),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Authorized Users</h1>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-primary/20">
            <TableHead className="text-secondary-foreground">Wallet Address</TableHead>
            <TableHead className="text-secondary-foreground">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {combinedUsers.map((user) => (
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
