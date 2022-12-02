import { useEffect, useState } from "react";

const useDomMeasure = (ref, triggers = []) => {
  const [domRect, setDomRect] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      const elemDomRect = ref.current.getBoundingClientRect();
      setDomRect(elemDomRect);
    }
  }, [ref, ...triggers]);

  useEffect(() => {
    if (ref.current) {
      const setRectCallback = () => {
        const elemDomRect = ref.current.getBoundingClientRect();
        const { width: newWidth, height: newHeight } = elemDomRect;
        if (newWidth !== domRect.width || newHeight !== domRect.height) {
          setDomRect(elemDomRect);
        }
      };
      window.addEventListener("resize", setRectCallback);
      return () => {
        window.removeEventListener("resize", setRectCallback);
      };
    }
  }, []);

  return [domRect.width, domRect.height];
};

export default useDomMeasure;
