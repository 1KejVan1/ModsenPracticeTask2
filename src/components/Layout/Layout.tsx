import { ReactElement } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

function Layout(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
