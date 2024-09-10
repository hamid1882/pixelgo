import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import DriveLeads from "@/components/DriveLeads";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Success from "@/components/Success";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Explore />
      <DriveLeads />
      <Success />
      <WhyChooseUs />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
