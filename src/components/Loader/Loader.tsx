import { ReactElement, useContext } from "react";

import classNames from "classnames";

import { ThemeContext } from "../../Context/ThemeContext";
import style from "./loader.module.scss";

function Loader(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return <span className={classNames(style.loader, style[theme])}></span>;
}

export default Loader;
