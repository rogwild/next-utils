import { useState, useEffect } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakpoint = (breakpoint) => {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(`resize`, handleResize);

    handleResize();

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return !width || width >= BREAKPOINTS[breakpoint];
};

export default useBreakpoint;
