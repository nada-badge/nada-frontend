import Modal from "./Modal";
import useModal from "./useModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../styles/Community/BarSecModalStyle";
import { initializeForm } from "../../../module/Community/PostDetail";

function NoticeModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { closeModal } = useModal();

  const closes = () => {
    console.log("확인버튼이 클릭되었습니다");
    dispatch(initializeForm());
    navigate("/community");
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <div className="text">글이 삭제되었어요</div>
        <div className="border-2" />
        <img
          className="img"
          alt="Check"
          src="https://c.animaapp.com/jSDFsaX0/img/check.svg"
        />
        <div className="border-2" />
        <div className="button" onClick={closes}>
          <div className="ok">확인</div>
        </div>
      </Layout>
    </Modal>
  );
}

export default NoticeModal;
