import { ReactElement, useContext } from "react";

import { ThemeContext } from "@context/ThemeContext";
import classNames from "classnames";

import style from "./select.module.scss";

interface IOption {
  title: string;
  value: string;
}

interface Props {
  title: string;
  options: IOption[];
  selectedValue: string | undefined;
  onchange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({
  title,
  options = [],
  onchange,
  selectedValue,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <label className={style.label}>{title}</label>
      <select
        value={selectedValue}
        className={classNames(style.select, style[theme])}
        onChange={onchange}
      >
        {options.map((item, index) => (
          <option key={Date.now() * Math.random() * index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
