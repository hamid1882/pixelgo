import DriveLeads from "@/components/DriveLeads";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Success from "@/components/Success";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Explore />
      <DriveLeads />
      <Success />
    </div>
  );
}
