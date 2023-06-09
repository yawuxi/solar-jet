import { FC, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "features/Products/store/useProducts";
import { Button } from "components/Button";
import { Loader } from "components/Loader";
import { ImagePlaceholder } from "components/ImagePlaceholder";
import { Counter } from "./components/Counter";
import styles from "./index.module.scss";

export const ProductCardPage: FC = () => {
  const navigate = useNavigate();
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

  const calculatedPrice = sale ? price / 2 : price;

  if (productDetailedLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.page}>
      <aside className={styles.gallery}>
        <div className={styles.previewImages}>
          <div className={styles.preview}>
            {image_path ? (
              <img src={image_path} alt="product image preview" />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
        </div>
        <div className={styles.mainImage}>
          {image_path ? (
            <img src={image_path} alt="product image" />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
      </aside>
      <main className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>
          ${calculatedPrice}
          {Boolean(sale) && <sub className={styles.oldPirce}>${price}</sub>}
        </span>
        <div className={styles.buy}>
          <Counter />
          <Button>ADD TO CART</Button>
        </div>
      </main>
    </div>
  );
};
