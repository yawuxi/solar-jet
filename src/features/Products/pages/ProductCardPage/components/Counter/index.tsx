import { FC, useState } from "react";
import styles from "./index.module.scss";

export const Counter: FC = () => {
  const [count, setCount] = useState(1);

  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <div onClick={handleDecreaseCount}>-</div>
      <div>{count}</div>
      <div onClick={handleIncreaseCount}>+</div>
    </div>
  );
};
