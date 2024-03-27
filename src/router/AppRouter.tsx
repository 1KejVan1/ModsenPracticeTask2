import { ReactElement } from "react";

import { Route, Routes } from "react-router";

import Layout from "../components/Layout/Layout";
import BookPage from "../pages/BookPage/BookPage";
import FavouriteBooksPage from "../pages/FavouriteBooksPage/FavouriteBooksPage";
import MainPage from "../pages/MainPage/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import { bookWithId, favourites, main } from "./Paths";

function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={bookWithId} element={<BookPage />} />
        <Route path={favourites} element={<FavouriteBooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
