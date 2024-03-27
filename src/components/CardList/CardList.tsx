import { ReactElement } from "react";

import Card from "@components/Card/Card";
import { IBook } from "@interfaces/IBook";
import { Link } from "react-router-dom";

import style from "./cardlist.module.scss";

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
            description={item.description}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
