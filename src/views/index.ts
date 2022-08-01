import useComponents from "./components";
import useLayouts from "./layouts";
import useScreens from "./screens";

const useViews = () => {
  return {
    useScreens,
    useComponents,
    useLayouts,
  };
};

export default useViews;
