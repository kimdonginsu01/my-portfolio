"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const socials = [
  {
    icons: "/socials/facebook.svg",
    to: "https://facebook.com/hoang.tuyen2001",
  },
  {
    icons: "/socials/instagram.svg",
    to: "https://instagram.com/htuien.47",
  },
  {
    icons: "/socials/tik-tok.svg",
    to: "https://tiktok.com/",
  },
  {
    icons: "/socials/twitter.svg",
    to: "https://twitter.com/",
  },
];

export default function Home() {
  const typer = useRef(null);

  useEffect(() => {
    const typed = new Typed(typer.current, {
      strings: ["Programmer", "Designer", "Writer"],
      typeSpeed: 80,
      loop: true,
      showCursor: true,
      smartBackspace: true,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <aside className="ml-sidebar-with h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="min-w-[300px] min-h-[300px] relative rounded-full">
          <div
            className="absolute top-0 bottom-0 left-0 right-0 bg-no-repeat bg-center bg-cover bg-blend-multiply shadow-avatar rounded-avatar-init overflow-hidden animate-[morph_8s_ease-in-out_1s_infinite] grayscale-[0.7]"
            style={{ backgroundImage: "url('/assets/avatar.jpeg')" }}
          ></div>
        </div>
        <div className="ml-20">
          <h3 className="text-[48px] font-[800] uppercase mb-4">tuyen hoang</h3>
          <h4 className="inline-block leading-[1.2] text-[24px] font-[400] mb-4">
            <span ref={typer}></span>
          </h4>
          <p className="font-[500] max-w-[450px] mb-5 text-light-grey">
            Professional Programmer based in Thai Binh and eager to challenge
            himself with new projects and technologies.
          </p>
          <ul className="w-full float-left flex gap-4">
            {socials.map((item, index) => (
              <Link href={item.to} key={index} target="_blank">
                <Image src={item.icons} alt="#" width={17} height={17} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
