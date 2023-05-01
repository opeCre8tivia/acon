import Image from "next/image";
import MenuItem from "../MenuItem/MenuItem";
import { FaHome } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import {
  MdForwardToInbox,
  MdProductionQuantityLimits,
  MdPermIdentity,
} from "react-icons/md";
import BottomTabItem from "../BottomTabItem/BottomTabItem";

export interface NavBarLink {
  name: string;
  href: string;
  Icon: IconType;
}

const NavBar = () => {
  const navBarLinks: NavBarLink[] = [
    {
      name: "Home",
      href: "/",
      Icon: FaHome,
    },
    {
      name: "About",
      href: "#",
      Icon: MdPermIdentity,
    },
    {
      name: "Products",
      href: "#",
      Icon: MdProductionQuantityLimits,
    },
    {
      name: "Contact",
      href: "#",
      Icon: MdForwardToInbox,
    },
  ];

  return (
    <nav>
      <div className="w-full h-[80px] flex justify-between items-center p-4 bg-teal-500">
        {/* logo */}
        <div className="w-[100px] h-[80px] flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            width={200}
            height={200}
            alt="Opel Emanuel's logo"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* md screen menu */}
        <div className="hidden w-fit md:flex justify-between items-center">
          {navBarLinks &&
            navBarLinks.map((item, index: number) => {
              return <MenuItem key={index} item={item} />;
            })}
        </div>

        {/* mobile screen menu */}

        <div className="w-full min-h-[60px] bg-gray-200 flex justify-between items-center px-10 md:hidden fixed bottom-0 left-0 right-0 z-20">
          {navBarLinks &&
            navBarLinks.map((item, index) => {
              return <BottomTabItem item={item} key={index} />;
            })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
