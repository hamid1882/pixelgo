import React from "react";
import ServiceCard from "./ui/ServiceCard";
import ServiceActivitySvg from "./svg/ServiceActivitySvg";
import ServiceWebSvg from "./svg/ServiceWebSvg";
import ServiceLeadsSvg from "./svg/ServiceLeadsSvg";
import ServiceContentSvg from "./svg/ServiceContentSvg";
import ServiceCampaignSvg from "./svg/ServiceCampaignSvg";
import ServiceAnalyticsSvg from "./svg/ServiceAnalyticsSvg";

const AllServices = [
  {
    icon: <ServiceActivitySvg />,
    title: "SEO",
    description:
      "Optimize your website to rank higher in search engines and drive organic traffic with tailored SEO solutions.",
  },
  {
    icon: <ServiceWebSvg />,
    title: "Web",
    description:
      "Build a high-performance, mobile-friendly website that enhances user experience and conversion rates.",
  },
  {
    icon: <ServiceLeadsSvg />,
    title: "Leads",
    description:
      "Generate quality leads with strategic campaigns designed to attract and convert potential customers.",
  },
  {
    icon: <ServiceContentSvg />,
    title: "Content",
    description:
      "Create compelling and SEO-friendly content that engages your audience and boosts your online visibility.",
  },
  {
    icon: <ServiceCampaignSvg />,
    title: "Campaigns",
    description:
      "Execute data-driven digital marketing campaigns that maximize your reach and impact across channels.",
  },
  {
    icon: <ServiceAnalyticsSvg />,
    title: "Analytics",
    description:
      "Analyze performance metrics to refine strategies and improve results with actionable data insights.",
  },
];

function Services() {
  return (
    <div id="services" className="bg-black py-[20px]">
      <div className="px-[20px] lg:px-0 container mx-auto">
        <div className="text-center space-y-[8px]">
          <p className="text-pixelgo-primary text-[14px] font-bold tracking-[6px]">
            SERVICES
          </p>
          <h2 className="text-pixelgo-text text-[23px] lg:text-[52px] font-bold leading-[25px] lg:leading-[54px]">
            Our Vison & Our Goal
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-[30px] lg:my-[38px]">
          {AllServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
