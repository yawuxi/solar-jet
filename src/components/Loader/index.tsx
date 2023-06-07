import { FC } from "react";
import loading from "assets/loading.gif";
import styles from "./index.module.scss";

export const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <img src={loading} alt="loader" />
    </div>
  );
};
