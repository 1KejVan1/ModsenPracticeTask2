import { ReactElement, useContext } from "react";
import noimage from "../../assets/no-image.png";
import style from "./card.module.scss";
import { IBook } from "../../interfaces/IBook";
import { useAppSelect, useAppDispatch } from "../../hooks/redux";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import {
  addFavouriteBook,
  removeFavouriteBook,
} from "../../store/favouriteBooksSlice";
import { ThemeContext } from "../../Context/ThemeContext";
import classNames from "classnames";

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

  return (
    <div
      className={classNames(
        style.container,
        theme === "light" ? style.light : style.dark
      )}
    >
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
          theme === "light" ? style.light_title : style.dark
        )}
      >
        {props.title}
      </div>
      <div className={style.container_for_author_favourite}>
        <div className={style.author}>{props.authors && props.authors[0]}</div>
        {favouriteBooks.find((item) => item.id === props.id) === undefined ? (
          <MdFavoriteBorder fill="red" size={24} onClick={(e) => addBook(e)} />
        ) : (
          <MdFavorite fill="red" size={24} onClick={(e) => removeBook(e)} />
        )}
      </div>
    </div>
  );
}

export default Card;
