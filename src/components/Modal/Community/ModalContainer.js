import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../../../module/Community/modal";
import AreaModal from "./AreaModal";
import FieldModal from "./FieldModal";
import CategoryModal from "./CategoryModal";
import MainCategoryModal from "./MainCategoryModal";
import MyMenuModal from "./MyMenuModal";
import DeleteModal from "./DeleteModal";
import NoticeModal from "./NoticeModal";
import ShareModal from "./ShareModal";
import YourMenuModal from "./YourMenuModal";
import ReportModal from "./ReportModal";
import Notice2Modal from "./Notice2Modal";

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MyMenuModal: MyMenuModal,
  DeleteModal: DeleteModal,
  NoticeModal: NoticeModal,
  ShareModal: ShareModal,
  YourMenuModal: YourMenuModal,
  ReportModal: ReportModal,
  Notice2Modal: Notice2Modal,
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
