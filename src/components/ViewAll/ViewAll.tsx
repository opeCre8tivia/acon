import React from "react";
import Link from "next/link";

type Props = {};

const ViewAll = (props: Props) => {
  return (
    <Link href="/products/search">
      <div className="w-full h-[60px] flex justify-center items-center">
        <div className=" text-black text-[14px] w-[150px] h-[50px] flex justify-center items-center border-teal-300 border-2 hover:bg-teal-300 hover:text-white ">
          View All
        </div>
      </div>
    </Link>
  );
};

export default ViewAll;
