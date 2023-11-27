/** useModal 모달 훅 */
import { useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../../modules/Community/modal';

function useModal() {
  const dispatch = useDispatch();

  const handleOpenModal = ({
    type,
    contentType,
    actionType,
    content,
    position,
  }) => {
    dispatch(openModal({ type, contentType, actionType, content, position }));
  };

  const handleCloseModal = (type) => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}

export default useModal;
