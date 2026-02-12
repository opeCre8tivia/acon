import React from "react";
import Image from "next/image";

import productsData from "../../utils/products.json";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  title: string;
  description: string;
  logo: string;
};

const HomePageProductCategories = () => {

  const { categories } = productsData;

  
  const CategoryCard = ({ item }: { item: Category }) => (
    <div className="h-[250px] bg-gray-100 flex flex-col justify-between mb-6 py-4">
      <div className="w-full h-[100px] flex justify-center items-center">
        <Image
          alt={`${item.name} logo`}
          width={200}
          height={200}
          src={item.logo}
        />
      </div>

      <div className="w-full h-fit text-gray-800 text-[14px] font-bold flex justify-center items-center">
        {item.title}
      </div>

      <div className="w-full h-[130px] px-4 text-center text-gray-400 overflow-hidden line-clamp-3">
        {item.description}
      </div>

      {/* button */}
      <div className="w-full flex justify-center items-center">
        <Link href={`/products/category/${item.id}`}>
          <div className=" flex justify-center items-center w-[150px] h-[50px] border-2 border-teal-300 m-4 hover:bg-teal-300 hover:text-white">
            View Products
          </div>
        </Link>
      </div>
    </div>
  );

  return (
    <div
      id="categories"
      className="w-full h-fit sm:grid sm:grid-cols-2 gap-3 px-4 "
    >
      {categories &&
        categories.map((category, index) => {
          return <CategoryCard item={category} key={index} />;
        })}
    </div>
  );
};

export default HomePageProductCategories;
