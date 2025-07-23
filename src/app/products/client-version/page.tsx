"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductsClientVersion() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const arr = await res.json();
    setProducts(arr);
  }

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
}