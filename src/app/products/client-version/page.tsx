"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductsClientVersion() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products Client-version</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold mb-1">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-green-700 font-bold text-base">
                  ${product.price}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
