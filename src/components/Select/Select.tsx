import { ReactElement, useContext } from "react";
import style from "./select.module.scss";
import classNames from "classnames";
import { ThemeContext } from "../../Context/ThemeContext";

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
        className={classNames(
          style.select,
          theme === "light" ? style.light : style.dark
        )}
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
