import { useState, useEffect } from "react";

const useDetectOutsideClick = (trigger, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (trigger?.current && !trigger.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    window.addEventListener("click", pageClickEvent);

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, []);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
