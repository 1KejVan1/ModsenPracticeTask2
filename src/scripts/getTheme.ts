import { Theme } from "@enums/Theme";

export function getTheme(): Theme | string {
  const theme = `${window.localStorage.getItem("theme")}`;

  if (Object.values(Theme).find((item) => item === theme)) return theme;

  return Theme.Light;
}
