import { FC, HTMLAttributes, PropsWithChildren } from "react";
import styles from "./index.module.scss";

type Props = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, className, ...props }) => {
  const classes = className ? `${styles.button} ${className}` : styles.button;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
