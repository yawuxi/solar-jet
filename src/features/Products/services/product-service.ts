import { $api } from "api";
import { Product, ProductsResponse } from "features/Products/types/product";

const _transformProductsData = (products: ProductsResponse[]): Product[] => {
  return products.map(({ Id, Price, Name, sale, ...other }) => ({
    id: Id,
    price: Price,
    name: Name,
    sale: sale.data[0],
    ...other,
  }));
};

const _transformProductByIdData = (product: ProductsResponse[]): Product => {
  return {
    ...product[0],
    id: product[0].Id,
    name: product[0].Name,
    price: product[0].Price,
    sale: product[0].sale.data[0],
  };
};

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    const { data } = await $api.get<{ products: ProductsResponse[] }>(
      "/products"
    );

    return _transformProductsData(data.products);
  }

  static async getProductById(id: string): Promise<Product> {
    const { data } = await $api.get<{ product: ProductsResponse[] }>(
      `/products/${id}`
    );

    return _transformProductByIdData(data.product);
  }
}
