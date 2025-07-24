// export default async function ProductDetails({
//     params,
//   }: {
//     params: Promise<{ id: string }>;
//   }) {
//       const id = (await params).id;
//     return <div>Id - {id}</div>;
//   }

import notFound from "@/app/not-found";
import { Product } from "@/types";
import Image from "next/image";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductDetails({ params }: ProductPageProps) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`);
  if (!res.ok) {
    return notFound();
  }

  const product: Product = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-sm text-gray-500 mb-4">ID-{params.id}</p>

      <div className="w-[300px]">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          unoptimized
          className="rounded shadow-md transition duration-300 hover:scale-105"
        />
      </div>

      <p className="mt-4">{product.description}</p>
      <p className="font-semibold mt-2 text-green-700">${product.price}</p>
    </div>
  );
}
