import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ProductService } from "features/Products/services/product-service";
import { Product } from "features/Products/types/product";

type Store = {
  products: Product[];
  productsError: boolean;
  productsLoading: boolean;
  productDetailed: Product;
  productDetailedError: boolean;
  productDetailedLoading: boolean;
  setProducts: () => void;
  setProductDetailed: (url_key: string) => void;
};

export const useProducts = create<Store>()(
  devtools((setState) => ({
    products: [],
    productsError: false,
    productsLoading: false,
    productDetailed: {
      id: "",
      name: "",
      price: 0,
      sale: 0,
      description: "",
      created_at: "",
      image_path: "",
      updated_at: "",
      url_key: "",
    },
    productDetailedLoading: false,
    productDetailedError: false,
    setProductDetailed: async (url_key) => {
      setState({ productDetailedLoading: true });
      const productDetailed = await ProductService.getProductByUrlKey(url_key);

      if (!productDetailed?.id) {
        setState({ productDetailedError: true, productDetailedLoading: false });
      } else {
        setState({
          productDetailed,
          productDetailedError: false,
          productDetailedLoading: false,
        });
      }
    },
    setProducts: async () => {
      setState({ productsLoading: true });
      const products = await ProductService.getAllProducts();
      if (products.length > 0) {
        setState({ products, productsError: false, productsLoading: false });
      } else {
        setState({ productsError: true, productsLoading: false });
      }
    },
  }))
);
