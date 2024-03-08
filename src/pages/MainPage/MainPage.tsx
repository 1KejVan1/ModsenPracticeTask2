import { ReactElement, useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList/CardList";
import style from "./page.module.scss";
import { useAppDispatch, useAppSelect } from "../../hooks/redux";
import useFetching from "../../hooks/fetchBooks";
import { addBooks, changeLoadStatus } from "../../store/bookSlice";
import { setStartIndex } from "../../store/searchSlice";
import { getBooks } from "../../API/api";

function MainPage(): ReactElement {
  const books = useAppSelect((state) => state.books);
  const search = useAppSelect((state) => state.search);
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [fetching, isLoaded, error] = useFetching(async () => {
    let data = await getBooks({
      searchText: search.searchText,
      sortingBy: search.sortingBy,
      category: search.category,
      startIndex: (search.startIndex as number) + 30,
    });
    dispatch(addBooks(data));
  });

  useEffect(() => {
    if (loadMore) {
      fetching();
      setLoadMore(false);
    }
  }, [loadMore]);

  useEffect(() => {
    dispatch(changeLoadStatus(isLoaded));
  }, [isLoaded]);

  function handleClick() {
    setLoadMore(true);
  }

  const booksMemo = useMemo(() => {
    return [...books.books];
  }, [books.books]);

  return (
    <div className={style.container}>
      {books.isLoaded === false && books.isLoaded !== undefined ? (
        <div>Загрузка</div>
      ) : (
        <>
          {books.quantity_items && (
            <div className={style.quantity_container}>
              Found {books.quantity_items} results
            </div>
          )}
          <CardList
            books={booksMemo}
            isLoaded={books.isLoaded}
            quantity_items={books.quantity_items}
          />
          {books.quantity_items && (
            <div className={style.button_contaner}>
              <button className={style.button} onClick={handleClick}>
                Загрузить ещё
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MainPage;
