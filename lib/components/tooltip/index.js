import React, { useMemo } from "react";
import hooks from "../../hooks";
const { useStyleRewriter } = hooks;

const Tooltip = ({
  children,
  visible = true,
  tooltipRef,
  className,
  tooltipPosition,
}) => {
  const srClasses = useStyleRewriter(baseClasses, className);

  const tooltipClasses = useMemo(() => {
    switch (tooltipPosition) {
      case "left-bottom":
        return `tooltip-left-bottom`;
      case "left-top":
        return;
      case "top-left":
        return;
      case "top-right":
        return;
      case "right-top":
        return;
      case "right-bottom":
        return;
      case "bottom-right":
        return;
      case "bottom-left":
        return;
    }
  }, [tooltipPosition]);

  return (
    <div
      ref={tooltipRef}
      className={`${
        visible ? "opacity-100 w-auto" : "opacity-0"
      } ${srClasses} ${tooltipClasses}`}
    >
      {children}
    </div>
  );
};

export default Tooltip;

const baseClasses = `
    @pn absolute
    @wh w-fit
    @it left-0 top-0
    @tta text-center 
    @bxsw shadow-400
    @brw border
    @brc border-true-gray-150
    @bdc bg-white 
    @pg p-1 
    @brr rounded-8px 
    @ttc text-black
  `;
