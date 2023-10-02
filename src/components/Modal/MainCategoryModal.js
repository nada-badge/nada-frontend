import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import {
  ListMain,
  Border,
  ButtonList,
  Cancel,
  Ok,
  MainCategory,
} from "./ModalStyle";

function MainCategoryModal() {
  const { closeModal } = useModal();

  const output = (text) => {
    return (
      <MainCategory>
        <div className="text-wrapper">{text}</div>
        <img
          className="vector"
          alt="Vector"
          src="https://c.animaapp.com/NfzrR40k/img/vector-7.svg"
        />
      </MainCategory>
    );
  };

  return (
    <Modal onClose={closeModal}>
      <div>
        <ListMain>
          {output("모집 게시판")}
          {output("홍보 게시판")}
          {output("자유 게시판")}
        </ListMain>
        <Border />
        <ButtonList>
          <Cancel onClick={closeModal}>
            <div className="text-wrapper">취소</div>
          </Cancel>
          <Ok>
            <div className="text-wrapper">확인</div>
          </Ok>
        </ButtonList>
      </div>
    </Modal>
  );
}

export default MainCategoryModal;
