import { ReactElement } from "react";

import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

import style from "./favourites.module.scss";

function Favourites(): ReactElement {
  return (
    <Link to={"/favourites"} className={style.container}>
      <MdFavorite fill="red" className={style.icon} />
      <span className={style.title}>Favoutires</span>
    </Link>
  );
}

export default Favourites;
