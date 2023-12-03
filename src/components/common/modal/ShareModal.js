/** ShareModal 공유 방법을 선택하는 모달 */
import Modal from './Modal';
import { Layout, Image } from '../../../styles/Community/NoticeModalStyle';
import ModalButton from './ModalButton';

function ShareModal() {
  return (
    <Modal>
      <Layout>
        <div className="title">공유하기</div>
        <div className="border-2" />
        <div className="link">
          <Image className="linkImg" />
          <div className="text">링크 복사하기</div>
        </div>
        <div className="kakaO">
          <Image className="kakaOImg" />
          <div className="text">카카오톡 공유하기</div>
        </div>

        <div className="border-2" />
        {ModalButton('닫기')}
      </Layout>
    </Modal>
  );
}

export default ShareModal;
