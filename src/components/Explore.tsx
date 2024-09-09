import React from "react";
import ExploreImg from "../../public/static/images/explore.webp";
import Image from "next/image";
import { Button } from "./ui/button";

function Explore() {
  return (
    <div className="container mx-auto px-[20px] lg:px-0 py-[20px] lg:py-[36px]">
      <div className="flex items-center w-full">
        <div className="w-full flex justify-center items-center">
          <Image
            src={ExploreImg}
            alt="Targeted Lead Generation Strategies"
            width={500}
            height={500}
            className="w-full h-[160px] lg:h-[250px] object-contain"
          />
        </div>
        <div className="w-full text-left lg:text-center space-y-[8px]">
          <h2 className="text-[23px] font-medium leading-[25px] lg:leading-[36px]">
            Targeted Lead Generation Strategies
          </h2>
          <p className="leading-[22px]">
            Capture and convert high-quality leads for your business growth.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[46px] lg:mt-[40px]">
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent border-pixelgo-brand hover:bg-pixelgo-brand rounded-full lg:w-[240px] lg:h-[50px]"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Explore;
