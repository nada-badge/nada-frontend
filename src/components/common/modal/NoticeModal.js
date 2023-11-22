import { useSelector } from 'react-redux';
import Modal from '../../Modal/Community/Modal';
import { Layout } from '../../../styles/Community/NoticeModalStyle';
import ModalButton from './ModalButton';
import { useNavigate } from 'react-router-dom';

function NoticeModal() {
  const modal = useSelector(({ modal }) => modal);
  const { title } = modal;
  const navigate = useNavigate();

  return (
    <Modal>
      <Layout onClick={() => navigate(-1)}>
        <div className="text">{title}되었어요</div>
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
