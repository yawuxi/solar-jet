import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "features/Products/types/product";
import { ImagePlaceholder } from "components/ImagePlaceholder";
import styles from "./index.module.scss";

type ToPick = "price" | "name" | "image_path" | "url_key" | "sale";
type Props = Pick<Product, ToPick>;

export const ProductItem: FC<Props> = ({
  price,
  name,
  image_path,
  sale,
  url_key,
}) => {
  const navigate = useNavigate();
  const calculatedPrice = sale ? price / 2 : price;

  const handleClickOnItem = () => {
    navigate(`/product?url_key=${url_key}`);
  };

  return (
    <article className={styles.item} onClick={handleClickOnItem}>
      {Boolean(sale) && <div className={styles.sale}>SALE 50%</div>}
      <div className={styles.productImage}>
        {image_path ? (
          <img src={image_path} alt="product image" />
        ) : (
          <ImagePlaceholder />
        )}
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>${calculatedPrice}</p>
    </article>
  );
};
