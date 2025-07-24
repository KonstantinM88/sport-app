import notFound from "@/app/not-found";
import { User } from "@/types";
import Image from "next/image";

interface UserPageProps {
  params: { id: string };
}

export default async function UserPage({ params }: UserPageProps) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch user");
//   }
if (!res.ok) {
    return notFound(); 
  }
  const user: User = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <Image src={user.avatar} alt={user.name} width={150} height={150} />
      <p className="mt-2">Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}