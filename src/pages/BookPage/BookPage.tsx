import { ReactElement, useContext, useLayoutEffect, useState } from "react";

import { Theme } from "@enums/Theme";
import { useAppSelect } from "@hooks/redux";
import { IBook } from "@interfaces/IBook";
import classNames from "classnames";
import { useParams } from "react-router";

import { ThemeContext } from "../../context/ThemeContext";
import BookDoesntExistPage from "../BookDoesntExistPage/BookDoesntExistsPage";
import style from "./bookpage.module.scss";

function BookPage(): ReactElement {
  const params = useParams<string>();
  const { theme } = useContext(ThemeContext);
  const books = useAppSelect((state) => state.books.books);
  const favBooks = useAppSelect((state) => state.favouriteBooks.books);
  const [book, setBook] = useState<IBook | undefined>(undefined);

  useLayoutEffect(() => {
    let book: IBook | undefined = books.find((item) => item.id === params.id);

    if (!book) {
      setBook(favBooks.find((item) => item.id === params.id));
    } else {
      setBook(book);
    }
  }, [favBooks]);

  if (book === undefined) {
    return <BookDoesntExistPage />;
  } else {
    return (
      <div className={style.container}>
        <div
          className={classNames(
            style.image_container,
            theme === Theme.Light
              ? style.light_image_container
              : style.dark_image_container,
          )}
        >
          <img className={style.image} src={book.smallimage} alt={book.title} />
        </div>
        <div className={style.details_container}>
          <div
            className={classNames(
              style.categories,
              theme === Theme.Light
                ? style.light_author_categ
                : style.dark_author_categ,
            )}
          >
            {book.categories ? (
              book.categories.join("\\")
            ) : (
              <p
                className={
                  theme === Theme.Light
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
              theme === Theme.Light ? style.light_title : style.dark_title,
            )}
          >
            {book.title}
          </div>
          <div
            className={classNames(
              style.authors,
              theme === Theme.Light
                ? style.light_author_categ
                : style.dark_author_categ,
            )}
          >
            {book.authors ? (
              book.authors.join(" ")
            ) : (
              <p
                className={
                  theme === Theme.Light
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
              theme === Theme.Light ? style.light_desc : style.dark_desc,
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
