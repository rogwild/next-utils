import React, { forwardRef } from "react";
import useStyleRewriter from "../../../hooks/use-style-rewriter";

const TextArea = forwardRef(
  (
    {
      value = "",
      placeholder,
      onChange = () => null,
      className = "",
      disabled,
      id = null,
      ...props
    },
    ref
  ) => {
    const srClasses = useStyleRewriter(baseClasses, className);

    return (
      <textarea
        {...props}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={srClasses}
        disabled={disabled}
        ref={ref}
        id={id}
      />
    );
  }
);

export default TextArea;

const baseClasses = `
    @wh w-full
    @ht h-100px @mxh max-h-200px @mnh min-h-100px
    @bdc bg-white dark:bg-true-gray-750
    @ftf font-family-inter
    @fts text-14px
    @leh leading-20px
    @ttc text-black dark:text-white
    @brw border-px
    @brs border-solid
    @brc border-gray-light dark:border-true-gray-700 hover:border-blue-primary focus:border-blue-primary
    @tndn duration-200
    @oe outline-none focus:outline-none hover:outline-none
    @brr rounded-8px
    @dy flex
    @pg p-3
    @pn relative
    @bxsw hover:shadow-blue-outline focus:shadow-blue-outline
    @bro hover:border-opacity-70
`;
