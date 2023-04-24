import React from "react";
import { NavBarLink } from "../NavBar/NavBar";

type Props = {
  item: NavBarLink;
};

const MenuItem = ({ item }: Props) => {
  return (
    <div className="ml-8 text-gray-100 text-[10px] font-500 hover:text-blue-900">
      {item.name}
    </div>
  );
};

export default MenuItem;
