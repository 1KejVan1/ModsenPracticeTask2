import { ReactElement, useContext } from "react";

import { ThemeContext } from "@Context/ThemeContext";
import { Theme } from "@enums/Theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import style from "./switcher.module.scss";

function ThemeSwitcher(): ReactElement {
  const { theme, setTheme } = useContext(ThemeContext);

  function Switch() {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  }

  return (
    <div className={style.theme}>
      {theme === Theme.Light ? (
        <MdLightMode color="white" className={style.icon} onClick={Switch} />
      ) : (
        <MdDarkMode
          color="midnightblue"
          className={style.icon}
          onClick={Switch}
        />
      )}
    </div>
  );
}

export default ThemeSwitcher;
