import React from "react";
import styles from "./Styles.module.css";

const LinkBox = ({
  children,
  className,
  ...restProps
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`${className ? className : ""} ${styles.linkBox}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default LinkBox;
