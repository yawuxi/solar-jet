import { FC, useState } from "react";
import { headerMenu } from "../../data/header-menu";
import styles from "./index.module.scss";

export const MenuList: FC = () => {
  const [headerMenuState, setHeaderMenuState] = useState(headerMenu);

  const chooseClasses = (isActive: boolean) =>
    isActive ? `${styles.viewButton} ${styles.active}` : styles.viewButton;

  const handleClick = (id: number) => {
    setHeaderMenuState((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, isActive: !item.isActive }
          : { ...item, isActive: false }
      )
    );
  };

  return (
    <>
      {headerMenuState.map(({ image, isActive, id }) => (
        <button
          className={chooseClasses(isActive)}
          onClick={() => handleClick(id)}
          key={id}
        >
          <img src={image} alt="double view" />
        </button>
      ))}
    </>
  );
};
