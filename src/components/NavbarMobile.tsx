import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Logo from "../../public/static/images/logos/logo.webp";

function NavbarMobile() {
  return (
    <div className="flex items-center justify-between lg:hidden">
      {" "}
      <Image
        src={Logo}
        alt="PixelGo-Logo"
        height={150}
        width={150}
        className="w-fit lg:w-[250px] h-[50px] lg:h-[100px] object-contain pb-[8px]"
      />
      <HamburgerMenuIcon className="w-[30px] h-[20px] font-bold cursor-pointer" />
    </div>
  );
}

export default NavbarMobile;
