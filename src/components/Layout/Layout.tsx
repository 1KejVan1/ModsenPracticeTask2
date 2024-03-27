import { ReactElement } from "react";

import Header from "@components/Header/Header";
import { ThemeProvider } from "@components/ThemeProvider/ThemeProvider";
import { Outlet } from "react-router";

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
