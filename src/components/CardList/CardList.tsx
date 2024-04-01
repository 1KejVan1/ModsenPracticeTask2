import { ReactElement } from "react";

import Card from "@components/CardList/Card/Card";
import { IBook } from "@interfaces/IBook";
import { Link } from "react-router-dom";

import style from "./cardlist.module.scss";

interface Props {
  books: IBook[];
}

function CardList({ books = [] }: Props): ReactElement {
  return (
    <div className={style.container}>
      {books.map((item) => (
        <Link key={item.id} to={`/book/${item.id}`}>
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
