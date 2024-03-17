import { ReactElement, useContext } from "react";
import style from "./loader.module.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import classNames from "classnames";

function Loader(): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <span
      className={classNames(
        style.loader,
        theme === "light" ? style.light : style.dark
      )}
    ></span>
  );
}

export default Loader;
