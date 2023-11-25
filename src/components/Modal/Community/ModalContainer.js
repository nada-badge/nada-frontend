/** ModalContainer 모달을 관리하는 곳 */
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelector } from '../../../modules/Community/modal';
import MainCategoryModal from './postWrite/MainCategoryModal';
import ShareModal from '../../common/modal/ShareModal';
import NoticeModal from '../../common/modal/NoticeModal';
import AskModal from '../../common/modal/AskModal';
import ButtonSelectModal from '../../common/modal/ButtonSelectModal ';
import MenuModal from '../../common/modal/MenuModal';

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
