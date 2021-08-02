import styles from "./layout.module.scss";

const PageCenter: React.FC<any> = ({ children }) => {
  return <div className={styles["page-center"]}>{children}</div>;
};
export default PageCenter;
