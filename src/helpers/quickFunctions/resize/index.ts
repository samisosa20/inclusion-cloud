import { useState, useEffect } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleResize()
  },[]);

  window.addEventListener('resize', handleResize)

  return { width };
};

export default useResize;
