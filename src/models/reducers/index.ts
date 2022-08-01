import { combineReducers } from "redux";

import useGeneralReducers from "./general";

const useReducers = () => {
  const { generalSettings, consumerLogin } = useGeneralReducers();
  return combineReducers({ generalSettings, consumerLogin });
};

export default useReducers;
