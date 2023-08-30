"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Image src="/lightMode.svg" alt="lightMode" width={22} height={22} />
      );
    } else {
      return (
        <Image src="/darkMode.svg" alt="darkMode" width={22} height={22} />
      );
    }
  };

  return (
    <label
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="cursor-pointer items-center justify-center dark:invert bg-icon-light-mode select-none flex
                fixed w-10 h-10 top-4 right-14 z-[9] rounded-full
                xl:w-14 xl:h-12 xl:top-1/2 xl:-translate-y-1/2 xl:right-0 xl:rounded-tl-3xl xl:rounded-bl-3xl xl:rounded-tr-none xl:rounded-br-none"
    >
      {renderThemeChanger()}
    </label>
  );
};

export default ThemeSwitch;
