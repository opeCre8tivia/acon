import React, { useState, useEffect } from "react";

import productList from "../../utils/products.json";
import { Product } from "@/types/types.ds";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productList && setProducts(productList.products);
  }, []);

  return (
    <div className="w-full h-fit sm:grid grid-cols-4 gap-2">
      {products &&
        products.map((product, index: number) => {
          return (
            product.isFeatured && <ProductCard item={product} key={index} />
          );
        })}
    </div>
  );
};

export default FeaturedProducts;
