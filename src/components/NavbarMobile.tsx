"use client";

import { CrossCircledIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Logo from "../../public/static/images/logos/logo.webp";
import Link from "next/link";
import { useState } from "react";

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

function NavbarMobile() {
  const [isCollapseNavbar, setIsCollapseNavbar] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between lg:hidden">
        {" "}
        <Link href="/">
          <Image
            src={Logo}
            alt="PixelGo-Logo"
            height={150}
            width={150}
            className="w-fit lg:w-[250px] h-[80px] lg:h-[100px] object-contain py-[8px]"
          />
        </Link>
        {isCollapseNavbar ? (
          <CrossCircledIcon
            onClick={() => setIsCollapseNavbar(!isCollapseNavbar)}
            className="w-[36px] h-[36px] font-bold cursor-pointer"
          />
        ) : (
          <HamburgerMenuIcon
            onClick={() => setIsCollapseNavbar(!isCollapseNavbar)}
            className="w-[36px] h-[36px] font-bold cursor-pointer"
          />
        )}
      </div>
      <div
        className={`${
          isCollapseNavbar ? "min-h-fit mt-[14px]" : "min-h-0 h-0"
        } w-full bg-pixelgo-primary  transition-all`}
      >
        <div
          className={`${
            isCollapseNavbar ? "flex" : "hidden"
          } transition-all items-center gap-[28px] py-[8px] justify-center`}
        >
          {NavLinks.map((link) => (
            <Link key={link.label} href={`#${link.url}`}>
              <p className="text-[20px] font-semibold cursor-pointer hover:bg-pixelgo-brand transition-all px-[8px] py-[12px] rounded">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
