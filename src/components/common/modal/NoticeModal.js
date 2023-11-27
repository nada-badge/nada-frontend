import { useSelector } from 'react-redux';
import Modal from './Modal';
import { Layout } from '../../../styles/Community/NoticeModalStyle';
import ModalButton from './ModalButton';

function NoticeModal() {
  const modal = useSelector(({ modal }) => modal);
  const { contentType, actionType } = modal;

  return (
    <Modal>
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
        <div>{ModalButton('확인')}</div>
      </Layout>
    </Modal>
  );
}

export default NoticeModal;
