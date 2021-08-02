import { Product } from "../../apiModels/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add, decrase, getAmount, getProducts, incrase } from "./cartSlice";
import styles from "./cart.module.scss";
import classNames from "classnames";
import minusImg from "./minus.svg";
import plusImg from "./plus.svg";
import MoneyFormat from "../../plugins/money";
import { Fragment } from "react";
export function Cart() {
  const dispatch = useAppDispatch();
  const amount = useAppSelector(getAmount);
  const products = useAppSelector(getProducts);
  return (
    <div className={styles["cart-menu"]}>
      {products.length > 0 ? (
        <Fragment>
          {" "}
          <ul className={styles["cart-items"]}>
            {products.map((item, index) => {
              return (
                <li className={styles["cart-item"]}>
                  <div className={styles["cart-item-left"]}>
                    <div className={styles["cart-item-title"]}>
                      {item.product.name}
                    </div>
                    <div className={styles["cart-item-price"]}>
                      <MoneyFormat price={item.getPrice()} />
                    </div>
                  </div>
                  <div className={styles["cart-item-right"]}>
                    <a
                      href="#"
                      className={classNames(
                        styles["cart-item-button"],
                        styles["cart-item-button-minus"]
                      )}
                      onClick={(ev) => {
                        ev.preventDefault();
                        dispatch(decrase(item.product));
                      }}
                    >
                      <img src={minusImg} />
                    </a>
                    <span className={styles["cart-item-count"]}>
                      {item.count}
                    </span>
                    <a
                      href="#"
                      className={classNames(
                        styles["cart-item-button"],
                        styles["cart-item-button-plus"]
                      )}
                      onClick={(ev) => {
                        ev.preventDefault();
                        dispatch(incrase(item.product));
                      }}
                    >
                      <img src={plusImg} />
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles["cart-menu-bottom"]}>
            <span className={styles["cart-menu-total"]}>
              <MoneyFormat price={amount} />
            </span>
          </div>
        </Fragment>
      ) : (
        <div className={styles["empty-cart"]}>Cart is empty</div>
      )}
    </div>
  );
}
