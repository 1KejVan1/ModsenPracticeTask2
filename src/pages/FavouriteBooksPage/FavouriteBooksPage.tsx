import { ReactElement } from "react";
import CardList from "../../components/CardList/CardList";
import style from "./page.module.scss";
import { useAppSelect } from "../../hooks/redux";

function FavouriteBooksPage(): ReactElement {
  const books = useAppSelect((state) => state.favouriteBooks);
  return (
    <div className={style.container}>
      {books.books.length === 0 ? (
        <h1>Favorite books not found</h1>
      ) : (
        <CardList books={books.books} end={books.quantity} />
      )}
    </div>
  );
}

export default FavouriteBooksPage;
