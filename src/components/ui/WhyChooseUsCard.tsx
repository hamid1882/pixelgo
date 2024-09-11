import { ReactNode } from "react";

function WhyChooseUsCard({
  details,
  icon,
}: {
  details: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-white rounded-[10px] min-h-[60px] lg:h-[120px] flex w-full items-center gap-[12px] lg:gap-[28px] px-[26px]">
      <div className="bg-pixelgo-brand min-w-[40px] lg:w-[100px] h-[40px] lg:h-[100px] rounded-full flex justify-center items-center">
        {icon}
      </div>
      <p className="text-[14px] lg:text-[24px] font-semibold leading-[18px] lg:leading-[33px]">
        {details}
      </p>
    </div>
  );
}

export default WhyChooseUsCard;
