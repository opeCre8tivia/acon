import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <div
        id="about"
        className="w-full h-fit  flex justify-center items-start flex-wrap bg-blue-950"
      >
        {/* photo */}
        <div className=" w-full flex justify-center items-end  border-b-white border-b-2 sm:border-none sm:w-[50%] ">
          <Image
            alt="delivery black man carying a box"
            width={300}
            height={300}
            src={"/deliveryman.svg"}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* text */}
        <div className="w-full bg-white sm:bg-transparent sm:w-[50%] h-full p-4 ">
          <p className="text-gray-500 text-[14px] sm:text-[30px] font-thin text-justify sm:text-gray-100">
            We are one of the leading suppliers of medical equipment, who
            provide a broad range of high quality and competitively priced
            medical diagnostic and healthcare products. We constantly expand our
            product line with a devotion to helping improve the health and
            well-being of patients
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
