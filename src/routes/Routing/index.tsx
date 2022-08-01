import React from "react";
import { Route, Routes } from "react-router-dom";

import useLayouts from "@/views/layouts";

import PrivateRouting from "../PrivateRouting";
import PublicRouting from "../PublicRouting";

const Routing = () => {
  const { publicRoutes } = PublicRouting();
  const { privateRoutes } = PrivateRouting();
  const { MainLayout } = useLayouts();
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              index={route?.index}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Route>
      {privateRoutes && privateRoutes.length > 0 && (
        <Route path={"/private"} element={<></>}>
          {" "}
          {/* change the root private path and put in the element the private layout*/}
          {privateRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                index={route?.index}
                path={route.path}
                element={route.element}
              />
            );
          })}
          {/* Activate this line when you create your page 404
            <Route path={"*"} element={<Notfound />} />
          */}
        </Route>
      )}
    </Routes>
  );
};

export default Routing;
