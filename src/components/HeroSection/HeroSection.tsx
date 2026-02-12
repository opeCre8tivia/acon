import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="w-full h-fit table">
        <div className="w-full  table-row">
          {/* left side */}
          <div className="w-[50%]  bg-teal-200 table-cell overflow-clip ">
            <Image
              alt="health worker wearing  sky blue gloves"
              width={300}
              height={300}
              src={"/healthworker.png"}
              style={{ objectFit: "cover"}}
            />
          </div>
          {/* right side */}
          <div className="w-[50%] h-full table-cell">
            {/* molecular */}
            <div className="w-full h-[60%] bg-cyan-100 ml-1 border-b-4 border-white ">
              <Image
                alt="molecular diagnostics machine"
                width={150}
                height={150}
                src={"/promotor960.png"}
                style={{
                  objectFit: "cover",
                  margin: "auto",
                }}
              />
            </div>
            {/* fluorescence */}
            <div className="w-full h-[40%] bg-teal-100 ml-1 overflow-hidden">
              <Image
                alt="Immunoassay electronic equipment"
                width={150}
                height={150}
                src={"/immunoassay.png"}
                style={{ margin: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
