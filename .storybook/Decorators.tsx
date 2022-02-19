import styles from "./index.module.css";

export default function Decorators({ children }) {
  return <div className={styles.root}>{children}</div>;
}
