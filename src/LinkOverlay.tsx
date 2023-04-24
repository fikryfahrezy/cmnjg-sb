import type { ComponentProps, ForwardedRef } from "react";
import React, { forwardRef } from "react";
import { chakra } from "@chakra-ui/system";
import styles from "./LinkOverlay.module.css";

type LinkOverlayProps = ComponentProps<typeof chakra.a>;

const LinkOverlayComp = (
  { children, className, ...restProps }: LinkOverlayProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  return (
    <chakra.a
      {...restProps}
      ref={ref}
      className={`${className ? className : ""} ${styles.linkOverlay}`}
    >
      {children}
    </chakra.a>
  );
};

export default forwardRef(LinkOverlayComp);
