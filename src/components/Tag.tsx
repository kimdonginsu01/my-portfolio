import React from "react";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-block bg-tag-light-grey dark:bg-tag-dark-grey uppercase py-1 px-3 font-[600] text-xs text-text-color dark:text-text-color-dark mb-4 leading-7">
      {children}
    </span>
  );
};

export default Tag;
