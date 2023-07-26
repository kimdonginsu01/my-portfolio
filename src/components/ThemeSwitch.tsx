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
      className="cursor-pointer fixed w-14 h-12 flex items-center justify-center dark:invert bg-icon-light-mode right-0 top-1/2 -translate-y-1/2 rounded-tl-3xl rounded-bl-3xl"
    >
      {renderThemeChanger()}
    </label>
  );
};

export default ThemeSwitch;
