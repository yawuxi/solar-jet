import { FC } from "react";
import { ReactComponent as ShoppingBag } from "assets/shopbag.svg";
import { MenuList } from "./components/MenuList";
import styles from "./index.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.viewTypes}>
        <MenuList />
      </div>
      <button className={styles.filter}>FILTER</button>
      <button className={styles.cart}>
        <div>
          <ShoppingBag />
        </div>
      </button>
    </header>
  );
};
