import { Product } from "@/types/types.ds";
import Image from "next/image";
import React from "react";
import { MdArrowRight } from "react-icons/md";

type Props = {
  item: Product;
};

const ProductCard = ({ item }: Props) => {
  return (
    <div className="bg-white border-gray-300 border-2 w-full sm:w-[49%]  p-4 m-1 flex flex-col justify-between items-center">
      <Image alt="acon product" width={100} height={100} src={item.image} />
      <div className="text-teal-400 text-sm font-bold text-center">
        {item.name}
      </div>
      <div className="text-gray-500 text-[12px] font-normal text-justify">
        {item.description}
      </div>

      <div className="text-teal-400 text-[12px] font-normal mt-5 hover:text-blue-950">
        View Details
        <MdArrowRight style={{ display: "inline" }} size={25} />
      </div>
    </div>
  );
};

export default ProductCard;
