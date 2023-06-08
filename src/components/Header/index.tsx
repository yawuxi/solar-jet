import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "features/Products/store/useProducts";
import { Button } from "components/Button";
import { ReactComponent as Expand } from "assets/expand.svg";
import { MenuList } from "./components/MenuList";
import { Cart } from "./components/Cart";
import styles from "./index.module.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isDetailedProduct, setIsDetailedProduct] = useState(false);
  const { productDetailedError, productDetailedLoading } = useProducts();

  const headerClass = isDetailedProduct
    ? `${styles.header} ${styles.detailedProduct}`
    : styles.header;

  useEffect(() => {
    if (
      !productDetailedLoading &&
      !productDetailedError &&
      searchParams.get("url_key")
    ) {
      setIsDetailedProduct(true);
    } else {
      setIsDetailedProduct(false);
    }
  }, [productDetailedError, productDetailedLoading, searchParams]);

  const handleBackToShopClick = () => {
    navigate("/");
  };

  return (
    <header className={headerClass}>
      {isDetailedProduct && (
        <Button className={styles.backButton} onClick={handleBackToShopClick}>
          <span>&#10229;</span>
          <p>BACK TO SHOP</p>
        </Button>
      )}
      {isDetailedProduct ? (
        <>
          <Button className={styles.expand}>
            <Expand />
          </Button>
          <Cart />
        </>
      ) : (
        <>
          <div className={styles.viewTypes}>
            <MenuList />
          </div>
          <div className={styles.right}>
            <button className={styles.filter}>FILTER</button>
            <Cart />
          </div>
        </>
      )}
    </header>
  );
};
