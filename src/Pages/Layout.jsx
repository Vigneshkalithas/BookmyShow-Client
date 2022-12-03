import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Layout() {
  return (
    <>
      <div className="App-child">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
