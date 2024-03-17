import { ReactElement, useContext, useState } from "react";
import { useParams } from "react-router";
import { useAppSelect } from "../../hooks/redux";
import { IBook } from "../../interfaces/IBook";
import style from "./bookpage.module.scss";
import BookDoesntExistPage from "../BookDoesntExistPage/BookDoesntExistsPage";
import { ThemeContext } from "../../Context/ThemeContext";
import classNames from "classnames";

function BookPage(): ReactElement {
  const params = useParams<string>();
  const { theme } = useContext(ThemeContext);
  const books = useAppSelect((state) => state.books);
  const [book, setBook] = useState<IBook | undefined>(
    books.books.find((item) => item.id === params.id)
  );

  if (book === undefined) {
    return <BookDoesntExistPage />;
  } else {
    return (
      <div className={style.container}>
        <div
          className={classNames(
            style.image_container,
            theme === "light"
              ? style.light_image_container
              : style.dark_image_container
          )}
        >
          <img className={style.image} src={book.bigimage} alt={book.title} />
        </div>
        <div className={style.details_container}>
          <div
            className={classNames(
              style.categories,
              theme === "light"
                ? style.light_author_categ
                : style.dark_author_categ
            )}
          >
            {book.categories ? (
              book.categories.join("\\")
            ) : (
              <p
                className={
                  theme === "light"
                    ? style.light_author_categ
                    : style.dark_author_categ
                }
              >
                The author is unknown
              </p>
            )}
          </div>
          <div
            className={classNames(
              style.title,
              theme === "light" ? style.light_title : style.dark_title
            )}
          >
            {book.title}
          </div>
          <div
            className={classNames(
              style.authors,
              theme === "light"
                ? style.light_author_categ
                : style.dark_author_categ
            )}
          >
            {book.authors ? (
              book.authors.join(" ")
            ) : (
              <p
                className={
                  theme === "light"
                    ? style.light_author_categ
                    : style.dark_author_categ
                }
              >
                There are no categories
              </p>
            )}
          </div>
          <div
            className={classNames(
              style.description,
              theme === "light" ? style.light_desc : style.dark_desc
            )}
          >
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
