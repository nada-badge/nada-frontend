/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';
import AreaModal from './postWrite/AreaModal';
import FieldModal from './postWrite/FieldModal';
import CategoryModal from './postWrite/CategoryModal';
import MainCategoryModal from './postWrite/MainCategoryModal';
import MyMenuModal from './postDetail/MyMenuModal';
import DeleteModal from './postDetail/DeleteModal';
import ShareModal from './postDetail/ShareModal';
import YourMenuModal from './postDetail/YourMenuModal';
import ReportModal from './postDetail/ReportModal';
import MyCommentModal from './comment/MyCommentModal';
import DeleteCommentModal from './comment/DeleteCommentModal';
import NoticeModal from '../../common/modal/NoticeModal';

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MyMenuModal: MyMenuModal,
  DeleteModal: DeleteModal,
  ShareModal: ShareModal,
  YourMenuModal: YourMenuModal,
  ReportModal: ReportModal,
  MyCommentModal: MyCommentModal,
  DeleteCommentModal: DeleteCommentModal,
  NoticeModal: NoticeModal,
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
    document.getElementById('modal'),
  );
}

export default ModalContainer;
