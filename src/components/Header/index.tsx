import { FC, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as ShoppingBag } from "assets/shopbag.svg";
import { useProducts } from "features/Products/store/useProducts";
import { Button } from "components/Button";
import { ReactComponent as Expand } from "assets/expand.svg";
import { MenuList } from "./components/MenuList";
import styles from "./index.module.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isDetailedProduct, setIsDetailedProduct] = useState(false);
  const { productDetailedError, productDetailedLoading } = useProducts();

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
    navigate("/home");
  };

  return (
    <header className={styles.header}>
      {isDetailedProduct && (
        <Button className={styles.backButton} onClick={handleBackToShopClick}>
          <span>&#10229;</span>
          <p>BACK TO SHOP</p>
        </Button>
      )}
      {!isDetailedProduct ? (
        <>
          <div className={styles.viewTypes}>
            <MenuList />
          </div>
          <button className={styles.filter}>FILTER</button>
        </>
      ) : (
        <Button className={styles.expand}>
          <Expand />
        </Button>
      )}
      <button className={styles.cart}>
        <div>
          <ShoppingBag />
        </div>
      </button>
    </header>
  );
};
