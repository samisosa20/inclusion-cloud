import axios from "axios";
import { trackPromise } from "react-promise-tracker";
const useGeneralProvider = () => {
  const getStatusProvider = (id: string) => {
    const request = axios({
      method: "GET",
      url: `${id}/health/status`,
    });
    return trackPromise(request);
  };
  return {
    getStatusProvider,
  };
};

export default useGeneralProvider;
