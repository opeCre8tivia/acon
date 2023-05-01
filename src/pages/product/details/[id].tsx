import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "../../../types/types.ds";
import { products } from "../../../utils/products.json";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import NavBar from "@/components/NavBar/NavBar";

type Props = {};

const details = (props: Props) => {
  /**
   * page dispalays details of a product in a pre define format
   *
   * -pass product id in params
   * - fetch the product from
   */

  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id && products) {
      let _id = id as string;
      let _product = products.find((product) => product.id === parseInt(_id));
      _product && setProduct(_product);
    }
  }, [id, products]);

  return (
    <>
      <NavBar />
      <div className="w-full h-full p-10 ">
        {/* product and bullet pionts section */}
        <div className="w-full h-fit sm:flex justify-between items-center">
          {/* product */}
          <div className="w-full sm:w-[50%] h-fit flex justify-center items-center">
            {product && (
              <Image
                alt="acon product"
                width={400}
                height={400}
                src={product?.image}
              />
            )}
          </div>

          {/* bullets */}
          <div className="w-full sm:w-[50%] h-full">
            <div className="text-black text-[20px] font-extrabold mb-6 ">
              {product?.name}
            </div>

            {/* tabs */}
            <p className="mb-3">Description</p>
            <div className="text-gray-500 text-sm font-normal mb-6">
              {product?.description}
            </div>

            {/* ---- */}
            <p className="mb-3">{product?.bullet_points_title}</p>
            <div>
              {product?.bullet_points.map((bp) => (
                <div className="flex">
                  {/* icon */}
                  <div className="w-[40px] h-[40px] text-teal-300">
                    <FaCheckCircle />
                  </div>

                  {/* text */}
                  <div className="text-sm text-gray-500">{bp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* table section */}
        <div className="w-full h-fit flex flex-col items-end">
          <div className="mb-4 mt-4 flex justify-start  w-full sm:w-[50%]">
            {" "}
            Product Specifications
          </div>
          {product && (
            <table className="w-full sm:w-[50%]">
              <tr className="bg-teal-300 text-white font-lg p-4">
                <td className="h-[40px] py-2">Fature</td>
                <td className="h-[40px] py-2">Specification</td>
              </tr>

              {product?.tableRows.map((row, index) => (
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } h-[40px]`}
                >
                  <td className="text-sm text-gray-500 p-2">{row.feature}</td>
                  <td className="text-sm text-gray-500 px-2">
                    {row.specifications}
                  </td>
                </tr>
              ))}
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default details;
