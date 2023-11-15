/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { modalSelector } from "../../../module/Community/modal";
import AreaModal from "./postWrite/AreaModal";
import FieldModal from "./postWrite/FieldModal";
import CategoryModal from "./postWrite/CategoryModal";
import MainCategoryModal from "./postWrite/MainCategoryModal";
import MyMenuModal from "./postDetail/MyMenuModal";
import DeleteModal from "./postDetail/DeleteModal";
import NoticeDeleteModal from "./postDetail/NoticeDeleteModal";
import ShareModal from "./postDetail/ShareModal";
import YourMenuModal from "./postDetail/YourMenuModal";
import ReportModal from "./postDetail/ReportModal";
import NoticeReportModal from "./postDetail/NoticeReportModal";

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MyMenuModal: MyMenuModal,
  DeleteModal: DeleteModal,
  NoticeDeleteModal: NoticeDeleteModal,
  ShareModal: ShareModal,
  YourMenuModal: YourMenuModal,
  ReportModal: ReportModal,
  NoticeReportModal: NoticeReportModal,
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
