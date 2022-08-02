import { lazy } from 'react';

import useSpinners from './Spinners';
const Toast = lazy(() => import('./Toast'));
const Typography = lazy(() => import('./Typography'));
const Header = lazy(() => import("./Header"))
const Card = lazy(() => import("./Card"))

const useComponents = () => {
  return {
    useSpinners,
    Toast,
    Typography,
    Header,
    Card,
  };
};

export default useComponents;
