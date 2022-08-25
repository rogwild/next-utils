import { useEffect, useRef } from "react";
import { config } from "react-spring";

export const defaultState = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": [],
};

export const positionStyles = {
  top: {
    margin: "0 8px",
    textAlign: "center",
    top: "0",
    left: "0",
    right: "0",
  },
  "top-left": { top: "0", left: "0" },
  "top-right": { top: "0", right: "0" },
  "bottom-left": { bottom: "0", left: "0" },
  bottom: {
    margin: "0 auto",
    textAlign: "center",
    bottom: "0",
    left: "0",
    right: "0",
  },
  "bottom-right": {
    bottom: "0",
    right: "0",
    marginRight: "30px",
    marginBottom: "20px",
  },
};

export const useTimeout = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay) {
      const timeout = setTimeout(tick, delay);

      return () => clearTimeout(timeout);
    }
  }, [delay]);
};

export const POSITIONS = {
  top: "top",
  "top-left": "top-left",
  "top-right": "top-right",
  bottom: "bottom",
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
};

export const createAnimationConfig = (position, onRest) => {
  const isFromTop = position.includes("top");

  const animation = {
    config: config.default,
    from: {
      opacity: 0,
      height: "0px",
      transform: `translateY(${isFromTop ? "-100%" : 0}) scale(1)`,
    },
    enter: {
      opacity: 1,
      height: "60px",
      transform: `translateY(0) scale(1)`,
    },
    leave: {
      opacity: 0,
      height: "0px",
      transform: `translateY(0 scale(0.9)`,
    },
    onRest,
  };

  return animation;
};
