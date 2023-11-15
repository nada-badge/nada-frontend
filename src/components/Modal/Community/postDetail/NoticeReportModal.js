/** NoticeReportModal 신고 후 신고완료를 알리는 모달 */
import Modal from "../Modal";
import useModal from "../useModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../../styles/Community/BarSecModalStyle";
import { initializeForm } from "../../../../module/Community/postDetail";
import ModalButton from "../../../community/ModalButton";

function Notice2Modal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const closes = () => {
    dispatch(initializeForm());
    navigate("/community");
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <div className="text">글이 신고되었어요</div>
        <div className="border-2" />
        <img
          className="img"
          alt="Check"
          src="https://c.animaapp.com/jSDFsaX0/img/check.svg"
        />
        <div className="border-2" />
        <div onClick={closes}>{ModalButton("확인")}</div>
      </Layout>
    </Modal>
  );
}

export default Notice2Modal;