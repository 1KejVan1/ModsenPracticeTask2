import { ReactElement, useEffect, useState } from "react";
import CardList from "../../components/CardList/CardList";
import style from "./page.module.scss";

function MainPage(): ReactElement {
  return (
    <div className={style.container}>
      <CardList />
      <div className={style.button_contaner}>
        <button className={style.button}>Загрузить ещё</button>
      </div>
    </div>
  );
}

export default MainPage;
