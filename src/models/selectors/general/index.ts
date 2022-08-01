import useHelpers from "../../../helpers";
import { RootState } from "@/config/redux";

const useGeneralSelectors = () => {
  const { useCreateSelector } = useHelpers();
  const { createSelector } = useCreateSelector();

  const generalSettings = createSelector(
    (state: RootState) => state.generalSettings,
    (generalSettings) => generalSettings
  );

  return { generalSettings };
};

export default useGeneralSelectors;
