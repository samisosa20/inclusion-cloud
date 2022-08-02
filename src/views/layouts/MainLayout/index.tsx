import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/views/components/Header";

const MainLayout = () => {
  return (
    <div className={"bg-ilusion-body min-h-screen"}>
      <Header />
      <div className={"container mx-auto pt-8"}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
