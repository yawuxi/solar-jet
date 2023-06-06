import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";

const ProductsPage = lazy(() =>
  import("features/Products/pages/ProductsPage").then((module) => ({
    default: module.ProductsPage,
  }))
);

const ErrorPage = lazy(() =>
  import("pages/ErrorPage").then((module) => ({ default: module.ErrorPage }))
);

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};
