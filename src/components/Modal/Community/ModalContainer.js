import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../../../module/Community/modal";
import AreaModal from "./AreaModal";
import FieldModal from "./FieldModal";
import CategoryModal from "./CategoryModal";
import MainCategoryModal from "./MainCategoryModal";
import MenuModal from "./MenuModal";
import DeleteModal from "./DeleteModal";
import NoticeModal from "./NoticeModal";
import ShareModal from "./ShareModal";

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MenuModal: MenuModal,
  DeleteModal: DeleteModal,
  NoticeModal: NoticeModal,
  ShareModal: ShareModal,
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
