import HamburgerMenuButton from "../../plugins/hamburgerMenuButton";
import styles from "./navbar.module.scss";
import logoImg from "./Logo.svg";
import CartMenu from "../cartmenu";
export default () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar-content"]}>
        <div className={styles["left"]}>
          <HamburgerMenuButton />
        </div>
        <div className={styles["logo"]}>
          <img src={logoImg} />
        </div>
        <div className={styles["right"]}>
          <CartMenu />
        </div>
      </div>
    </div>
  );
};
