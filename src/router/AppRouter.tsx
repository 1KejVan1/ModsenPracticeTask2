import { ReactElement } from "react";
import { Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import BookPage from "../pages/BookPage/BookPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FavouriteBooksPage from "../pages/FavouriteBooksPage/FavouriteBooksPage";
function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="book/:id" element={<BookPage />} />
        <Route path="favourites" element={<FavouriteBooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
