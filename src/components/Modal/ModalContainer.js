import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../../module/ModalStatus";
import AreaModal from "./AreaModal";

const MODAL_COMPONENTS = {
  first: AreaModal,
  //second: SecondModal,
};

function ModalContainer() {
  const { type, props } = useSelector(modalSelector);

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return createPortal(
    <>
      <Modal {...props} />
    </>,
    document.getElementById("modal")
  );
}

export default ModalContainer;
