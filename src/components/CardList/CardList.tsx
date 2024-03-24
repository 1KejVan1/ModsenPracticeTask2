import { ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./cardlist.module.scss";
import Card from "../Card/Card";
import { IBook } from "../../interfaces/IBook";

interface Props {
  end: number;
  books: IBook[];
}

function CardList({ end = 30, books = [] }: Props): ReactElement {
  return (
    <div className={style.container}>
      {books.slice(0, end + 1).map((item, index) => (
        <Link key={Date.now() * Math.random() * index} to={`/book/${item.id}`}>
          <Card
            title={item.title}
            authors={item.authors}
            smallimage={item.smallimage}
            categories={item.categories}
            id={item.id}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
