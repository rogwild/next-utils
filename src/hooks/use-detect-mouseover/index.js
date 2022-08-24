import { useState, useEffect, useCallback } from "react";

const useDetectMouseover = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  const handleOver = useCallback(
    (e) => {
      setIsActive(true);
    },
    [el.current]
  );

  const handleOut = useCallback(
    (e) => {
      setIsActive(false);
    },
    [el.current]
  );
  useEffect(() => {
    if (el.current) {
      el.current.addEventListener("mouseenter", handleOver);
      el.current.addEventListener("mouseleave", handleOut);
    }

    return () => {
      if (el.current) {
        el.current.removeEventListener("mouseenter", handleOver);
        el.current.removeEventListener("mouseleave", handleOut);
      }
    };
  }, [isActive, el.current]);

  return [isActive];
};

export default useDetectMouseover;
