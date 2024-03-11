import { ReactElement } from "react";
import style from "./loader.module.scss";

function Loader(): ReactElement {
  return <span className={style.loader}></span>;
}

export default Loader;
