import React, { ReactElement } from "react";
import { MdSearch } from "react-icons/md";
import style from "./searchbar.module.scss";

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
  return (
    <div className={style.container}>
      <input
        className={style.search}
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
        <div className={style.bg_icon} onClick={() => setFetchData(true)}>
          <MdSearch size={25} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
