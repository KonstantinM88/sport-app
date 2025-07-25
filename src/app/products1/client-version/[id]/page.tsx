// import notFound from "@/app/not-found";
// import { User } from "@/types";
// import Image from "next/image";
// import Link from "next/link";

// interface UserPageProps {
//   params: { id: string };
// }

// export default async function UserPage({ params }: UserPageProps) {
//   const res = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`);

//   if (!res.ok) {
//     return notFound();
//   }

//   const user: User = await res.json();

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <Link
//         href="/products1/client-version"
//         className="inline-block mb-4 text-sm text-blue-600 hover:underline"
//       >
//         ← Назад к списку пользователей
//       </Link>

//       <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
//       <p className="text-sm text-gray-500 mb-4">ID-{params.id}</p>

//       <div className="w-[150px]">
//         <Image
//           src={user.avatar}
//           alt={user.name}
//           width={150}
//           height={150}
//           unoptimized
//           className="rounded-full shadow-md transition duration-300 hover:scale-105"
//         />
//       </div>

//       <p className="mt-4">Email: {user.email}</p>
//       <p>Role: {user.role}</p>
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   return [];
// }
import notFound from "@/app/not-found";
import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function UserPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${params.id}`);

  if (!res.ok) {
    return notFound();
  }

  const user: User = await res.json();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Link
        href="/products1/client-version"
        className="inline-block mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Назад к списку пользователей
      </Link>

      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-sm text-gray-500 mb-4">ID-{params.id}</p>

      <div className="w-[150px]">
        <Image
          src={user.avatar}
          alt={user.name}
          width={150}
          height={150}
          unoptimized
          className="rounded-full shadow-md transition duration-300 hover:scale-105"
        />
      </div>

      <p className="mt-4">Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
