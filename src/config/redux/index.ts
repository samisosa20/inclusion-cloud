import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";

import useModels from "../../models";

/*
  useStoreConfig => HOOK
  - This hook exports store and persistor of application
  - blacklist property of persistConfig have a all the name of the reducers in array,
    that you do not want the information to persist
*/

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Models
const { useReducers } = useModels();
const reducers = useReducers();

const initialState = {};

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [],
};

const persistReduce = persistReducer(persistConfig, reducers);

// Be sure to ONLY add this middleware in development!
const middleware =
  process.env.NODE_ENV === "dev"
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  persistReduce,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

// types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export const useStoreConfig = () => {
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
