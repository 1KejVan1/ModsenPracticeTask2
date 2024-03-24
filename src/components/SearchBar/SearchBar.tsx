import React, { ReactElement, useContext } from "react";
import { MdSearch } from "react-icons/md";
import style from "./searchbar.module.scss";
import classNames from "classnames";
import { ThemeContext } from "../../Context/ThemeContext";

interface Props {
  showIcon?: boolean;
  placeholder?: string;
  text: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFetchData: (value: boolean) => void;
}

function SearchBar({
  showIcon = false,
  placeholder = "Input title",
  text,
  onchange,
  setFetchData,
}: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <input
        className={classNames(style.search, style[theme])}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onchange}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setFetchData(true);
          }
        }}
      />
      {showIcon && (
        <div
          className={classNames(style.bg_icon, style[theme])}
          onClick={() => setFetchData(true)}
        >
          <MdSearch size={25} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
