import React from "react";
import Tag from "./Tag";

export interface IHeadingProsp {
  tagName: string;
  heading: string;
}

const Heading = ({ tagName, heading }: IHeadingProsp) => {
  return (
    <div className="mb-16">
      <Tag>{tagName}</Tag>
      <h3 className="font-[800] text-3xl capitalize text-black dark:text-white">
        {heading}
      </h3>
    </div>
  );
};

export default Heading;
