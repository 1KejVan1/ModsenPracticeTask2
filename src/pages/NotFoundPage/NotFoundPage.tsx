import { ReactElement, useContext } from "react";
import style from "./notfoundpage.module.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import classNames from "classnames";

function NotFoundPage(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames(style.container, style[theme])}>
      The page doesn't exist
    </div>
  );
}

export default NotFoundPage;
