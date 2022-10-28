import { useState, useEffect } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakpoint = (breakpoint: keyof typeof BREAKPOINTS) => {
  const [reached, setReached] = useState(false);

  useEffect(() => {
    function checkReached() {
      setReached(!window.innerWidth || window.innerWidth >= BREAKPOINTS[breakpoint]);
    }

    window.addEventListener(`resize`, checkReached);

    checkReached();

    return () => {
      window.removeEventListener(`resize`, checkReached);
    };
  }, [breakpoint]);

  return reached;
};

export default useBreakpoint;
