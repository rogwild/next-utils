import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalComponent from "../modal-component";

const ModalPortal = ({ targetId = `modal`, ...props }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined && document.querySelector(`#${targetId}`)) {
      setDomLoaded(true);
    }
  }, []);

  return (
    domLoaded &&
    createPortal(
      <ModalComponent {...props} />,
      document.querySelector(`#${targetId}`)
    )
  );
};

export default ModalPortal;
