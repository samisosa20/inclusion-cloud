import axios from "axios";
import { trackPromise } from "react-promise-tracker";
const useGeneralProvider = () => {
  const getStatusProvider = (id: string, cors: boolean) => {
    const request = axios({
      method: "GET",
      url: cors ? `https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/${id}/health/status` : `${id}/health/status`,
    });
    return trackPromise(request);
  };
  return {
    getStatusProvider,
  };
};

export default useGeneralProvider;
