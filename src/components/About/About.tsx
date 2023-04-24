import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <section>
      <div className="w-full h-fit p-4 flex justify-center items-start flex-wrap bg-blue-950">
        {/* photo */}
        <div className=" w-full sm:w-[50%] h-full">
          <Image
            alt="delivery black man carying a box"
            width={300}
            height={300}
            src={"/deliveryman.png"}
          />
        </div>

        {/* text */}
        <div className="w-full sm:w-[50%] h-full">
          <p className="text-white text-sm">
            We are one of the leading suppliers of medical equipment, who
            provide a broad range of high quality and competitively priced
            medical diagnostic and healthcare products. We constantly expand our
            product line with a devotion to helping improve the health and
            well-being of clients patients
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
