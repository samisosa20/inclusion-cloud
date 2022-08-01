// Packages
import React from "react";

// Components
import useViews from "../../views";

// Interface
import { RoutingInterface } from "../Routing/Routing.interface";

const PublicRouting = () => {
  const { useScreens } = useViews();
  const { Home } = useScreens();

  const publicRoutes: RoutingInterface[] = [
    {
      path: "/",
      element: <Home />,
      index: true,
    },
  ];

  return { publicRoutes };
};

export default PublicRouting;
