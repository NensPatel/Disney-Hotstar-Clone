import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINAL", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex justify-between p-3">
      <div className="flex items-center gap-8">
        <img
          src="/Images/logo.png"
          alt="Disney"
          className="w-[50px] md:w-[120px] object-contain"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex gap-5">
          {menu.slice(0, 3).map((item) => (
            <HeaderItems key={item.name} name="" Icon={item.icon} />
          ))}
          <div
            className="md:hidden relative"
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItems name="" Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.slice(3).map((item) => (
                  <HeaderItems
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <img
        src="/Images/userAvatar.png"
        alt="User Avatar"
        className="w-[40px] md:w-[70px] object-cover cursor-pointer"
      />
    </div>
  );
}

export default Header;
