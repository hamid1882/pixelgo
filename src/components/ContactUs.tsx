import React from "react";
import ContactUsForm from "./ContactUsForm";
import Link from "next/link";

const ContactData = [
  {
    title: "Our Location",
    label:
      "41,4th Cross Road,Rashad Nagar, Govindapura, Hbr Layout, Bengaluru 560045.",
    value:
      "41,4th Cross Road,Rashad Nagar, Govindapura, Hbr Layout, Bengaluru 560045.",
    link: "#contact-us",
  },
  {
    title: "Phone Number",
    label: "+91 786786760",
    value: "+91786786760",
    link: "tel:+91786786760",
  },
  {
    title: "Email Address",
    label: "contact@pixelgo.in",
    value: "contact@pixelgo.in",
    link: "mailto:contact@pixelgo.in",
  },
];

function ContactUs() {
  return (
    <div
      className="bg-black px-[20px] sm:px-0 py-[22px] lg:py-[32px]"
      id="contact-us"
    >
      <div className="container mx-auto">
        <h2 className="text-[23px] text-pixelgo-brand text-center">
          Connect With Us
        </h2>
        <div className="flex flex-col-reverse lg:flex-row my-[22px] gap-[26px] items-center justify-center">
          <div className="text-white space-y-[24px] lg:space-y-[28px] my-[36px] lg:my-[42px] w-full">
            {ContactData.map((details) => (
              <div
                className="space-y-[12px] lg:space-y-[18px]"
                key={details.value}
              >
                <h3 className="text-[16px] lg:text-[32px] font-semibold leading-[20px] lg:leading-[40px]">
                  {details.title}
                </h3>
                <Link passHref href={details.link}>
                  <p className="text-[14px] lg:text-[20px] leading-[20px] lg:leading-[28px] cursor-pointer hover:text-pixelgo-brand w-fit">
                    {details.label}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
