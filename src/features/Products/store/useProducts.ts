import { create } from "zustand";
import { Product } from "features/Products/types/product";
import { ProductService } from "../services/product-service";

type Store = {
  products: Product[];
  setProducts: () => void;
};

export const useProducts = create<Store>()((setState) => ({
  products: [],
  setProducts: async () => {
    const products = await ProductService.getAllProducts();
    setState({ products });
  },
}));
