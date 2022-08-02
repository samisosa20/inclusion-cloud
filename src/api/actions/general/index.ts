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
        await getStatusProvider(id).then(res => {
          if (res.status === 200) {
            dispatch({
              type: LIST_HEALTH,
              payload: { ...res.data, title: id },
            });
            onSuccess && onSuccess(res.data);
          } else {
            dispatch({
              type: LIST_HEALTH,
              payload: { title: id,  success: false, message: "Error", hostname: "OUTAGE", time: res.status, detail: ""},
            });
            onError && onError();
          }
        }).catch(error => {
          onError && onError(error);
          dispatch({
            type: LIST_HEALTH,
            payload: { title: id,  success: false, message: "Error", hostname: "OUTAGE", time: error.response.status, detail: error.message},
          });
        });
    };
  return {
    actGetStatus,
  };
};

export default useGeneralActions;
