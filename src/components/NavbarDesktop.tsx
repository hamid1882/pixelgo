import Image from "next/image";
import React from "react";
import Logo from "../../public/static/images/logos/logo.webp";
import { Button } from "./ui/button";

const NavLinks = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    label: "Blogs",
    url: "/blogs",
  },
  {
    label: "Services",
    url: "/services",
  },
];

function NavbarDesktop() {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <Image
        src={Logo}
        alt="PixelGo-Logo"
        height={300}
        width={300}
        className="w-fit lg:h-[80px] object-contain"
      />
      <div className="flex items-center gap-[28px]">
        {NavLinks.map((link) => (
          <p
            className="text-[20px] font-semibold cursor-pointer hover:bg-pixelgo-brand transition-all px-[8px] py-[4px] rounded"
            key={link.label}
          >
            {link.label}
          </p>
        ))}
      </div>
      <div>
        <Button
          size="lg"
          className="bg-pixelgo-brand hover:bg-pixelgo-brand/80"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default NavbarDesktop;
