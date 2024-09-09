import React from "react";
import { Button } from "./ui/button";

function Success() {
  return (
    <div className="container mx-auto px-[20px] lg:px-0 text-center my-[48px] lg:my-[68px] space-y-[38px] lg:space-y-[52px]">
      <div className="w-fit mx-auto px-[20px] lg:px-0 relative">
        <div className="absolute top-0 left-0 bg-pixelgo-brand min-h-[30px] lg:min-h-[120px] min-w-[80px] lg:min-w-[220px] -z-10"></div>
        <h2 className="text-[23px] lg:text-[90px] font-bold leading-[27px] lg:leading-[110px] z-10">
          Ready for your digital{" "}
          <span className="text-pixelgo-brand">success</span>?
        </h2>{" "}
      </div>
      <Button
        size="lg"
        className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 h-[46px] text-black"
      >
        Get Started
      </Button>
    </div>
  );
}

export default Success;
