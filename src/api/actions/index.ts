import useGeneralActions from "./general";
import { useTypedDispatch } from "@/config/redux";

const useActions = () => {
  const dispatch = useTypedDispatch();
  return {
    dispatch,
    useGeneralActions,
  };
};

export default useActions;
