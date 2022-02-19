import React from "react";

type HamburgerProps = {
  fill: string;
};

const Hamburger = ({ fill }: HamburgerProps) => {
  return (
    <svg
      width="37"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="37" height="5.92" rx="2.96" fill={fill} />
      <rect y="8.88" width="37" height="5.92" rx="2.96" fill={fill} />
      <rect y="17.76" width="37" height="5.92" rx="2.96" fill={fill} />
    </svg>
  );
};

export default Hamburger;
