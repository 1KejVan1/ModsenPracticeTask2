import { ReactElement, useContext } from "react";
import CardList from "@components/CardList/CardList";
import style from "./page.module.scss";
import { useAppSelect } from "@hooks/redux";
import { ThemeContext } from "@Context/ThemeContext";

function FavouriteBooksPage(): ReactElement {
  const books = useAppSelect((state) => state.favouriteBooks);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      {books.books.length === 0 ? (
        <h1 className={style[theme]}>Favorite books not found</h1>
      ) : (
        <>
          <h1 className={style[theme]}>Your favourites books</h1>
          <CardList books={books.books} end={books.quantity} />
        </>
      )}
    </div>
  );
}

export default FavouriteBooksPage;
