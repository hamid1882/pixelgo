import { Button } from "./ui/button";

function DriveLeads() {
  return (
    <div className="container mx-auto my-[32px] lg:my-[38px] px-[20px] sm:px-0 flex flex-col-reverse lg:flex-row items-center gap-[28px] justify-center">
      <div className="w-full">
        <div className="space-y-[8px]">
          <h2 className="text-[23px] font-medium leading-[25px] lg:leading-[36px]">
            Drive Leads, Build Growth, Create Impact
          </h2>
          <p className="leading-[22px]">
            Discover powerful digital marketing solutions that drive quality
            leads, fuel business growth, and create lasting impact. Our expert
            team delivers SEO, web development, and content strategies to
            elevate your brand online
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-start mt-[46px] lg:mt-[40px]">
          <Button
            size="lg"
            className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 h-[46px]"
          >
            Contact Us
          </Button>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <Image
          src={DriveLeadsImg}
          alt="Drive Leads, Build Growth, Create Impact"
          width={500}
          height={500}
        />
      </div> */}
    </div>
  );
}

export default DriveLeads;
