import { FC } from "react";
import { Product } from "features/Products/types/product";
import styles from "./index.module.scss";

type ToPick = "price" | "name" | "image_path" | "url_key" | "sale";
type Props = Pick<Product, ToPick>;

export const ProductItem: FC<Props> = ({ price, name, image_path, sale }) => {
  const calculatedPrice = sale ? price / 2 : price;

  return (
    <div className={styles.item}>
      {Boolean(sale) && <div className={styles.sale}>SALE 50%</div>}
      <div className={styles.productImage}>
        {!image_path ? (
          <img src={image_path} alt="product image" />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>${calculatedPrice}</p>
    </div>
  );
};
