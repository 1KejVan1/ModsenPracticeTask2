import { ReactElement } from "react";
import style from "./notfoundpage.module.scss";

function NotFoundPage(): ReactElement {
  return <div className={style.container}>The page doesn't exist</div>;
}

export default NotFoundPage;
