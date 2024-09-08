import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

function Navbar() {
  return (
    <div className="px-[20px] sm:px-0 sm:mx-auto container select-none min-h-fit bg-pixelgo-primary">
      <NavbarMobile />
      <NavbarDesktop />
    </div>
  );
}

export default Navbar;
