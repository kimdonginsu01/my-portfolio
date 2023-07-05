"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const routes = [
  {
    icons: "/icons/avatar.svg",
    title: "About",
    to: "/about",
  },
  {
    icons: "/icons/setting.svg",
    title: "Service",
    to: "/service",
  },
  {
    icons: "/icons/briefcase.svg",
    title: "Portfolio",
    to: "/portfolio",
  },
  {
    icons: "/icons/paper.svg",
    title: "News",
    to: "/news",
  },
  {
    icons: "/icons/mail.svg",
    title: "Contact",
    to: "/contact",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-sidebar-with h-screen px-24 py-0 bg-sidebar-color flex items-center">
      <div className="w-full h-auto">
        <Link href="/">
          <Image src="/assets/vietnam.png" alt="#" width={135} height={20} />
        </Link>
        <div className="px-0 py-10">
          <ul>
            <li>
              {routes.map((item, index) => {
                const isActive = pathname.startsWith(item.to);

                return (
                  <Link
                    href={item.to}
                    key={index}
                    className={`w-full h-10 font-[500] pb-3 flex items-center hover:tracking-[2px] transition-all ease-in-out duration-300 ${
                      isActive
                        ? "opacity-100 tracking-[2px]"
                        : "opacity-70 text-light-grey tracking-wider"
                    }`}
                  >
                    <Image
                      src={item.icons}
                      alt={item.title}
                      width={15}
                      height={15}
                      className="mr-2 w-[15px] h-[15px]"
                    />
                    <span className="text-[15px]">{item.title}</span>
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;