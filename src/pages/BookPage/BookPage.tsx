import { ReactElement, useState } from "react";
import { useParams } from "react-router";
import { useAppSelect } from "../../hooks/redux";
import { IBook } from "../../interfaces/IBook";
import style from "./bookpage.module.scss";
import BookDoesntExistPage from "../BookDoesntExistPage/BookDoesntExistsPage";

function BookPage(): ReactElement {
  const params = useParams<string>();
  const books = useAppSelect((state) => state.books);
  const [book, setBook] = useState<IBook | undefined>(
    books.books.find((item) => item.id === params.id)
  );

  if (book === undefined) {
    return <BookDoesntExistPage />;
  } else {
    return (
      <div className={style.container}>
        <div className={style.image_container}>
          <img className={style.image} src={book.bigimage} alt={book.title} />
        </div>
        <div className={style.details_container}>
          <div className={style.categories}>
            {book.categories ? (
              book.categories.join("\\")
            ) : (
              <p>The author is unknown</p>
            )}
          </div>
          <div className={style.title}>{book.title}</div>
          <div className={style.authors}>
            {book.authors ? (
              book.authors.join(" ")
            ) : (
              <p>There are no categories</p>
            )}
          </div>
          <div className={style.description}>
            {book.description ? (
              book.description
            ) : (
              <p>There is no description</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default BookPage;
