import styles from "./layout.module.scss";

const PageLeft: React.FC<any> = ({ children }) => {
  return <div className={styles["page-left"]}>{children}</div>;
};
export default PageLeft;
