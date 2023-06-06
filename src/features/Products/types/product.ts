export type ProductsResponse = {
  Id: string;
  Name: string;
  Price: number;
  url_key: string;
  description: string;
  image_path: string;
  sale: {
    type: string;
    data: number[];
  };
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  url_key: string;
  description: string;
  image_path: string;
  sale: number;
  created_at: string;
  updated_at: string;
};
