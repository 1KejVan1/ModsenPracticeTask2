import { ReactElement } from "react";
import { Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import BookPage from "../pages/BookPage/BookPage";

function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="book/:id" element={<BookPage />}></Route>
        <Route path="*" element={<div>Такой страницы нет</div>} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
