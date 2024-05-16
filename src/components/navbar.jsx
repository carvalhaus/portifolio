import Logo from "./logo";
import Menu from "./menu";

function Navbar() {
  return (
    <nav className="flex w-full justify-between py-4 max-md:justify-center">
      <Logo />
      <Menu />
    </nav>
  );
}

export default Navbar;
