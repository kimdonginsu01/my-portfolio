"use client";

import useSidebar from "@/app/contexts/menuContext";
import Image from "next/image";
import Link from "next/link";
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
    icons: "/icons/mail.svg",
    title: "Contact",
    to: "/contact",
  },
];

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <aside
      className={`fixed w-sidebar-width-sm z-10 top-0 left-0 h-screen px-10 py-0 flex items-center border-r border-solid bg-sidebar-color border-sidebar-border transition-all ease-in-out duration-500 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }
                  xl:translate-x-0 xl:transition-none
                  2xl:w-sidebar-width
                  2xl:px-24
                dark:bg-black
                dark:border-sidebar-dark`}
    >
      <div className="w-full h-auto">
        <Link href="/">
          <Image
            src="/assets/vietnam.png"
            alt="#"
            width={135}
            height={24}
            className="dark:invert w-[135px] h-[24px]"
            priority={true}
            onClick={handleCloseMenu}
          />
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
                    className={`w-full h-10 font-[500] pb-3 flex items-center hover:tracking-[2px] transition-all dark:text-white ease-in-out duration-300 ${
                      isActive
                        ? "opacity-100 text-black tracking-[2px]"
                        : "opacity-70 text-light-grey tracking-wider"
                    }`}
                    onClick={handleCloseMenu}
                  >
                    <Image
                      src={item.icons}
                      alt={item.title}
                      width={15}
                      height={15}
                      className="mr-2 w-[15px] h-[15px] dark:invert"
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
