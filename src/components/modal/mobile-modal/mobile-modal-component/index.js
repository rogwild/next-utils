import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useSpring, a, config } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import hooks from "../../../../hooks";
const { useStyleRewriter } = hooks;

const ModalComponent = ({
  show = false, //required
  setShow = () => {}, //required
  RenderCard = () => <></>, //required
  popupWindowClasses = ``,
  renderCardContainerClasses = ``,
  renderCardProps = {},
  onCloseModalCb = () => {},
  zIndex = 50,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [scrollActive, setScrollActive] = useState(false);
  const srPopupWindowClasses = useStyleRewriter(
    `fixed z-40 w-full h-95vh bg-white`,
    popupWindowClasses
  );
  const srRenderCardContainerClasses = useStyleRewriter(
    `w-full h-full mt-1 overflow-visible`,
    renderCardContainerClasses
  );
  const modalHeight = screenHeight ? screenHeight * 0.9 : 0;

  const [{ y }, set] = useSpring(() => ({ y: modalHeight }));

  const open = ({ canceled }) => {
    if (!isOpen) setIsOpen(true);
    set({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
    document.querySelector(`body`).style.overflow = `hidden`;
  };
  const close = (velocity = 0) => {
    document.querySelector(`body`).style.overflow = `auto`;
    onCloseModalCb();
    setShow(false);
    set({
      y: modalHeight,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
    setIsOpen(false);
  };

  const bind = useDrag(
    (state) => {
      /**
       * @todo
       * !!! API was changed, need to fix
       *
       * Uncaught TypeError:
       * Cannot destructure property 'Symbol(Symbol.iterator)' of 'state' as it is undefined.
       */
      // console.log(`🚀 ~ state`, state);
      // const {
      //   last,
      //   vxvy: [],
      //   movement: [],
      //   cancel = () => {}, //
      //   canceled, //
      // } = state;
      // const [_, vy] = vxvy;
      // const [, my] = movement;
      // if (scrollActive) return;
      // if (my < -50) cancel();
      // if (last) {
      //   my > modalHeight * 0.5 || vy > 0.35 ? close(vy) : open({ canceled });
      // } else {
      //   set({ y: my, immediate: true });
      // }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const bgStyle = {
    opacity: y.to([0, modalHeight], [0.5, 0], `clamp`),
    zIndex: y.to([0, modalHeight], [zIndex, -1], `clamp`),
  };

  useEffect(() => {
    setRect({ setScreenHeight });
    const setRectListener = () => setRect({ setScreenHeight });
    window.addEventListener(`resize`, setRectListener);
    return () => {
      window.removeEventListener(`resize`, setRectListener);
      document.querySelector(`body`).style.overflow = `auto`;
    };
  }, []);

  useEffect(() => {
    if (!show && !isOpen) return;

    if (show) setIsOpen(true);
    show ? open({}) : close();
  }, [show]);

  if (!isOpen) return null;

  return (
    <div className="relative">
      <a.div
        onClick={close}
        className="fixed inset-0 bg-zinc-900 opacity-50"
        style={bgStyle}
      />
      <a.div
        className={srPopupWindowClasses}
        {...bind()}
        style={{
          display: show ? `block` : `none`,
          bottom: `calc(-100vh + ${modalHeight}px)`,
          touchAction: `none`,
          height: `100vh`,
          zIndex: `110`,
          y,
        }}
      >
        <div
          className={`relative w-screen h-[90vh] bg-white  rounded-t-2xl pt-5`}
        >
          <div className="absolute bg-white w-12 h-2 -top-4 left-1/2 transform -translate-x-1/2 rounded-full" />
          <div
            className={srRenderCardContainerClasses}
            onTouchStart={() => setScrollActive(true)}
            onTouchEnd={() => setScrollActive(false)}
            onMouseDown={() => setScrollActive(true)}
            onMouseLeave={() => setScrollActive(false)}
          >
            <RenderCard setShow={setShow} show={show} {...renderCardProps} />
          </div>
        </div>
      </a.div>
    </div>
  );
};

const setRect = ({ setScreenHeight }) => {
  const height = window.innerHeight;

  setScreenHeight(height);
};

export default ModalComponent;

// const baseLayoutClasses = `@pn fixed @it inset-0 @pre pointer-events-auto @zi z-10 @bdc bg-gray-500 @bdo opacity-50`;

// const baseContainerClasses = `@pre pointer-events-none @dy flex @pn fixed @ow overflow-hidden @it bottom-0 inset-0 @ani items-end @jyc justify-end`;
