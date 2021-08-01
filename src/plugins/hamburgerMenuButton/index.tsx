import classNames from "classnames";
import { useState } from "react";
import styles from "./hamburger.module.scss";
export default () => {
  const [opened, setOpened] = useState(false);
  return (
    <div
      onClick={() => setOpened(!opened)}
      className={classNames(
        styles["hamburger-menu"],
        opened ? styles["opened"] : undefined
      )}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
