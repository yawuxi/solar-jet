import { FC, useEffect } from "react";
import { useProducts } from "features/Products/store/useProducts";
import { ProductItem } from "features/Products/components/ProductItem";
import { Loader } from "components/Loader";
import styles from "./index.module.scss";

export const ProductsPage: FC = () => {
  const { products, productsLoading, setProducts } = useProducts();

  useEffect(() => {
    setProducts();
  }, [setProducts]);

  if (productsLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.page}>
      {products.map(({ id, ...rest }) => (
        <ProductItem {...rest} key={id} />
      ))}
    </main>
  );
};
