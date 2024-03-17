import { ReactElement, useContext } from "react";
import style from "./switcher.module.scss";
import { ThemeContext } from "../../Context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeSwitcher(): ReactElement {
  const { theme, switchTheme } = useContext(ThemeContext);

  function Switch() {
    switchTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={style.theme}>
      {theme === "light" ? (
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
