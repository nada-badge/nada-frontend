import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { SelectButton } from "../../community/SelectButton";
import { List, Border, ButtonList, Cancel, Ok } from "./ModalStyle";
function AreaModal() {
  const { closeModal } = useModal();

  return (
    <Modal onClose={closeModal}>
      <div>
        <List>
          <SelectButton text="전국" type="opened" />
          <SelectButton text="서울" type="unselected" />
          <SelectButton text="부산" type="unselected" />
          <SelectButton text="대구" type="unselected" />
          <SelectButton text="인천" type="unselected" />
          <SelectButton text="광주" type="unselected" />
          <SelectButton text="대전" type="unselected" />
          <SelectButton text="울산" type="unselected" />
          <SelectButton text="경기" type="unselected" />
          <SelectButton text="강원" type="unselected" />
          <SelectButton text="충청" type="unselected" />
          <SelectButton text="경상" type="unselected" />
          <SelectButton text="전라" type="unselected" />
          <SelectButton text="제주" type="unselected" />
          <SelectButton text="세종" type="unselected" />
          <SelectButton text="해외" type="unselected" />
        </List>
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

export default AreaModal;
