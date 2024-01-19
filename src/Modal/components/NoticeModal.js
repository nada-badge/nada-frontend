/** NoticeModal 삭제 또는 신고가 정상적으로 되었음을 알리는 모달 */
import { useSelector } from 'react-redux';
import { Layout } from '../../Community/styles/NoticeModalStyle';
import ModalButtonDiv from './usedInModal/ModalButtonDiv';

const NoticeModal = () => {
  const modal = useSelector(({ modal }) => modal);
  const { contentType, actionType } = modal;

  return (
    <Layout>
      <div className="text">
        {contentType}이 {actionType}되었어요
      </div>
      <div className="border-2" />
      <img
        className="img"
        alt="Check"
        src="https://c.animaapp.com/jSDFsaX0/img/check.svg"
      />
      <div className="border-2" />
      <ModalButtonDiv cancelText={'확인'} />
    </Layout>
  );
};

export default NoticeModal;
