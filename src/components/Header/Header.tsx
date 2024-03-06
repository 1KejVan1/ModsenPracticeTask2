import React, { ReactElement } from "react";
import style from "./header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Select from "../Select/Select";

function Header(): ReactElement {
  return (
    <header className={style.container}>
      <h1 className={style.title}>Search for books</h1>
      <div className={style.search}>
        <SearchBar showIcon={true} />
      </div>
      <div className={style.select_container}>
        <Select title="Categories" />
        <Select title="Sorting by" />
      </div>
    </header>
  );
}

export default Header;
