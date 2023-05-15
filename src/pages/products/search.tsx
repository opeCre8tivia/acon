import Head from "next/head";
import React, { useState, useEffect } from "react";
import { categories, products } from "../../utils/products.json";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Category, Product } from "@/types/types.ds";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard/ProductCard";

type Props = {};

const Search = (props: Props) => {
  const [categoryList, setCategoryList] = useState<Category[] | null>(null);
  const [productList, setProductList] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const pathname = useRouter().pathname;

  useEffect(() => {
    if (products) {
      setProductList(products);
    }

    if (categories) {
      setCategoryList(categories);
    }
  }, [categories, products]);

  /**
   * filter items of a paticular category when its selected
   */

  useEffect(() => {
    if (selectedCategory) {
      let _newProductList = products.filter(
        (product) => product.category === selectedCategory
      );
      _newProductList && setProductList(_newProductList);
    }
  }, [selectedCategory]);

  /**
   * search names of products by searchText value
   */

  useEffect(() => {
    if (searchText.length > 0) {
      let filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      filteredProducts && setSearchResults(filteredProducts);
    }

    if (searchText.length === 0) {
      setSearchResults([]);
    }
  }, [searchText]);

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

      <section>
        <div className="w-full h-[100px] flex justify-center items-center gap-2">
          <div className="">
            <form>
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </form>

            {/* search results */}
            {searchResults.length > 0 && (
              <div className="w-[100vw] h-full p-2  overflow-y-scroll bg-[rgba(0,0,0,0.5)] fixed left-0 top-[45vh] z-5 flex justify-center ">
                <div className="w-full h-fit sm:w-[50%] bg-gray-100">
                  {searchResults.map((product, index) => (
                    <div
                      key={index}
                      className="w-full h-[40px] bg-white flex items-center my-2 rounded  "
                      onClick={() => {
                        setSelectedCategory(product.category);
                        setSearchText("");
                      }}
                    >
                      <div className="w-[40px] h-[40px] flex justify-center items-center overflow-hidden mx-4">
                        <Image
                          alt="acon product"
                          src={product.image}
                          width={40}
                          height={40}
                          style={{ objectFit: "contain" }}
                        />
                      </div>

                      <div className=" whitespace-nowrap">{product.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* select input */}

          <div className="w-[150px] h-[50px]">
            <select
              onChange={(val) =>
                setSelectedCategory(parseInt(val.target.value))
              }
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-[50px]"
            >
              <option selected>Choose a category</option>
              {categoryList &&
                categoryList.map((category, index) => {
                  return (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
      </section>
      {/* category section */}

      <section>
        {/* product list */}

        <div id="" className="w-full h-fit sm:grid grid-cols-4 gap-2">
          {productList &&
            productList.map((product, index: number) => {
              return product && <ProductCard item={product} key={index} />;
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Search;
