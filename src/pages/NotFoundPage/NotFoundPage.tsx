import { ReactElement, useContext } from "react";

import { ThemeContext } from "@context/ThemeContext";
import classNames from "classnames";

import style from "./notfoundpage.module.scss";

function NotFoundPage(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames(style.container, style[theme])}>
      The page doesn't exist
    </div>
  );
}

export default NotFoundPage;
