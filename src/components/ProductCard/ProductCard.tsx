import { Product } from "@/types/types.ds";
import Image from "next/image";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import Link from "next/link";

type Props = {
  item: Product;
};

const ProductCard = ({ item }: Props) => {
  return (
    <div className="bg-white min-h-[350px] p-4">
      {/* image section */}
      <div className="w-full h-[200px] bg-gray-100 flex justify-center items-center">
        <Image
          alt="acon product"
          width={150}
          height={150}
          src={item.image}
          style={{
            margin: "auto",
            paddingBottom: 4,
            width: "80%",
            height: "80%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="text-teal-400 text-sm font-bold text-center my-4">
        {item.name}
      </div>
      <div className="text-gray-800 text-[12px] font-normal text-justify ">
        {item.caption}
      </div>

      <Link href={`/product/details/${item.id}`}>
        <div className="text-teal-400 text-[12px] font-normal mt-5 hover:text-blue-950 w-full flex justify-center items-center">
          View Details
          <MdArrowRight style={{ display: "inline" }} size={25} />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
