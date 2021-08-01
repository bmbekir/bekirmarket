import styles from "./cartmenu.module.scss";
import basketImg from "./basket.svg";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Money from "../../plugins/money";
export const getAmount = (state: RootState) => {
  return state.cart.items.reduce((sum, item) => sum + item.getPrice(), 0);
};

export default () => {
  const amount = useAppSelector(getAmount);
  return (
    <div className={styles["cart-menu"]}>
      <div className={styles["card-menu-content"]}>
        <img src={basketImg} />
        <span className={styles["cart-menu-price"]}>
          <Money price={amount} />
        </span>
      </div>
    </div>
  );
};
