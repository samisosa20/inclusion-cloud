// Package
import {useEffect} from "react"

// Actions
import useActions from "@/api/actions";
import useModels from "@/models";

const useHome = () => {
  const listName = ["accounts", "assets", "customers", "datapoints", "devices", "documents", "forms", "invites",
    "media", "messages", "namespaces", "orders", "patients", "relationships", "rules",
    "templates", "users", "workflows"]

  // Action
  const { dispatch, useGeneralActions } = useActions();
  const { actGetStatus } = useGeneralActions();

  const { useSelectors } = useModels();
  const { useSelector, useGeneralSelectors } = useSelectors();
  const { generalSettings } = useGeneralSelectors();
  const { list } = useSelector(generalSettings);


  useEffect(() => {
    setInterval(()=>
    listName.forEach((name) => {
        let cors = false
      if (name === "messages" || name === "invites" || name === "users") {
        cors = true
      }
      dispatch(actGetStatus(name, cors));
    }), import.meta.env.VITE_REFRESH_TIME * 1000)
  }, []);

  return {
    list,
  };
};

export default useHome;
