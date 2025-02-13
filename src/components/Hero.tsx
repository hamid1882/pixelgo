import React from "react";
import HeroImg from "../../public/static/images/hero.webp";
import Image from "next/image";
import HeroIdeaSvg from "./svg/HeroIdeaSvg";
import HeroArrowSvg from "./svg/HeroArrowSvg";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div
      id="top"
      className="container mx-auto px-[20px] sm:px-0 flex flex-col lg:flex-row-reverse gap-[26px] lg:mt-[16px] py-[62px] lg:py-[65px]"
    >
      <div className="flex justify-center items-center relative mx-auto w-full">
        <div className="h-fit w-fit relative">
          <Image
            src={HeroImg}
            alt="Hero"
            width={800}
            height={800}
            className="w-[250px] lg:w-[600px] h-[250px] lg:h-[450px] object-contain"
          />
          <div className="absolute top-0 -left-[30px] lg:top-[50px] lg:left-0">
            <HeroIdeaSvg />
          </div>
          <div className="absolute -right-[26px] top-[50px] lg:top-[100px] lg:-right-[40px]">
            <HeroArrowSvg />
          </div>
        </div>
      </div>
      <div className="w-full text-center lg:text-left space-y-[20px] lg:space-y-[28px]">
        <h1 className="text-[23px] lg:text-[60px] font-bold leading-[29px] lg:leading-[80px] text-balance">
          Get Results with India’s #1 Google Ads Agency for
          Effective Advertising
        </h1>
        <p className="text-[12px] lg:text-[22px] font-[500] leading-[17px] lg:leading-[28px]">
          Maximize ROI with targeted Google Ads services. We create optimized,
          relevant campaigns to boost visibility, drive quality traffic, and
          increase conversions.
        </p>
        <div>
          <Link href="#contact-us">
            <Button
              size="lg"
              className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 text-pixelgo-text"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
