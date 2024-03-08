import { ReactElement } from "react";
import noimage from "../../assets/no-image.png";
import style from "./card.module.scss";
import { IBook } from "../../interfaces/IBook";

function Card(props: IBook): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.image_container}>
        <img
          src={props.smallimage ? props.smallimage : noimage}
          alt={props.title}
        />
      </div>
      <div className={style.category}>{props.categories}</div>
      <div className={style.title}>{props.title}</div>
      <div className={style.author}>{props.authors}</div>
    </div>
  );
}

export default Card;
