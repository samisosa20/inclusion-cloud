import { useSelector } from 'react-redux';
import useGeneralSelectors from './general';

const useSelectors = () => {
  return {
    useSelector,
    useGeneralSelectors,
  };
};

export default useSelectors;
