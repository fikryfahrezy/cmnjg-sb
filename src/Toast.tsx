import type { UseToastReturn } from "./useToast";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import UniversalPortal from "./UniversalPortal";
import Alert from "./Alert";
import IconButton from "./IconButton";

import styles from "./Toast.module.css";

const Toast = ({ isOpen, toasts }: UseToastReturn["props"]) => {
  return isOpen ? (
    <UniversalPortal selector="#modal">
      <div className={styles.alertContainer}>
        {toasts.map(({ id, status, render, onCloseToast }) => {
          return (
            <Alert
              key={id}
              withIcon={true}
              status={status}
              className={styles.alert}
            >
              <div className={styles.alertBody}>
                {typeof render === "function" ? render() : <></>}
              </div>
              <IconButton
                className={styles.closeButton}
                onClick={() => onCloseToast()}
              >
                <RiCloseLine />
              </IconButton>
            </Alert>
          );
        })}
      </div>
    </UniversalPortal>
  ) : (
    <></>
  );
};

export default Toast;
