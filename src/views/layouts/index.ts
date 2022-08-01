import {lazy} from "react";

const MainLayout = lazy(() => import("./MainLayout"));

const useLayouts = () => {
  return {MainLayout};
};

export default useLayouts;
