import { ReactElement } from "react";
import { Outlet } from "react-router";
import Header from "@components/Header/Header";
import { ThemeProvider } from "@components/ThemeProvider/ThemeProvider";

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
