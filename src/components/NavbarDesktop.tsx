import Image from "next/image";
import React from "react";
import Logo from "../../public/static/images/logos/logo.webp";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavLinks } from "./NavbarMobile";

function NavbarDesktop() {
  return (
    <div className="hidden lg:flex items-center justify-between">
      <Link href="/">
        <Image
          src={Logo}
          alt="PixelGo-Logo"
          height={300}
          width={300}
          className="w-fit lg:h-[70px] object-contain py-[14px]"
        />
      </Link>
      <div className="flex items-center gap-[28px]">
        {NavLinks.map((link) => (
          <Link key={link.label} href={link.url}>
            <p className="text-[20px] font-semibold cursor-pointer hover:bg-pixelgo-brand hover:text-pixelgo-text transition-all px-[8px] py-[4px] rounded">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <Link href="#contact-us">
        <Button
          size="lg"
          className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 text-pixelgo-text"
        >
          Contact Us
        </Button>
      </Link>
    </div>
  );
}

export default NavbarDesktop;
