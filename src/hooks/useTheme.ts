import { Context, useContext } from "react";

import { ThemeContext } from "../Context/ThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log("context error");
  } else {
    return context;
  }
}
