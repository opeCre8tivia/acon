import { Category, Product } from "@/types/types.ds";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { categories, products } from "../../../utils/products.json";
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";

type Props = {};

const ProductsByCategory = (props: Props) => {
  const router = useRouter();
  const id = router.query.id;

  const [category, setCategory] = useState<Category | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      let _id = id as string;
      const _category = categories.find((cat) => cat.id === parseInt(_id));

      _category && setCategory(_category);
    }
  }, [id]);

  useEffect(() => {
    if (products && category) {
      const _catProducts = products.filter(
        (product) => product.category === category.id
      );

      console.log(_catProducts, "-----> list of products");
      _catProducts && setCategoryProducts(_catProducts);
    }
  }, [category, products]);

  return (
    <div className="w-full, h-full">
      {/* category header */}
      <div className="w-full h-[100px] flex justify-center items-center bg-teal-300">
        {category && (
          <Image
            alt="product line logo"
            src={category.logo}
            width={150}
            height={150}
          />
        )}
      </div>

      {/* product list */}

      <div id="featured" className="w-full h-fit sm:grid grid-cols-4 gap-2">
        {categoryProducts &&
          categoryProducts.map((product, index: number) => {
            return (
              product.isFeatured && <ProductCard item={product} key={index} />
            );
          })}
      </div>
    </div>
  );
};

export default ProductsByCategory;
