import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../../module/Community/modal";

function useModal() {
  const dispatch = useDispatch();

  const handleOpenModal = ({ type, props }) => {
    dispatch(openModal({ type, props }));
  };

  const handleCloseModal = (type) => {
    dispatch(closeModal());
  };

  return { openModal: handleOpenModal, closeModal: handleCloseModal };
}

export default useModal;
