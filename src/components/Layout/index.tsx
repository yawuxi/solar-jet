import { FC, PropsWithChildren } from "react";
import { Header } from "components/Header";
import styles from "./index.module.scss";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};
