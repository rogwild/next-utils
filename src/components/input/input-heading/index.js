import React from "react";
import SmartButton from "../../smart-button";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const InputHeading = ({
  title = "",
  onButtonClick = () => console.log("InputHeading -> onClick"),
  buttonTitle,
  className,
}) => {
  const srClasses = useStyleRewriter(
    `@fx flex @wh w-full @it items-center justify-between`,
    className
  );

  return (
    <div className={srClasses}>
      <div className="w-fit pb-2">
        <p className="@leh leading-none">{title}</p>
      </div>
      {buttonTitle && (
        <div className="flex justify-end w-fit pb-2">
          <SmartButton variant="text" onClick={onButtonClick}>
            <p className="text-gray-dark hover:text-blue-primary duration-200">
              {buttonTitle}
            </p>
          </SmartButton>
        </div>
      )}
    </div>
  );
};

export default InputHeading;
