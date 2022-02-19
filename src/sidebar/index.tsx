import React from "react";
import styles from "./index.module.css";
import hamburger from "./hamburger.svg";

type LinkCallbackProps = {
  className: string;
  activeClassName: string;
};

type LinkListProps = {
  key: React.Key | null | undefined;
  Link: (props: LinkCallbackProps) => JSX.Element;
};

type SidebarProps = {
  linkList: LinkListProps[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Sidebar = ({ linkList = [], ...props }: SidebarProps) => {
  return (
    <aside {...props} className={styles.aside}>
      <img
        src={hamburger}
        width={37}
        height={24}
        alt="fsdfsd"
        className={styles.hamburgerIcon}
      />
      <ul>
        {linkList.map(({ Link, key }) => {
          return (
            <li key={key}>
              <Link
                className={styles.linkList}
                activeClassName={styles.activeLinkList}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
