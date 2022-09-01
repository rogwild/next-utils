import React from "react";
import InputError from "../input-error";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const InputOverlay = (props) => {
  const {
    children,
    label,
    labelContainerClassName = ``,
    labelClassName = ``,
    labelInputContainerClassName = ``,
    error,
    ErrorComponent,
    PairComponent,
    LabelComponent,
  } = props;

  const srLabelContainerClassName = useStyleRewriter(
    baseClasses,
    labelContainerClassName
  );
  const srLabelClassName = useStyleRewriter(baseLabelClassName, labelClassName);
  const srLabelInputContainerClassName = useStyleRewriter(
    baseInputContainerClassName,
    labelInputContainerClassName
  );

  return (
    <div className={srLabelContainerClassName}>
      {typeof LabelComponent === "function" && label ? (
        <LabelComponent {...props} />
      ) : label ? (
        <p className={srLabelClassName}>{label}</p>
      ) : null}
      <div className={srLabelInputContainerClassName}>
        {children}
        {typeof PairComponent === "function" ? (
          <PairComponent {...props} />
        ) : null}
      </div>
      {typeof ErrorComponent === "function" && error ? (
        <ErrorComponent {...props} />
      ) : error ? (
        <InputError {...props} />
      ) : null}
    </div>
  );
};

export default InputOverlay;

const baseClasses = `
  @pn relative
  @dy flex
  @gp gap-2
  @fxd flex-col
  @wh w-full
`;

const baseLabelClassName = `
  @mn mb-0`;

const baseInputContainerClassName = `
  @wh w-full
  @dy flex
  @jyc justify-start
  @ani items-center
  @pn relative
`;
