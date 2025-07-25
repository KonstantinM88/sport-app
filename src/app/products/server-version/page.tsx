// import { Product } from "@/types";

import { Product } from "../../../types";

const ProductsServerVersion = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
    cache: "no-store",
    next: { tags: ["products"] },
  });

  if (!res.ok) {
    throw new Error("Fetch products failed");
  }

  const products: Product[] = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products Server-version</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition group"
          >
            <div className="flex items-start gap-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-24 h-24 object-cover rounded transform transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
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
};

export default ProductsServerVersion;
