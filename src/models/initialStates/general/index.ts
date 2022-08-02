const useGeneralInitialStates = () => {
  const initialStateGeneral = {
    refresh: false,
    list: null,
  };

  const initialStateAuth = {};
  return {
    initialStateGeneral,
    initialStateAuth,
  };
};

export default useGeneralInitialStates;
