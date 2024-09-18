import { ReactNode } from "react";
import { Button } from "./button";
import Link from "next/link";

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="w-full min-h-[260px] lg:min-h-[400px] bg-white flex flex-col items-center p-[16px] px-[8px] lg:p-[28px] rounded-[10px] justify-between">
      <div className="flex flex-col items-center gap-[10px] lg:gap-[16px]">
        {icon}
        <h3 className="text-[15px] lg:text-[36px] font-bold">{title}</h3>
        <p className="text-[10px] lg:text-[18px] font-medium text-center lg:leading-[28px]">
          {description}
        </p>
      </div>
      <div>
        <Link href="#contact-us">
          <Button
            size="lg"
            className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 max-w-full text-pixelgo-text"
          >
            Enquire Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
