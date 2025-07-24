"use client";
import notFound from "@/app/not-found";
import { User } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
    });
    // if (!res.ok) {
    //   throw new Error("Failed to fetch users");
    // }
    if (!res.ok) {
        notFound(); 
      }
    const arr = await res.json();
    console.log(arr);
    setUsers(arr);
  }
  return (
    <div>
      {users.map((user) => (
        // <li key={user.id}>{user.name}</li>
        <li key={user.id}>
          <Link href={`/users/client-version/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  );
}
