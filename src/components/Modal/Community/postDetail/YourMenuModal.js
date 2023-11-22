/** YourMenuModal 메뉴 클릭 시, 타인이 작성한 글일 경우 나오는 모달 */
import Modal from '../Modal';
import ModalButton from '../../../common/modal/ModalButton';
import PrintCenteredText from '../../../common/modal/PrintCenteredText';
import {
  List,
  Border,
  Layout,
} from '../../../../styles/Community/BarModalStyle';

export const YourMenuModal = () => {
  return (
    <Modal>
      <Layout>
        <List>
          {PrintCenteredText({ text: '신고하기', modalType: 'ReportModal' })}
          {PrintCenteredText({ text: '공유하기', modalType: 'ShareModal' })}
        </List>
        <Border />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
};

export default YourMenuModal;
