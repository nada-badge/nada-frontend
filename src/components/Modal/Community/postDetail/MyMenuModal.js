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

  const updatePost = () => {
    setButtonActive();
    navigate('/community/PostWrite');
    closeModal();
  };

  const sharePost = () => {
    openModal({ type: 'ShareModal' });
  };

  const deletePost = () => {
    openModal({
      type: 'AskModal',
      contentType: '글',
      actionType: '삭제',
      content: '한 번 삭제한 글은 복구할 수 없어요',
      position: 'post',
    });
  };

  return (
    <Modal>
      <Layout>
        <List>
          {PrintCenteredText({ print: '수정하기', act: updatePost })}
          {PrintCenteredText({
            print: '공유하기',
            act: sharePost,
          })}
          {PrintCenteredText({
            print: '삭제하기',
            act: deletePost,
          })}
        </List>
        <Border />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
};

export default MyMenuModal;
