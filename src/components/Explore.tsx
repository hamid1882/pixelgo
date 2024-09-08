import React from "react";
import ExploreImg from "../../public/static/images/explore.webp";
import Image from "next/image";
import { Button } from "./ui/button";

function Explore() {
  return (
    <div className="container mx-auto px-[20px] lg:px-0 py-[20px] lg:py-[36px]">
      <div className="flex items-center w-full">
        <div className="w-full">
          <h2 className="text-[23px] font-medium">
            Targeted Lead Generation Strategies
          </h2>
          <p>
            Capture and convert high-quality leads for your business growth.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            src={ExploreImg}
            alt="Targeted Lead Generation Strategies"
            width={500}
            height={500}
            className="w-full h-[200px] lg:h-[300px] object-contain"
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-[46px] lg:mt-[56px]">
        <Button
          variant="outline"
          size="lg"
          className="bg-transparent border-pixelgo-brand hover:bg-pixelgo-brand rounded-full lg:w-[200px] lg:h-[50px]"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Explore;
