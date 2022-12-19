import React, { useMemo } from "react";

import { shortByFull, fullByShort } from "./props";

const useStyleRewriter = (baseClassName, className, cleared = true) => {
  return useMemo(() => {
    let styleObj = getStyleObj(`@base ${baseClassName}`, cleared);
    let styleObjProps = getStyleObj(`@prop ${className}`, cleared);
    const computedStyleObj = { ...styleObj, ...styleObjProps };
    const resultClassName = Object.values(computedStyleObj)
      .join(" ")
      .replace(/\n/g, "");
    return resultClassName.replace(/\s+/g, " ");
  }, [baseClassName, className]);
};

export default useStyleRewriter;

const getStyleObj = (className = "", cleared) => {
  if (!className || !className.trim()) {
    return {};
  }
  let classesArr = className
    .replace(/@([a-z:]*)/g, "__@$1__")
    .split("__")
    .filter((str) => str);
  const styleObj = {};
  classesArr.forEach((item, index) => {
    if (item) {
      const isKey = item.includes("@");
      const nextValue = classesArr[index + 1];
      if (isKey) {
        const isKeyNextValue = nextValue && nextValue.includes("@");
        if (!(fullByShort[item] || shortByFull[item])) {
          throw new Error(
            `Invalid key ${item} for styleRewriter in className ${className}`
          );
        }
        if (!isKeyNextValue) {
          setValue({ styleObj, key: item, value: nextValue, cleared });
        } else {
          setValue({ styleObj, key: item, value: "", cleared });
        }
      }
    }
  });

  return styleObj;
};

const setValue = ({ styleObj, key, value, cleared }) => {
  if (cleared) {
    styleObj[key] = value;
  } else {
    const stringKey = key === "@base" || key === "@prop" ? "" : key;
    styleObj[key] = `${stringKey} ${value}`;
  }
};
