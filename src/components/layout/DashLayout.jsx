import React from "react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import SideNav from "../Dashboard/SideNav";
import Spinner from "../Spinner/Spinner";

const DashLayout = () => {
  const { loader } = useContext(AuthContext);

  return (
    <div className="flex ">
      <SideNav />
      <Outlet />
    </div>
  );
};

export default DashLayout;
