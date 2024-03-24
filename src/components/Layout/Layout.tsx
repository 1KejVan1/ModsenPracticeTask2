import { ReactElement } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import { ThemeProvider } from "@components/ThemeProvider/ThemeProvider";
import { Theme } from "../../enums/Theme";

function Layout(): ReactElement {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default Layout;
