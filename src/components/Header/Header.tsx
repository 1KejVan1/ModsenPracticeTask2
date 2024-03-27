import { ReactElement, useEffect, useState } from "react";

import { getBooks } from "@API/api";
import Favourites from "@components/Favourites/Favourites";
import SearchBar from "@components/SearchBar/SearchBar";
import Select from "@components/Select/Select";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";
import useFetching from "@hooks/fetchBooks";
import { useAppDispatch, useAppSelect } from "@hooks/redux";
import { changeLoadStatus, resetBooks } from "@store/bookSlice";
import { setCategory, setSort, setText } from "@store/searchSlice";
import { setStartIndex } from "@store/searchSlice";
import { useNavigate } from "react-router";

import style from "./header.module.scss";

function Header(): ReactElement {
  const search = useAppSelect((state) => state.search);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
  const [fetchData, setFetchData] = useState<boolean>(false);

  const [fetching, isLoaded, error] = useFetching(async () => {
    let data = await getBooks({
      searchText: search.searchText,
      sortingBy: search.sortingBy,
      category: search.category,
    });
    dispatch(setStartIndex((search.startIndex as number) + 30));
    dispatch(resetBooks({ ...data, isLoaded: isLoaded }));
    if (
      window.location.href.indexOf("book") !== -1 ||
      window.location.href.indexOf("favourites") !== -1
    ) {
      navigate("/");
    }
  });

  function handleSelectCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setCategory(e.target.value));
  }

  function handleSelectSort(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setSort(e.target.value));
  }

  function handleInputText(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setText(e.target.value));
  }

  useEffect(() => {
    if (fetchData == true && search.searchText.trim() !== "") {
      fetching();
      setFetchData(false);
    } else {
      if (fetchData === true) {
        alert("The search bar should not be empty");
        setFetchData(false);
      }
    }
  }, [fetchData]);

  useEffect(() => {
    dispatch(changeLoadStatus(isLoaded));
  }, [isLoaded]);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <header className={style.container}>
      <h1 className={style.title}>Search for books</h1>
      <div className={style.search}>
        <SearchBar
          showIcon={true}
          text={search.searchText}
          onchange={handleInputText}
          setFetchData={setFetchData}
        />
      </div>
      <div className={style.select_container}>
        <Select
          title="Categories"
          options={categories}
          onchange={handleSelectCategory}
          selectedValue={search.category}
        />
        <Select
          title="Sorting by"
          options={sort}
          onchange={handleSelectSort}
          selectedValue={search.sortingBy}
        />
      </div>
      <div className={style.favourites}>
        <Favourites />
      </div>
      <div className={style.theme}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
