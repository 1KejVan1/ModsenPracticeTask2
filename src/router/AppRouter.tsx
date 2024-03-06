import React, { ReactElement } from "react";
import { Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";

function AppRouter(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default AppRouter;
