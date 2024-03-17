import React from "react";

interface Context {
  theme: string;
  switchTheme: React.Dispatch<React.SetStateAction<string>>;
}

// function switchTheme() {
//   the;
// }

export const ThemeContext = React.createContext<Context>({
  theme: "",
  switchTheme: () => {},
});
