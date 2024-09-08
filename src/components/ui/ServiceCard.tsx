import { Button } from "./button";

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: any;
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
      <Button
        size="lg"
        className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 max-w-full"
      >
        Enquire Now
      </Button>
    </div>
  );
}

export default ServiceCard;
