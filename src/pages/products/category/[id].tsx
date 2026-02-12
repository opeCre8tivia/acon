import { Category, Product } from "@/types/types.ds";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import productData from "../../../utils/products.json";
import Image from "next/image";
import ProductCard from "@/components/ProductCard/ProductCard";
import OtherFooter from "@/components/OtherFooter/OtherFooter";
import NavBar from "@/components/NavBar/NavBar";

type Props = {};

const ProductsByCategory = (props: Props) => {

  const { categories, products } = productData

  
  const router = useRouter();
  const id = router.query.id;

  const [category, setCategory] = useState<Category | null>(null);
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      let _id = id as string;
      const _category = categories.find((cat: any) => cat.id === parseInt(_id));

      _category && setCategory(_category);
    }
  }, [id]);

  useEffect(() => {
    if (products && category) {
      const _catProducts = products.filter(
        (product: any) => product.category === category.id
      );

      _catProducts && setCategoryProducts(_catProducts);
    }
  }, [category, products]);

  return (
    <div className="w-full, h-full">
      <nav>
        <NavBar />
      </nav>
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

      <div id="" className="w-full h-fit sm:grid grid-cols-4 gap-2">
        {categoryProducts &&
          categoryProducts.map((product, index: number) => {
            return product && <ProductCard item={product} key={index} />;
          })}
      </div>

      {/* footer  */}
      <OtherFooter />
    </div>
  );
};

export default ProductsByCategory;
