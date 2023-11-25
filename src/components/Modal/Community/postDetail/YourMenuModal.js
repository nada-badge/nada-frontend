/** YourMenuModal 메뉴 클릭 시, 타인이 작성한 글일 경우 나오는 모달 */
import Modal from '../Modal';
import useModal from '../useModal';
import ModalButton from '../../../common/modal/ModalButton';
import PrintCenteredText from '../../../common/modal/PrintCenteredText';
import {
  List,
  Border,
  Layout,
} from '../../../../styles/Community/BarModalStyle';

export const YourMenuModal = () => {
  const { openModal } = useModal();

  const reportPost = () => {
    openModal({
      type: 'AskModal',
      contentType: '글',
      actionType: '신고',
      content: '신고한 글은 서비스 운영원칙에 따라 처리돼요',
      position: 'post',
    });
  };

  const sharePost = () => {
    openModal({
      type: 'ShareModal',
      actionType: '공유',
      position: 'post',
    });
  };

  return (
    <Modal>
      <Layout>
        <List>
          {PrintCenteredText({
            print: '신고하기',
            act: reportPost,
          })}
          {PrintCenteredText({ print: '공유하기', act: sharePost })}
        </List>
        <Border />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
};

export default YourMenuModal;
