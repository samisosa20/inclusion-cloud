// Helpers
import useHelpers from "@/helpers";

// Components
import useComponents from "@/views/components";

// Actions
import useActions from "@/api/actions";
import { useEffect } from "react";
import useModels from "@/models";

const useHome = () => {
  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useToast } = useQuickFunctions();
  const { success } = useToast();

  // Components
  const { Toast } = useComponents();

  // Action
  const { dispatch, useGeneralActions } = useActions();
  const { actExample } = useGeneralActions();

  const { useSelectors } = useModels();
  const { useSelector, useGeneralSelectors } = useSelectors();
  const { generalSettings } = useGeneralSelectors();
  const { name } = useSelector(generalSettings);

  const handleShowToast = () => {
    success(<Toast text={"This is a toast component"} listOfErrors={[]} />, {
      position: "top-right",
      closeOnClick: true,
      toastId: 0,
    });
  };

  useEffect(() => {
    dispatch(actExample(1));
  }, []);

  return {
    handleShowToast,
    name,
  };
};

export default useHome;
