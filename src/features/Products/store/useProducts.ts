import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product } from "features/Products/types/product";
import { ProductService } from "../services/product-service";

type Store = {
  products: Product[];
  productDetailed: Product;
  productDetailedError: boolean;
  setProducts: () => void;
  setProductDetailed: (url_key: string) => void;
};

export const useProducts = create<Store>()(
  devtools((setState) => ({
    products: [],
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
    productDetailedError: false,
    setProductDetailed: async (url_key) => {
      const productDetailed = await ProductService.getProductByUrlKey(url_key);

      if (!productDetailed?.id) {
        setState({ productDetailedError: true });
      } else {
        setState({ productDetailed, productDetailedError: false });
      }
    },
    setProducts: async () => {
      const products = await ProductService.getAllProducts();
      setState({ products });
    },
  }))
);
