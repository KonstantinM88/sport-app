import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"; 
import Image from "next/image";

export default async function Profile() {
    // Пример использования серверной сессии
    const session = await getServerSession(authOptions);
    return (
      <div>
        <h2>User profile </h2>
        <p>{session?.user?.email}</p>
  
        <Image
          src={session?.user?.image || ""}
          alt="avatar"
          unoptimized
          width={200}
          height={200}
        />
      </div>
    );
  }
