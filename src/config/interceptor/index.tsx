import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosResponse, AxiosError } from "axios";

import { AppDispatch } from "../redux";
import useHelpers from "../../helpers";
import useComponents from "../../views/components";

interface storeRedux {
  getState: any;
  dispatch: AppDispatch;
}

const useInterceptor = (store: storeRedux) => {
  const navigate = useNavigate();

  // Helpers
  const { useQuickFunctions } = useHelpers();
  const { useToast } = useQuickFunctions();
  const { error } = useToast();

  // Components
  const { Toast } = useComponents();

  const handleRequestSuccess = (request: any) => {
    const { getState } = store;
    const { consumerLogin } = getState();
    if (consumerLogin && consumerLogin.token) {
      request.headers.authorization = `Bearer ${consumerLogin.token}`;
    }
    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    return request;
  };

  const callErrorToast = (text = "", listOfErrors = [], id = "") => {
    error(<Toast text={text} listOfErrors={listOfErrors} />, {
      position: "top-right",
      closeOnClick: true,
      toastId: id,
    });
  };

  const handleRequestError = (error: AxiosError) => {
    console.error(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response: AxiosResponse) => {
    return response;
  };

  const handleResponseError = (error: any) => {
    switch (error.response.status) {
      case 401:
        if (error.response.data.message) {
          callErrorToast(error.response.data.message, [], "unAuthToast");
        }
        store.dispatch({ type: "CLEAN_MEMORY_DATA" });
        navigate("/");
        break;
      default:
        if (error.response.data.message) {
          callErrorToast(error.response.data.message, []);
        }
        return;
    }
    throw error;
  };

  useEffect(() => {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);
};

export default useInterceptor;
