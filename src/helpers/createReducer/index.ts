const useCreateReducer = () => {
  const createReducer =
    (initialState:{} , handler: any) =>
    (state = initialState, action: any) =>
      handler?.hasOwnProperty(action.type)
        ? handler[action.type](state, action)
        : state;
  return {
    createReducer,
  };
};

export default useCreateReducer;
