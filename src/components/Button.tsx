import Link from "next/link";
import React from "react";

export interface IButtonProps {
  to?: string;
  children: React.ReactNode;
  download?: boolean;
}

const Button = ({ to, children, download = false }: IButtonProps) => {
  return (
    <div>
      {to ? (
        <Link
          href={to}
          download={download}
          className="text-white dark:text-black bg-black dark:bg-white block w-fit px-[40px] py-[18px] group"
        >
          <span className="group group-hover:tracking-widest transition-all ease-in-out duration-300">
            {children}
          </span>
        </Link>
      ) : (
        <button className="text-white dark:text-black bg-black dark:bg-white block w-fit px-[40px] py-[18px] group">
          <span className="group group-hover:tracking-widest transition-all ease-in-out duration-300">
            {children}
          </span>
        </button>
      )}
    </div>
  );
};

export default Button;
