import { ReactElement } from "react";
import { Link } from "react-router-dom";
import style from "./cardlist.module.scss";
import Card from "../Card/Card";
import { useAppSelect } from "../../hooks/redux";

interface Props {
  end: number;
}

function CardList({ end = 30 }: Props): ReactElement {
  const books = useAppSelect((state) => state.books);

  return (
    <div className={style.container}>
      {books.books.slice(0, end + 1).map((item) => (
        <Link key={Date.now() * Math.random()} to={`book/${item.id}`}>
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
