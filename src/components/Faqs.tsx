import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import SeoFaqSchema from "./scripts/SeoFaqSchema";

const FaqsData = [
  {
    id: 1,
    question: "What services does PixelGo offer?",
    answer:
      "At PixelGo, we offer a wide range of digital marketing services, including SEO, lead generation, content creation, social media marketing, Google Ads, and email marketing. We also provide UI/UX design and drag-and-drop website design to help businesses build impactful and user-friendly websites.",
  },
  {
    id: 2,
    question: "How can SEO help my business?",
    answer:
      "SEO (Search Engine Optimization) helps your business rank higher on search engines like Google, driving organic traffic to your website. With our expert SEO strategies, we ensure your business gains visibility, increases traffic, and attracts more potential customers.",
  },
  {
    id: 3,
    question: "What is drag-and-drop website design?",
    answer:
      "Our drag-and-drop website design service allows businesses to create visually stunning and fully functional websites without needing any coding knowledge. It's a fast and easy way to build a professional online presence that’s tailored to your brand.",
  },
  {
    id: 4,
    question: "How does lead generation work?",
    answer:
      "We use targeted strategies like SEO, social media marketing, and Google Ads to attract qualified leads. By identifying your audience’s needs and interests, we drive potential customers to your business, helping you grow and increase revenue.",
  },
  {
    id: 5,
    question: "Can you manage social media for my business?",
    answer:
      "Yes! Our social media marketing services are designed to boost your brand's presence on platforms like Facebook, Instagram, and LinkedIn. We create engaging content, run ad campaigns, and manage your social profiles to maximize engagement and drive traffic.",
  },
  {
    id: 6,
    question: "What is UI/UX design, and why is it important?",
    answer:
      "UI/UX design (User Interface/User Experience) focuses on creating websites and apps that are easy to navigate and visually appealing. Good UI/UX design enhances the user experience, leading to higher engagement, customer satisfaction, and better conversion rates.",
  },
  {
    id: 7,
    question: "How long does it take to see results with digital marketing?",
    answer:
      "The timeline for seeing results depends on the strategy used. SEO typically takes a few months for significant organic growth, while paid campaigns like Google Ads can show results almost immediately. We work with you to set clear expectations and deliver measurable outcomes.",
  },
  {
    id: 8,
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely! We specialize in helping Indian startups and small businesses grow their online presence. Whether you’re just starting or looking to scale, we create affordable, results-driven strategies tailored to your needs.",
  },
  {
    id: 9,
    question: "What makes your digital marketing agency different?",
    answer:
      "At PixelGo, we combine local expertise with innovative strategies. As a startup ourselves, we understand the challenges Indian businesses face. Our team of skilled professionals is dedicated to delivering measurable results, helping you achieve growth and long-term success.",
  },
  {
    id: 10,
    question: "How can I get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our website or call us, and we’ll set up a consultation to understand your business needs and recommend the best digital marketing solutions to drive your success.",
  },
];

function Faqs() {
  return (
    <>
      <SeoFaqSchema data={FaqsData} />
      <div className="container mx-auto px-[20px] lg:px-0 py-[28px] lg:py-[48px]">
        <h2 className="text-[23px] text-pixelgo-primary-dark text-center">
          Frequently Asked{" "}
          <span className="text-pixelgo-primary-dark">Questions</span>
        </h2>
        <Accordion
          className="my-[20px] lg:my-[32px] lg:max-w-[60%] mx-auto"
          type="multiple"
        >
          {FaqsData.map((faq) => (
            <AccordionItem
              key={faq.question}
              className="border-b border-gray-900/10"
              value={faq.question}
            >
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default Faqs;
