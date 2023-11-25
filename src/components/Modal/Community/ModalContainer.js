/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';
import AreaModal from './postWrite/AreaModal';
import FieldModal from './postWrite/FieldModal';
import CategoryModal from './postWrite/CategoryModal';
import MainCategoryModal from './postWrite/MainCategoryModal';
import MyMenuModal from './postDetail/MyMenuModal';
import ShareModal from './postDetail/ShareModal';
import YourMenuModal from './postDetail/YourMenuModal';
import MyCommentModal from './comment/MyCommentModal';
import NoticeModal from '../../common/modal/NoticeModal';
import AskModal from '../../common/modal/AskModal';

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  MyMenuModal: MyMenuModal,
  ShareModal: ShareModal,
  YourMenuModal: YourMenuModal,
  MyCommentModal: MyCommentModal,
  NoticeModal: NoticeModal,
  AskModal: AskModal,
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
