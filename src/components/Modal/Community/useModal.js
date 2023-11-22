/** useModal 모달 훅 */
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../../modules/Community/modal';

function useModal() {
  const dispatch = useDispatch();

  const handleOpenModal = ({ type, title, content, act }) => {
    dispatch(openModal({ type, title }));
  };

  const handleCloseModal = (type) => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}

export default useModal;
