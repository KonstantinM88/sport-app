import { Product } from "@/types";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
    next: { tags: ["products"] },
  });

  if (!res.ok) {
    throw new Error("Fetch products failed");
  }
  const products: Product[] = await res.json();

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </div>
  );
};

export default ProductsServerVersion;