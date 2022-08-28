import React, { useMemo, useRef } from "react";
import { animated } from "react-spring";
import useStyleRewriter from "../../../hooks/use-style-rewriter";
import ReactMarkdown from "react-markdown";
import SmartButton from "../../smart-button";

// use forwardRef here to access alert *content* div height
// used to animate *container* div height from 0 <-> auto during enter / leave transition
const Notification = React.forwardRef((props, ref) => {
  const {
    title = "",
    message = "",
    remove = () => {},
    containerClassName = "",
    contentContainerClassName = "",
    headerClassName = "",
    bodyClassName = "",
    styles,
    Child,
    CloseIcon,
    showDefault = true,
  } = props;

  const srContainerClassName = useStyleRewriter(
    alertContainerClassName,
    containerClassName
  );

  const srContentContainerClassName = useStyleRewriter(
    contentWrapperClassName,
    contentContainerClassName
  );

  const srHeaderClassName = useStyleRewriter(
    alertHeaderClassName,
    headerClassName
  );

  const srBodyClassName = useStyleRewriter(alertBodyClassName, bodyClassName);

  const CloseIconComp = CloseIcon
    ? (props) => <CloseIcon {...props} />
    : (props) => <CloseButton {...props} />;

  return (
    <animated.div
      className={srContainerClassName}
      style={{
        ...styles,
      }}
    >
      <div className={srContentContainerClassName} ref={ref}>
        {Child ? <Child {...props} /> : null}
        {showDefault ? (
          <div className="flex flex-col items-start gap-2">
            <div className={`markdown ${srHeaderClassName}`}>
              <ReactMarkdown>{title}</ReactMarkdown>
            </div>
            <div className={`markdown ${srBodyClassName}`}>
              <ReactMarkdown>{message}</ReactMarkdown>
            </div>
          </div>
        ) : null}
        <CloseIconComp remove={remove} />
      </div>
    </animated.div>
  );
});

export default Notification;

const alertContainerClassName = `
  @pn relative
  @ow overflow-hidden`;

const contentWrapperClassName = `
  @pn relative
  @dy flex
  @fxd flex-row
  @ani items-start
  @brr rounded-sm
  @bxsw drop-shadow-md
  @pg pr-8 py-2
  @bdc bg-white`;

const alertHeaderClassName = `
  @pg pl-2
  @fts font-sm`;

const alertBodyClassName = `
  @pg pl-2
  @fts text-xs`;

const CloseButton = ({ remove = () => {} }) => {
  return (
    <SmartButton
      onClick={remove}
      className="@pn absolute @it right-1 top-1 @ttc text-black @wh w-3 @zi z-50 @cr cursor-pointer"
    >
      <svg
        className={`fill-current w-3`}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5659 5.24616C13.8936 4.91762 14.4257 4.91762 14.7542 5.24616C15.0827 5.57391 15.0827 6.10671 14.7542 6.43442L11.1711 10.0175L14.7042 13.5506C15.0302 13.8758 15.0302 14.4037 14.7042 14.7297C14.379 15.0558 13.8511 15.0558 13.5251 14.7297L9.99199 11.1966L6.43466 14.7539C6.10696 15.0817 5.57493 15.0817 5.2464 14.7539C4.91787 14.4262 4.91787 13.8942 5.2464 13.5656L8.80368 10.0084L5.27056 6.47527C4.94451 6.1501 4.94451 5.62226 5.27056 5.29621C5.59573 4.97016 6.12357 4.97016 6.44962 5.29621L9.98275 8.8293L13.5659 5.24616Z"
        />
      </svg>
    </SmartButton>
  );
};
