import { ReactElement, useEffect, useState } from "react";
import style from "./header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Select from "../Select/Select";
import { useAppDispatch } from "../../hooks/redux";
import useFetching from "../../hooks/fetchBooks";
import { getBooks } from "../../API/api";
import { resetBooks } from "../../store/bookSlice";

function Header(): ReactElement {
  const [categories] = useState([
    { title: "all", value: "all" },
    { title: "art", value: "art" },
    { title: "biography", value: "biography" },
    { title: "computers", value: "computers" },
    { title: "history", value: "history" },
    { title: "medical", value: "medical" },
    { title: "poetry", value: "poetry" },
  ]);
  const [sort] = useState([
    { title: "relevance", value: "relevance" },
    { title: "newest", value: "newest" },
  ]);
  const [selectedSort, setSelectedSort] = useState<string>("relevance");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchText, setSearchText] = useState<string>("");
  const [fetchData, setFetchData] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { fetching, isLoaded } = useFetching(async () => {
    let data = await getBooks({
      searchText: searchText,
      sortingBy: selectedSort,
      category: selectedCategory,
    });

    dispatch(resetBooks(data));
  });

  function handleSelectCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCategory(e.target.value);
  }

  function handleSelectSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedSort(e.target.value);
  }

  function handleInputText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    if (fetchData == true) {
      fetching();
      setFetchData(false);
    }
  }, [fetchData]);

  return (
    <header className={style.container}>
      <h1 className={style.title}>Search for books</h1>
      <div className={style.search}>
        <SearchBar
          showIcon={true}
          text={searchText}
          onchange={handleInputText}
          setFetchData={setFetchData}
        />
      </div>
      <div className={style.select_container}>
        <Select
          title="Categories"
          options={categories}
          onchange={handleSelectCategory}
          selectedValue={selectedCategory}
        />
        <Select
          title="Sorting by"
          options={sort}
          onchange={handleSelectSort}
          selectedValue={selectedSort}
        />
      </div>
    </header>
  );
}

export default Header;
