import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Theme } from "../../enums/Theme";
import { ThemeContext } from "../../Context/ThemeContext";
import { getTheme } from "../../scripts/getTheme";
import { getFavBooks } from "../../scripts/getAndSetFavBooks";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme | string>("");

  useLayoutEffect(() => {
    setTheme(getTheme());
    // console.log(localStorage.getItem("favBooks"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme as string);

    const body = document.getElementById("body");
    (body as HTMLElement).style.backgroundColor =
      theme === Theme.Light ? "white" : "rgb(2, 2, 38)";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
