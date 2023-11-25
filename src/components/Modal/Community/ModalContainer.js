/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';
import AreaModal from './postWrite/AreaModal';
import FieldModal from './postWrite/FieldModal';
import CategoryModal from './postWrite/CategoryModal';
import MainCategoryModal from './postWrite/MainCategoryModal';
import ShareModal from '../../common/modal/ShareModal';
import NoticeModal from '../../common/modal/NoticeModal';
import AskModal from '../../common/modal/AskModal';
import MenuModal from '../../common/modal/menuModal';

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  AreaModal: AreaModal,
  FieldModal: FieldModal,
  CategoryModal: CategoryModal,
  ShareModal: ShareModal,
  NoticeModal: NoticeModal,
  AskModal: AskModal,
  MenuModal: MenuModal,
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
