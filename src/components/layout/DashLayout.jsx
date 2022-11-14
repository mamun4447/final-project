import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../Dashboard/SideNav";

const DashLayout = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  );
};

export default DashLayout;