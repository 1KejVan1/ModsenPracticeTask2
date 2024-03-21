import {
  ReactElement,
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
} from "react";
import CardList from "../../components/CardList/CardList";
import style from "./page.module.scss";
import { useAppDispatch, useAppSelect } from "../../hooks/redux";
import useFetching from "../../hooks/fetchBooks";
import { addBooks, changeLoadStatus } from "../../store/bookSlice";
import { setStartIndex } from "../../store/searchSlice";
import { getBooks } from "../../API/api";
import Loader from "../../components/Loader/Loader";
import classNames from "classnames";
import { ThemeContext } from "../../Context/ThemeContext";

function MainPage(): ReactElement {
  const books = useAppSelect((state) => state.books);
  const { theme } = useContext(ThemeContext);
  const search = useAppSelect((state) => state.search);
  const [endIndex, setEndIndex] = useState<number>(0);
  const dispatch = useAppDispatch();
  const [fetching, isLoaded, error] = useFetching(async () => {
    let data = await getBooks({
      searchText: search.searchText,
      sortingBy: search.sortingBy,
      category: search.category,
      startIndex: search.startIndex as number,
    });

    dispatch(addBooks(data));
  });

  useEffect(() => {
    dispatch(changeLoadStatus(isLoaded));
  }, [isLoaded]);

  useLayoutEffect(() => {
    if ((search.startIndex as number) + 30 > (books.quantity_items as number)) {
      setEndIndex(books.quantity_items as number);
    } else {
      setEndIndex((search.startIndex as number) + 30);
    }
  }, []);

  async function handleClick() {
    setEndIndex((prev) => {
      if (prev + 30 > (books.quantity_items as number)) {
        return books.quantity_items as number;
      } else {
        return prev + 30;
      }
    });
    dispatch(setStartIndex((search.startIndex as number) + 31));
    fetching();
  }

  if (endIndex === 30 && books.isLoaded == false) {
    return (
      <div
        className={classNames(
          style.container,
          theme === "light" ? style.light : style.dark
        )}
      >
        <Loader />
      </div>
    );
  } else {
    return (
      <div
        className={classNames(
          style.container,
          theme === "light" ? style.light : style.dark
        )}
      >
        {books.quantity_items && (
          <div className={style.quantity_container}>
            Found {books.quantity_items} results
          </div>
        )}
        <CardList end={endIndex} books={books.books} />
        {books.quantity_items &&
          endIndex !== (books.quantity_items as number) && (
            <div className={style.button_container}>
              <button
                className={classNames(
                  style.button,
                  theme === "light" ? style.button_light : style.button_dark
                )}
                onClick={handleClick}
              >
                Загрузить ещё
              </button>
            </div>
          )}
      </div>
    );
  }
}

export default MainPage;
