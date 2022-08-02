import useProviders from "@/api/providers";
import useStrings from "@/strings";

import { AppDispatch } from "@/config/redux";

const useGeneralActions = () => {
  // Types
  const { useGeneralTypes } = useStrings();
  const { LIST_HEALTH } = useGeneralTypes();

  // Providers
  const { useGeneralProvider } = useProviders();
  const { getStatusProvider } = useGeneralProvider();

  const actGetStatus =
    (
      id: string,
      onSuccess: Function = () => {},
      onError: Function = () => {}
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        const res = await getStatusProvider(id);
        console.log(res.status)
        if (res.status === 200) {
          dispatch({
            type: LIST_HEALTH,
            payload: { ...res.data, title: id },
          });
          onSuccess && onSuccess(res.data);
        } else {
          dispatch({
            type: LIST_HEALTH,
            payload: { title: id,  success: false, message: "Error", hostname: "OUTAGE", time: res.status},
          });
          onError && onError();
        }
      } catch (e: any) {
        onError && onError(e);
        dispatch({
          type: LIST_HEALTH,
          payload: { title: id,  success: false, message: "Error", hostname: "OUTAGE", time: "500 Server Error"},
        });
        console.error("e", e.status);
      }
    };
  return {
    actGetStatus,
  };
};

export default useGeneralActions;
