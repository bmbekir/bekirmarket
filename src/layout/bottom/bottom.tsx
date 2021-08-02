import styles from "./bottom.module.scss";
export default () => {
  return (
    <div className={styles["bottom"]}>
      <div className={styles["bottom-content"]}>
        <ul>
          <li>
            <a href="#">©2019 Market</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
