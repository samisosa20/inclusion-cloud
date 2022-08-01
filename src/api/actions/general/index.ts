import useProviders from "@/api/providers";
import useStrings from "@/strings";

import { AppDispatch } from "@/config/redux";

const useGeneralActions = () => {
  // Types
  const { useGeneralTypes } = useStrings();
  const { SHOW_NAME } = useGeneralTypes();

  // Providers
  const { useGeneralProvider } = useProviders();
  const { exampleProvirder } = useGeneralProvider();

  const actExample =
    (
      id: number,
      onSuccess: Function = () => {},
      onError: Function = () => {}
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        const res = await exampleProvirder(id);
        if (res.status === 200) {
          dispatch({
            type: SHOW_NAME,
            payload: res.data,
          });
          onSuccess && onSuccess(res.data);
        } else {
          onError && onError();
        }
      } catch (e: any) {
        onError && onError(e.response);
        console.error("e", e);
      }
    };
  return {
    actExample,
  };
};

export default useGeneralActions;
