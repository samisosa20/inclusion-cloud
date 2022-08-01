import { lazy } from 'react';

import useSpinners from './Spinners';
const Toast = lazy(() => import('./Toast'));
const Typography = lazy(() => import('./Typography'));

const useComponents = () => {
  return {
    useSpinners,
    Toast,
    Typography,
  };
};

export default useComponents;
