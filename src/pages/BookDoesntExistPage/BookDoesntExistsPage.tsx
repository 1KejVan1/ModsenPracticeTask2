import { ReactElement, useContext } from "react";

import { ThemeContext } from "@context/ThemeContext";

import style from "./doesn'texist.module.scss";

function BookDoesntExistPage(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <h2 className={style[theme]}>Book with this id doesn't exist</h2>
    </div>
  );
}

export default BookDoesntExistPage;
