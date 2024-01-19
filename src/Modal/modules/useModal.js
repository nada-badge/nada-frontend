/** useModal 모달 훅 */
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from './redux/modal';

const useModal = () => {
  const dispatch = useDispatch();

  const handleOpenModal = ({
    type,
    title,
    contentType,
    actionType,
    content,
    position,
  }) => {
    dispatch(
      openModal({ type, title, contentType, actionType, content, position }),
    );
  };

  const handleCloseModal = (type) => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
};

export default useModal;
