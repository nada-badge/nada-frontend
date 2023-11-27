/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';
import MainCategoryModal from '../../community/PostWrite/MainCategoryModal';
import ShareModal from './ShareModal';
import NoticeModal from './NoticeModal';
import AskModal from './AskModal';
import ButtonSelectModal from './ButtonSelectModal';
import MenuModal from './MenuModal';

const MODAL_COMPONENTS = {
  MainCategoryModal: MainCategoryModal,
  ShareModal: ShareModal,
  NoticeModal: NoticeModal,
  AskModal: AskModal,
  MenuModal: MenuModal,
  ButtonSelectModal: ButtonSelectModal,
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
