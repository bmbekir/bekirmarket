import styles from "./leftbox.module.scss";
interface LeftBoxProps {
  title?: string;
}

const LeftBox: React.FC<LeftBoxProps> = ({ title, children }) => {
  return (
    <div className={styles["left-box"]}>
      <div className={styles["left-box-title"]}>{title}</div>
      <div className={styles["left-box-content"]}>{children}</div>
    </div>
  );
};
export default LeftBox;
