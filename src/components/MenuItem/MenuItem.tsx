import React from "react";
import { NavBarLink } from "../NavBar/NavBar";
import Link from "next/link";

type Props = {
  item: NavBarLink;
};

const MenuItem = ({ item }: Props) => {
  return (
    <Link href={item.href}>
      <div className="ml-8 text-gray-100 text-[10px] font-500 hover:text-blue-900">
        {item.name}
      </div>
    </Link>
  );
};

export default MenuItem;
