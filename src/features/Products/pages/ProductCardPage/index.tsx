import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "features/Products/store/useProducts";
import { Button } from "components/Button";
import { Loader } from "components/Loader";
import styles from "./index.module.scss";

export const ProductCardPage: FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [searchParams] = useSearchParams();
  const {
    productDetailed,
    productDetailedLoading,
    productDetailedError,
    setProductDetailed,
  } = useProducts();

  useEffect(() => {
    const url_key = searchParams.get("url_key");
    if (url_key) {
      setProductDetailed(url_key);
    } else {
      navigate("/404");
    }

    if (productDetailedError) {
      navigate("/404");
    }
  }, [productDetailedError, navigate, searchParams, setProductDetailed]);

  const { sale, image_path, name, description, price } = productDetailed;

  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prevState) => prevState - 1);
    }
  };

  const calculatedPrice = sale ? price / 2 : price;

  if (productDetailedLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={image_path} alt="product image" />
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>
          ${calculatedPrice}
          {Boolean(sale) && <sub className={styles.oldPirce}>${price}</sub>}
        </span>
        <div className={styles.buy}>
          <div className={styles.counter}>
            <div onClick={handleDecreaseCount}>-</div>
            <div>{count}</div>
            <div onClick={handleIncreaseCount}>+</div>
          </div>
          <Button>ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};
