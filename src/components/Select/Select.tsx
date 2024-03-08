import { ChangeEventHandler, ReactElement } from "react";
import style from "./select.module.scss";

interface IOption {
  title: string;
  value: string;
}

interface Props {
  title: string;
  options: IOption[];
  selectedValue: string;
  onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  title,
  options = [],
  onchange,
  selectedValue,
}: Props): ReactElement {
  return (
    <div className={style.container}>
      <label className={style.label}>{title}</label>
      <select
        value={selectedValue}
        className={style.select}
        onChange={onchange}
      >
        {options.map((item) => (
          <option key={Date.now() * Math.random()} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
