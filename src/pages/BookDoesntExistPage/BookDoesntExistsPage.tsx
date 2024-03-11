import { ReactElement } from "react";
import style from "./doesn'texist.module.scss";

function BookDoesntExistPage(): ReactElement {
  return <div className={style.container}>Book with this id doesn't exist</div>;
}

export default BookDoesntExistPage;
