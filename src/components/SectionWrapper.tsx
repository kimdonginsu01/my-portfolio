import React from "react";

interface ISectionWrapper {
  mono?: boolean;
  children?: React.ReactNode;
}

const SectionWrapper = ({ mono, children }: ISectionWrapper) => {
  return (
    <div className={`py-24 px-10 ${mono && "bg-white dark:bg-black"}`}>
      <div className="mx-auto max-w-[1070px]">{children}</div>
    </div>
  );
};

export default SectionWrapper;
