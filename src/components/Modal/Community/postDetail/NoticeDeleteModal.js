/** NoticeDeleteModal 삭제 후 삭제완료를 알리는 모달 */
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../../../styles/Community/NoticeModalStyle';
import { initializeForm } from '../../../../modules/Community/postDetail';
import ModalButton from '../../../common/modal/ModalButton';

function NoticeModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closes = () => {
    dispatch(initializeForm());
    navigate('/community');
  };

  return (
    <Modal>
      <Layout>
        <div className="text">글이 삭제되었어요</div>
        <div className="border-2" />
        <img
          className="img"
          alt="Check"
          src="https://c.animaapp.com/jSDFsaX0/img/check.svg"
        />
        <div className="border-2" />
        <div onClick={closes}>{ModalButton('확인')}</div>
      </Layout>
    </Modal>
  );
}

export default NoticeModal;
