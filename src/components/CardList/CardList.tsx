import { ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./cardlist.module.scss";
import Card from "../Card/Card";
import { useAppSelect } from "../../hooks/redux";

function CardList(): ReactElement {
  const books = useAppSelect((state) => state.books);

  return (
    <div className={style.container}>
      {books.map((item) => (
        <Link key={Date.now() * Math.random()} to={"/"}>
          <Card
            title={item.title}
            authors={item.authors}
            smallimage={item.smallimage}
            categories={item.categories}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
