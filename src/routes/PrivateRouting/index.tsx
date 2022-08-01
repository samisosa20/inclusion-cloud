// Packages
import React from "react";

// Views
import useViews from "../../views";

// Interface
import { RoutingInterface } from "../Routing/Routing.interface";

const PrivateRouting = () => {
  // Views
  const { useScreens } = useViews();

  const privateRoutes: RoutingInterface[] = [];

  return { privateRoutes };
};

export default PrivateRouting;
