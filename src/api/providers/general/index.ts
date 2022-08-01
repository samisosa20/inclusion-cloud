import axios from "axios";
import { trackPromise } from "react-promise-tracker";
const useGeneralProvider = () => {
  const exampleProvirder = (id: number) => {
    const request = axios({
      method: "GET",
      url: `users/${id}`,
    });
    return trackPromise(request);
  };
  return {
    exampleProvirder,
  };
};

export default useGeneralProvider;
