import { ReactElement } from "react";
import { Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";

function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
