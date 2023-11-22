/** MyMenuModal 메뉴 클릭 시, 본인이 작성한 글일 경우 출력되는 모달 */
import Modal from '../Modal';
import useModal from '../useModal';
import { useNavigate } from 'react-router-dom';
import PrintCenteredText from '../../../common/modal/PrintCenteredText';
import useSetButtonActive from '../../../../containers/community/postDetail/SetButtonActive';
import ModalButton from '../../../common/modal/ModalButton';
import {
  List,
  Border,
  Layout,
} from '../../../../styles/Community/BarModalStyle';

export const MyMenuModal = () => {
  const navigate = useNavigate();
  const setButtonActive = useSetButtonActive();
  const { closeModal, openModal } = useModal();

  const update = () => {
    setButtonActive();
    navigate('/community/PostWrite');
    close();
  };

  const openModalType = (modalType) => {
    openModal({ type: modalType });
  };

  const close = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <List>
          {PrintCenteredText({ text: '수정하기', act: update })}
          {PrintCenteredText({
            text: '공유하기',
            modalType: 'ShareModal',
          })}
          {PrintCenteredText({
            text: '삭제하기',
            modalType: 'DeleteModal',
          })}
        </List>
        <Border />
        <div onClick={close}>{ModalButton('닫기')}</div>
      </Layout>
    </Modal>
  );
};

export default MyMenuModal;
