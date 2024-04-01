import React from "react";

import { Theme } from "@enums/Theme";

interface Context {
  theme: Theme | string;
  setTheme: React.Dispatch<React.SetStateAction<Theme | string>>;
}

export const ThemeContext = React.createContext<Context>({} as Context);
