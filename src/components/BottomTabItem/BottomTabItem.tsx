import React from "react";
import { NavBarLink } from "../NavBar/NavBar";
import Link from "next/link";

type Props = {
  item: NavBarLink;
};

const BottomTabItem = ({ item }: Props) => {
  let Icon = item.Icon;
  return (
    <>
      <Link href={item.href}>
        <div className="flex flex-col items-center justify-center">
          {/* icon */}
          <Icon size={30} />
          {/* name */}
          <div className="text-[10px] text-gray-500 text-center">
            {item.name}
          </div>
        </div>
      </Link>
    </>
  );
};

export default BottomTabItem;
