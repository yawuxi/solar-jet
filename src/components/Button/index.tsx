import { FC, HTMLProps, PropsWithChildren } from "react";
import styles from "./index.module.scss";

type Props = PropsWithChildren & HTMLProps<HTMLButtonElement>;

export const Button: FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
