import Image from "next/image";
import React from "react";

import healthWorker from "../../../public/healthworker.png"
import promotor960 from "../../../public/promotor960.png"
import immunoassay from "../../../public/immunoassay.png"

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
              src={healthWorker.src}
              style={{ objectFit: "cover", width: "auto", height: "auto" }}
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
                src={promotor960.src}
                style={{
                  objectFit: "cover",
                  margin: "auto",
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
            {/* fluorescence */}
            <div className="w-full h-[40%] bg-teal-100 ml-1 overflow-hidden">
              <Image
                alt="Immunoassay electronic equipment"
                width={150}
                height={150}
                src={immunoassay.src}
                style={{ margin: "auto", width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
