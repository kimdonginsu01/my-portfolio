"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import useSidebar from "@/app/contexts/menuContext";

interface IHeaderProps {
  menuActive: boolean;
}

const Header = () => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleActiveMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4 fixed w-full h-header-height bg-white left-0 top-0 z-[9] shadow-sm dark:bg-service-item xl:hidden">
        <Link href="/">
          <Image
            src="/assets/vietnam.png"
            alt="#"
            width={120}
            height={20}
            className="dark:invert w-[120px] h-[20px]"
            priority={true}
          />
        </Link>
        <div
          className="relative w-7 h-5 inline-block top-1"
          onClick={handleActiveMenu}
        >
          <div
            className={`w-6 h-0.5 bg-black absolute top-1/2 -translate-y-1/2 -mt-1 dark:bg-white transition duration-300
              before:w-6 before:h-0.5 before:bg-black before:absolute before:-top-2 dark:before:bg-white before:transition before:duration-300
              after:w-6 after:h-0.5 after:bg-black after:absolute after:top-2 dark:after:bg-white after:transition after:duration-300 ${
                isOpen &&
                "rotate-45 ease-activeMenu delay-[.22s] before:rotate-90 before:top-0 after:top-0 after:opacity-0"
              }`}
          ></div>
        </div>
      </div>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
