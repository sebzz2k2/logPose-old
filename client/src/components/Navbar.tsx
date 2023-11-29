import Logo from "./Logo";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  const userName = "sebin";
  return (
    <nav className="w-screen flex flex-wrap items-center justify-between mx-auto px-8 py-4">
      <Logo />
      <div className="flex flex-row gap-2 items-center">
        <div className="font-normal text-white text-lg">
          Hello, {userName} !
        </div>
        <div className="border-2 rounded-3xl p-2">
          <FaUserLarge className="text-white text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
