import { ReactElement, useContext } from "react";

import classNames from "classnames";

import { ThemeContext } from "../../Context/ThemeContext";
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
