import Image from "next/image";
import React from "react";
import Logo from "../../public/static/images/logos/logo.webp";
import { Button } from "./ui/button";
import Link from "next/link";

const NavLinks = [
  {
    label: "Home",
    url: "top",
  },
  {
    label: "Services",
    url: "services",
  },
  {
    label: "About Us",
    url: "about-us",
  },
  {
    label: "Contact Us",
    url: "contact-us",
  },
  // {
  //   label: "Blogs",
  //   url: "blogs",
  // },
];

function NavbarDesktop() {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <Image
        src={Logo}
        alt="PixelGo-Logo"
        height={300}
        width={300}
        className="w-fit lg:h-[80px] object-contain pb-[8px]"
      />
      <div className="flex items-center gap-[28px]">
        {NavLinks.map((link) => (
          <Link key={link.label} href={`#${link.url}`}>
            <p className="text-[20px] font-semibold cursor-pointer hover:bg-pixelgo-brand transition-all px-[8px] py-[4px] rounded">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <Link href="#contact-us">
        <Button
          size="lg"
          className="bg-pixelgo-brand hover:bg-pixelgo-brand/80"
        >
          Contact Us
        </Button>
      </Link>
    </div>
  );
}

export default NavbarDesktop;
