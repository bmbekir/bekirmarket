import styles from "./layout.module.scss";

const PageRight: React.FC<any> = ({ children }) => {
  return <div className={styles["page-right"]}>{children}</div>;
};
export default PageRight;
