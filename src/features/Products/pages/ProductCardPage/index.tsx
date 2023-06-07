import { FC } from "react";
import styles from "./index.module.scss";

export const ProductCardPage: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.gallery}></div>
      <div className={styles.info}></div>
    </div>
  );
};
