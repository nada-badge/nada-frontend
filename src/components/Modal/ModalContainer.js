import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../../module/ModalStatus";
import AreaModal from "./AreaModal";
import FieldModal from "./FieldModal";
import CategoryModal from "./CategoryModal";
import MainCategoryModal from "./MainCategoryModal";

const MODAL_COMPONENTS = {
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MainCategoryModal: MainCategoryModal,
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