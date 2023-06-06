import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "components/Layout";

const HomePage = lazy(() =>
  import("pages/HomePage").then((module) => ({ default: module.HomePage }))
);

const ErrorPage = lazy(() =>
  import("pages/ErrorPage").then((module) => ({ default: module.ErrorPage }))
);

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};
