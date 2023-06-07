import { FC } from "react";
import { ReactComponent as ShoppingBag } from "assets/shopbag.svg";
import styles from "./index.module.scss";

export const Cart: FC = () => {
  return (
    <button className={styles.cart}>
      <div>
        <ShoppingBag />
      </div>
    </button>
  );
};
