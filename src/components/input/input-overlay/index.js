import React from "react";
import InputError from "../input-error";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const InputOverlay = ({
  children,
  label,
  inputContainerClasses = ``,
  error,
  PairComponent = () => <></>,
  ...props
}) => {
  const srClasses = useStyleRewriter(baseClasses, inputContainerClasses);

  return (
    <div className={srClasses}>
      {label ? <p className="mb-0">{label}</p> : null}
      <div className="flex justify-start gap-2 relative w-full">
        {children}
        {PairComponent ? <PairComponent error={error} {...props} /> : null}
      </div>
      {error ? <InputError error={error} /> : null}
    </div>
  );
};

export default InputOverlay;

const baseClasses = `
@dy flex gap-2
@wh w-full
@fxd flex-col
@pn relative
@ttc text-neutral-350
`;
