"use client";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <div className="py-[16px] lg:py-[20px] sm:mx-auto container select-none min-h-fit bg-pixelgo-primary">
      <div className="fixed top-0 left-0 w-full bg-pixelgo-primary z-50 shadow">
        <div className="container mx-auto px-[20px] lg:px-0">
          <NavbarMobile />
          <NavbarDesktop />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
