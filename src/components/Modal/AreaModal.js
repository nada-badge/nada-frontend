import React from "react";
import Modal from "./Modal";
import styled from "styled-components";
import useModal from "./useModal";

function AreaModal() {
  const { closeModal } = useModal();

  return (
    <Modal onClose={closeModal}>
      <h2> 모달창입니다.</h2>
      <p>...</p>
    </Modal>
  );
}

export default AreaModal;
