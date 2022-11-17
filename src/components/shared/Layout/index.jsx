import React from "react";
import { Outlet } from "react-router-dom";
import HeaderComp from "../Header";

const DashboardLayout = () => (
  <div className="bg-blue-custom h-screen overflow-hidden">
	<HeaderComp />
    <Outlet />
  </div>
);

export default DashboardLayout;
