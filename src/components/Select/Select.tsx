import { ReactElement } from "react";
import style from "./select.module.scss";

interface Props {
  title: string;
}

function Select({ title }: Props): ReactElement {
  return (
    <div className={style.container}>
      <label className={style.label}>{title}</label>
      <select className={style.select}>
        <option
          className={style.default_option}
          defaultValue={""}
          disabled
          selected
        >
          asdad
        </option>
        <option className={style.options} value={"avcxzcv"}>
          {" "}
          title
        </option>
      </select>
    </div>
  );
}

export default Select;
