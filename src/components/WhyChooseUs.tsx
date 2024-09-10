import React from "react";
import WhyChooseUsCard from "./ui/WhyChooseUsCard";
import {
  DoubleArrowUpIcon,
  LockOpen1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Star } from "lucide-react";

const WhyChooseUsData = [
  {
    icon: (
      <LockOpen1Icon className="text-black w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" />
    ),
    details: "Solutions Tailored Specifically to Your Business Needs",
  },
  {
    icon: (
      <Star className="text-black w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" />
    ),
    details: "Creative Excellence Elevates Every project",
  },
  {
    icon: (
      <PersonIcon className="text-black w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" />
    ),
    details: "Client Satisfaction Is Our Main Focus",
  },
  {
    icon: (
      <DoubleArrowUpIcon className="text-black w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]" />
    ),
    details: "Elevate Your Brand, One Pixel at a Time",
  },
];

function WhyChooseUs() {
  return (
    <div className="my-[48px] lg:my-[68px] bg-black py-[28px] lg:py-[42px] px-[20px] lg:px-0">
      <div className="container mx-auto px-[20px] lg:px-0">
        <h1 className="text-[23px] text-pixelgo-brand text-center">
          Why Choose Us?
        </h1>
        <div className="mt-[38px] lg:mt-[46px] space-y-[26px] lg:space-y-[38px]">
          {WhyChooseUsData.map((whyData) => (
            <WhyChooseUsCard
              key={whyData.details}
              details={whyData.details}
              icon={whyData.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
