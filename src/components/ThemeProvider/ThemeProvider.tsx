import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { Theme } from "@enums/Theme";
import { useAppDispatch } from "@hooks/redux";
import { getFavBooks } from "@scripts/getAndSetFavBooks";
import { getTheme } from "@scripts/getTheme";
import { addFavouriteBooks } from "@store/favouriteBooksSlice";

import { ThemeContext } from "../../Context/ThemeContext";

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props): ReactElement {
  const [theme, setTheme] = useState<Theme | string>("");
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    setTheme(getTheme());
  }, []);

  useEffect(() => {
    dispatch(addFavouriteBooks(getFavBooks()));
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
