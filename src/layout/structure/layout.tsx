import styles from "./layout.module.scss";

const Layout: React.FC<any> = ({ children }) => {
  return <div className={styles["page-layout"]}>{children}</div>;
};
export default Layout;
