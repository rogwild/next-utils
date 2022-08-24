import { Fragment, useEffect, useMemo, useState } from "react";
import ModalArray from "./modal-array";
import hooks from "../../hooks";
const { useStyleRewriter, useBreakpoint } = hooks;
import dynamic from "next/dynamic";

const ModalPortal = dynamic(() => import(`./modal-portal`), { ssr: false });
const MobileModalPortal = dynamic(
  () => import(`./mobile-modal/mobile-modal-portal`),
  { ssr: false }
);

const Modal = ({ children, showEffect = () => {}, ...props }) => {
  const [show, setShow] = useState(false);
  const srChildContainerClasses = useStyleRewriter(
    `@cr cursor-pointer @wh w-full @ht h-full`,
    props.childContainerClasses
  );
  const modalComponentId = useMemo(() => {
    const name = props.RenderCard.name;

    if (!name || name === `anonymous`) {
      return `component${Math.round(Math.random() * 10e5)}`;
    }
    return name;
  }, []);

  useEffect(() => {
    showEffect({ show, setShow });
  }, [children ? show : props.show, props]);

  const useDesktopModal = useBreakpoint(`md`);

  const Component = useDesktopModal ? ModalPortal : MobileModalPortal;

  return (
    <Fragment>
      <Component
        modalComponentId={
          props.modalComponentId ? props.modalComponentId : modalComponentId
        }
        setShow={children ? setShow : props.setShow}
        show={children ? show : props.show}
        {...props}
      />
      {children ? (
        <div className={srChildContainerClasses} onClick={() => setShow(true)}>
          {children}
        </div>
      ) : null}
    </Fragment>
  );
};

export { ModalArray };
export default Modal;
