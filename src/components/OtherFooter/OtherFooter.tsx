import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const OtherFooter = (props: Props) => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-100">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link href="/">
          <div className="flex flex-col justify-center items-center text-2xl font-semibold text-gray-900">
            <Image
              alt="acon logo"
              src="/logo.svg"
              style={{ width: "80px", height: "80px", objectFit: "contain" }}
            />
            Acon Diagnostics
          </div>
        </Link>
        <p className="my-6 text-gray-500">
          Leading supplier if high quality and competitively priced medical
          diagnostic and healthcare products.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          <Link href="/#about">
            <li>
              <a>
                <div className="mx-5 hover:underline">About</div>
              </a>
            </li>
          </Link>
          <Link href="/products/search">
            <li>
              <a>
                <div className="mx-5 hover:underline">Products</div>
              </a>
            </li>
          </Link>
          <Link href="/#categories">
            <li>
              <a>
                <div className="mx-5 hover:underline">Product Line</div>
              </a>
            </li>
          </Link>
          <Link href="/#contact">
            <li>
              <a className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
          </Link>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Acon diagnostics™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default OtherFooter;
