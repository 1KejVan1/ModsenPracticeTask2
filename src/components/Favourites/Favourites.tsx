import { ReactElement } from "react";
import { MdFavorite } from "react-icons/md";
import style from "./favourites.module.scss";
import { Link } from "react-router-dom";

function Favourites(): ReactElement {
  return (
    <Link to={"/favourites"} className={style.container}>
      <MdFavorite fill="red" className={style.icon} />
      <span className={style.title}>Favoutires</span>
    </Link>
  );
}

export default Favourites;
