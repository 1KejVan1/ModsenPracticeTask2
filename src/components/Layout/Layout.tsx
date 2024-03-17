import { ReactElement, useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import { ThemeContext } from "../../Context/ThemeContext";

function Layout(): ReactElement {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    let body = document.getElementById("body");
    (body as HTMLElement).style.backgroundColor =
      theme === "light" ? "white" : "#000000";
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme: theme, switchTheme: setTheme }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeContext.Provider>
  );
}

export default Layout;
