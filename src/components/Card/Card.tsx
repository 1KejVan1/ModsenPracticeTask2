import { ReactElement, useContext, useEffect } from "react";

import noimage from "@assets/no-image.png";
import { Theme } from "@enums/Theme";
import { useAppDispatch, useAppSelect } from "@hooks/redux";
import { IBook } from "@interfaces/IBook";
import { setFavBooks } from "@scripts/getAndSetFavBooks";
import {
  addFavouriteBook,
  removeFavouriteBook,
} from "@store/favouriteBooksSlice";
import classNames from "classnames";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

// import { ThemeContext } from "../../context/ThemeContext";
import style from "./card.module.scss";

function Card({
  id,
  description,
  categories,
  authors,
  smallimage,
  title,
}: IBook): ReactElement {
  const favouriteBooks = useAppSelect((state) => state.favouriteBooks.books);
  const dispatch = useAppDispatch();
  // const { theme } = useContext(ThemeContext);
  const theme = Theme.Light;

  function addBook(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addFavouriteBook({
        authors: authors,
        categories: categories,
        smallimage: smallimage,
        title: title,
        id: id,
        description: description,
      }),
    );
  }

  function removeBook(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFavouriteBook(id));
  }

  useEffect(() => {
    setFavBooks(favouriteBooks);
  }, [favouriteBooks]);

  return (
    <div className={classNames(style.container, style[theme])}>
      <div className={style.image_container}>
        <img src={smallimage ? smallimage : noimage} alt={title} />
      </div>
      <div className={style.category}>{categories && categories[0]}</div>
      <div
        className={classNames(
          style.title,
          theme === Theme.Light ? style.light_title : style[theme],
        )}
      >
        {title}
      </div>
      <div className={style.container_for_author_favourite}>
        <div className={style.author}>{authors && authors[0]}</div>
        {favouriteBooks.find((item) => item.id === id) === undefined ? (
          <MdFavoriteBorder fill="red" size={24} onClick={addBook} />
        ) : (
          <MdFavorite fill="red" size={24} onClick={removeBook} />
        )}
      </div>
    </div>
  );
}

export default Card;
