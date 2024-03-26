import classNames from "classnames";
import { ReactElement, useContext, useEffect } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ThemeContext } from "../../Context/ThemeContext";
import noimage from "../../assets/no-image.png";
import { useAppDispatch, useAppSelect } from "@hooks/redux";
import { IBook } from "@interfaces/IBook";
import {
  addFavouriteBook,
  removeFavouriteBook,
} from "../../store/favouriteBooksSlice";
import style from "./card.module.scss";
import { Theme } from "../../enums/Theme";
import { setFavBooks } from "../../scripts/getAndSetFavBooks";

function Card(props: IBook): ReactElement {
  const favouriteBooks = useAppSelect((state) => state.favouriteBooks.books);
  const dispatch = useAppDispatch();
  const { theme } = useContext(ThemeContext);

  function addBook(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addFavouriteBook(props));
  }

  function removeBook(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFavouriteBook(props.id));
  }

  useEffect(() => {
    setFavBooks(favouriteBooks);
  }, [favouriteBooks]);

  return (
    <div className={classNames(style.container, style[theme])}>
      <div className={style.image_container}>
        <img
          src={props.smallimage ? props.smallimage : noimage}
          alt={props.title}
        />
      </div>
      <div className={style.category}>
        {props.categories && props.categories[0]}
      </div>
      <div
        className={classNames(
          style.title,
          theme === Theme.Light ? style.light_title : style[theme]
        )}
      >
        {props.title}
      </div>
      <div className={style.container_for_author_favourite}>
        <div className={style.author}>{props.authors && props.authors[0]}</div>
        {favouriteBooks.find((item) => item.id === props.id) === undefined ? (
          <MdFavoriteBorder fill="red" size={24} onClick={addBook} />
        ) : (
          <MdFavorite fill="red" size={24} onClick={removeBook} />
        )}
      </div>
    </div>
  );
}

export default Card;
