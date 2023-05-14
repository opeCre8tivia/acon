import Head from "next/head";
import React, { useState, useEffect } from "react";
import { categories, products } from "../../utils/products.json";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Category } from "@/types/types.ds";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

type Props = {};

const Search = (props: Props) => {
  const [categoryList, setCategoryList] = useState<Category[] | null>(null);

  const pathname = useRouter().pathname;

  useEffect(() => {
    if (products) {
    }

    if (categories) {
      setCategoryList(categories);
    }
  }, [categories, products]);

  return (
    <div>
      {/* head */}
      <Head>
        <meta name="description" content="" />
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header>
        <nav>
          <NavBar />
        </nav>
        <div className="w-full h-[30vh] bg-teal-300 flex justify-center items-center">
          <div className="text-[20px] font-bold text-white ">
            OUR PRODUCT RANGE
          </div>
        </div>
      </header>
      {/* category section */}

      <section>
        <SectionTitle title="View by Category" />
        <div className="my-10 grid grid-cols-2 sm:grid-cols-5 gap-1">
          {categoryList &&
            categoryList.map((category, index) => {
              return (
                <div className="w-fit h-[200px] p-4 bg-white" key={index}>
                  <Image
                    alt="acon product category logo"
                    width={150}
                    height={150}
                    src={category.logo}
                  />
                </div>
              );
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
