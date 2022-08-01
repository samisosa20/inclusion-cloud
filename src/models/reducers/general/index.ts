import useHelpers from "@/helpers";
import useStrings from "@/strings";
import useInitialStates from "@/models/initialStates";
import { PayloadAction } from "@reduxjs/toolkit";

const useGeneralReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  // Initial States
  const { useGeneralInitialStates } = useInitialStates();
  const { initialStateGeneral, initialStateAuth } = useGeneralInitialStates();

  // Types
  const { useGeneralTypes } = useStrings();
  const { SHOW_NAME, LOGIN } = useGeneralTypes();

  const generalSettings = createReducer(initialStateGeneral, {
    [SHOW_NAME](state: any, action: PayloadAction<any>) {
      const users = action.payload;
      return { name: users.name };
    },
  });

  const consumerLogin = createReducer(initialStateAuth, {
    [LOGIN](state: any, action: PayloadAction<any>) {
      return action.payload;
    },
  });

  return { generalSettings, consumerLogin };
};

export default useGeneralReducers;
