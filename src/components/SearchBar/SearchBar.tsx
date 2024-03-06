import { ReactElement } from "react";
import { MdSearch } from "react-icons/md";
import style from "./searchbar.module.scss";

interface Props {
  showIcon: boolean;
  placeholder?: string;
}

function SearchBar({
  showIcon = true,
  placeholder = "Input title",
}: Props): ReactElement {
  return (
    <div className={style.container}>
      <input className={style.search} type="text" placeholder={placeholder} />
      {showIcon && (
        <div className={style.bg_icon}>
          <MdSearch size={25} />
        </div>
      )}
    </div>
  );
}

export default SearchBar;
