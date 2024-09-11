import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import PixelGoLogoDark from "../../public/static/images/logos/pixelgo-logo-dark-bg.webp";
import FacebookIconSvg from "./svg/FacebookIconSvg";

const SocialMediaLinks = [
  {
    icon: (
      <InstagramLogoIcon className="text-pixelgo-brand w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]" />
    ),
    title: "Instagram",
    link: "https://www.instagram.com/invites/contact/?igsh=1fxr37w6efjfy&utm_content=vmkvcuv",
  },
  {
    icon: (
      <FacebookIconSvg className="text-pixelgo-brand w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]" />
    ),
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61565740584919&mibextid=ZbWKwL",
  },
  // {
  //   icon: (
  //     <LinkedInLogoIcon className="text-pixelgo-brand w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]" />
  //   ),
  //   title: "LinkedIn",
  //   link: "",
  // },
  // {
  //   icon: (
  //     <TwitterLogoIcon className="text-pixelgo-brand w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]" />
  //   ),
  //   title: "Twitter",
  //   link: "",
  // },
];

const FooterLinks = [
  {
    title: "Support",
    link: "/support",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms and Conditions",
    link: "/terms-and-conditions",
  },
];

function Footer() {
  return (
    <div className="bg-black py-[22px] lg:py-[32px]">
      <div className="container mx-auto px-[20px] lg:px-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[32px] my-[12px]">
        <div>
          <Image
            src={PixelGoLogoDark}
            alt="Pixelgo-logo"
            height={500}
            width={500}
            className="w-[150px] lg:w-[350px] h-[100px] lg:h-[150px] object-contain pb-[8px]"
          />
          <div className="flex justify-center items-center gap-[20px] sm:gap-[28px] lg:gap-[34px]  my-[20px]">
            {SocialMediaLinks.map((link) => (
              <Link
                key={link.title}
                passHref
                href={link.link}
                aria-label={link.title}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[12px]">
          {FooterLinks.map((link) => (
            <Link key={link.title} href={link.link}>
              <p className="text-white/80 hover:text-white text-[18px] lg:text-[22px]">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <p className="text-white text-center mt-[32px] text-[18px] lg:text-[22px]">
        © 2024 PixelGo, All right reserved
      </p>
    </div>
  );
}

export default Footer;
