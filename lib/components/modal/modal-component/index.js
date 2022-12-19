import React, { useEffect, useState } from "react";
import hooks from "../../../hooks";
const { useStyleRewriter } = hooks;
import { Transition } from "transition-component";
import Button from "../../smart-button";

const ModalComponent = ({
  show = false, //required
  setShow = () => {}, //required
  RenderCard = () => <></>, //required
  CloseButton = DefaultCloseButton,
  popupWindowClasses = ``,
  closeButtonClasses = ``,
  layoutClasses = ``,
  containerClasses = ``,
  removeFromDom = true,
  transitionDuration: duration = 300,
  renderCardProps = {},
  hideDocumentOverflow = true,
  hideCloseButton = false,
}) => {
  const [showLayout, setShowLayout] = useState(show);
  const srLayoutClasses = useStyleRewriter(baseLayoutClasses, layoutClasses);
  const srPopupWindowClasses = useStyleRewriter(
    `@pre pointer-events-auto @tnp transition @tm transform z-40 @pn relative`,
    popupWindowClasses
  );
  const srContainerClasses = useStyleRewriter(
    baseContainerClasses,
    containerClasses
  );

  const changePopup = (bool) => {
    if (bool) {
      if (hideDocumentOverflow) {
        document.body.style.overflow = `hidden`;
      }
      setShowLayout(true);
    } else {
      if (hideDocumentOverflow) {
        document.body.style.overflow = `auto`;
      }

      setTimeout(() => {
        setShowLayout(false);
      }, duration - 50);
    }
  };

  useEffect(() => {
    if (showLayout || show) changePopup(show);
  }, [show]);

  // close popup on 'escape' key
  useEffect(() => {
    const changePopupListener = (e) => {
      if (e.code === `Escape`) {
        setShow(false);
        changePopup(false);
      }
    };
    window.addEventListener(`keydown`, changePopupListener);
    return () => {
      window.removeEventListener(`keydown`, changePopupListener);
      document.body.style.overflow = null;
    };
  }, []);

  const TransitionElement = removeFromDom ? TransitionComponent : PlainDiv;

  return (
    <div
      className={`${
        showLayout ? `z-[200] block` : `-z-1`
      } ${srContainerClasses}`}
    >
      <TransitionElement
        baseClasses={`fixed inset-0 pointer-events-auto duration-${duration} transition z-10`}
        show={show}
        transitionProps={layoutTransitionProps}
      >
        <div className="transition fixed inset-0">
          <div onClick={() => setShow(false)} className={srLayoutClasses} />
        </div>
      </TransitionElement>

      <TransitionElement
        baseClasses={`pointer-events-auto transition duration-${duration} transform z-40 relative`}
        show={show}
        id={`modal`}
        changePopup={setShow}
        transitionProps={contentTransitionProps}
      >
        <div className={srPopupWindowClasses}>
          <RenderCard {...renderCardProps} show={show} setShow={setShow} />
        </div>
      </TransitionElement>

      {!hideCloseButton && show ? (
        <CloseButton
          setShow={(bool) => setShow(bool)}
          closeButtonClasses={closeButtonClasses}
        />
      ) : null}
    </div>
  );
};

export default ModalComponent;

const DefaultCloseButton = ({ setShow }) => {
  return (
    <Button
      onClick={() => setShow(false)}
      className="@pn absolute @it right-[20px] top-[20px] @ttc text-white hover:text-neutral-550 @wh w-12 @zi z-50 @cr cursor-pointer"
    >
      <svg
        className="fill-current w-12 h-12"
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
    </Button>
  );
};

const baseLayoutClasses = `@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-black @bdo bg-opacity-60`;

const baseContainerClasses = `@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @pg px-5 py-10 @ani items-center @jyc justify-center`;
const layoutTransitionProps = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0`,
  enterTo: `opacity-100`,
  leave: `ease-in duration-200`,
  leaveFrom: `opacity-100`,
  leaveTo: `opacity-0`,
};

const contentTransitionProps = {
  enter: `ease-out duration-300`,
  enterFrom: `opacity-0 translate-y-4 sm:translate-y-0 sm:scale -95`,
  enterTo: `opacity-100 translate-y-0 sm:scale-100`,
  leave: `ease-in duration-300`,
  leaveFrom: `opacity-100 translate-y-0 sm:scale-100`,
  leaveTo: `opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95`,
};

const TransitionComponent = ({ children, show, transitionProps }) => (
  <Transition show={show} {...transitionProps}>
    {children}
  </Transition>
);

const PlainDiv = ({
  children,
  show,
  transitionProps,
  baseClasses,
  changePopup = () => {},
  id,
}) => (
  <div
    id={id}
    onClick={(e) => (e.target.id === id ? changePopup(false) : null)}
    className={`${baseClasses} ${
      show ? transitionProps.enterTo : transitionProps.leaveTo
    }`}
  >
    {children}
  </div>
);
