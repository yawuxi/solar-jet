import { FC, useEffect } from "react";
import { useProducts } from "features/Products/store/useProducts";
import { ProductItem } from "features/Products/components/ProductItem";
import styles from "./index.module.scss";

export const ProductsPage: FC = () => {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    setProducts();
  }, [setProducts]);

  return (
    <main className={styles.page}>
      {products.map(({ id, ...other }) => (
        <ProductItem {...other} key={id} />
      ))}
    </main>
  );
};
