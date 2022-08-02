import useHelpers from "@/helpers";
import useStrings from "@/strings";
import useInitialStates from "@/models/initialStates";
import { PayloadAction } from "@reduxjs/toolkit";
import { CardInterface } from "@/views/components/Card/Card.interface";

const useGeneralReducers = () => {
  const { useCreateReducer } = useHelpers();
  const { createReducer } = useCreateReducer();

  // Initial States
  const { useGeneralInitialStates } = useInitialStates();
  const { initialStateGeneral, initialStateAuth } = useGeneralInitialStates();

  // Types
  const { useGeneralTypes } = useStrings();
  const { LIST_HEALTH, LOGIN} = useGeneralTypes();

  const generalSettings = createReducer(initialStateGeneral, {
    [LIST_HEALTH](state: any, action: PayloadAction<any>) {
      const oldList = state.list ? state.list : []
      const title = action.payload.title
      const index = oldList.findIndex((v: CardInterface) => v.title === title)
      if (index >= 0) {
        oldList[index] = action.payload
      } else {
        oldList.push(action.payload)
      }
      return { refresh: !state.refresh, list: oldList };
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
