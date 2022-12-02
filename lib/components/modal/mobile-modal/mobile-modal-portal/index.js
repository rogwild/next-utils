import { createPortal } from "react-dom";
import React from "react";
import ModalComponent from "../mobile-modal-component";

const ModalPortal = ({ targetId = `modal`, ...props }) => {
  return document.querySelector(`#${targetId}`)
    ? createPortal(
        <ModalComponent {...props} />,
        document.querySelector(`#${targetId}`)
      )
    : null;
};

export default ModalPortal;
