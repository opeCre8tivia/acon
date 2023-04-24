import React from "react";
import { NavBarLink } from "../NavBar/NavBar";

type Props = {
  item: NavBarLink;
};

const BottomTabItem = ({ item }: Props) => {
  let Icon = item.Icon;
  return (
    <div className="flex flex-col items-center justify-center">
      {/* icon */}
      <Icon size={30} />
      {/* name */}
      <div className="text-[10px] text-gray-500 text-center">{item.name}</div>
    </div>
  );
};

export default BottomTabItem;
