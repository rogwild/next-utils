import { useState, useEffect } from "react";

const useDebounce = (value: number | string, delay: number) => {
  const [depouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return depouncedValue;
};

export default useDebounce;
