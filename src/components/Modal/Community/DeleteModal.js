import Modal from "./Modal";
import useModal from "./useModal";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import client from "../../../lib/api/client";
import { PostDetailSelector } from "../../../module/Community/PostDetail";
import { Layout } from "../../../styles/Community/BarSecModalStyle";

function DeleteModal() {
  const navigate = useNavigate();
  const id = useSelector(PostDetailSelector("_id"));
  const { closeModal, openModal } = useModal();

  const Delete = useCallback(async () => {
    try {
      await client.delete("/community/post", { data: { _id: id } });
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
    }
    openModal({ type: "NoticeModal" });
  }, [id, navigate]);

  const Close = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <div className="title">글을 삭제할까요?</div>
        <div className="border" />
        <p className="content">한 번 삭제한 글은 복구할 수 없어요</p>
        <div className="border-2" />
        <div className="buttonList">
          <div className="cancel" onClick={Close}>
            <div className="text">취소</div>
          </div>
          <div className="delete" onClick={Delete}>
            <div className="text">삭제</div>
          </div>
        </div>
      </Layout>
    </Modal>
  );
}

export default DeleteModal;
