import React from "react";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div className=" w-full h-20 flex justify-center items-center ">
      {/* teal line 1 */}
      <div className="w-[10%] h-1 mx-2 bg-teal-400 "></div>
      {/* title */}
      <h1 className="text-center text-gray-500 text-lg font-bold">{title}</h1>
      {/* teal line 2 */}
      <div className="w-[10%] h-1 mx-2 bg-teal-400 "></div>
    </div>
  );
};

export default SectionTitle;
