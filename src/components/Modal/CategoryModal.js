import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { SelectButton } from "../../community/SelectButton";
import { List, Border, ButtonList, Cancel, Ok } from "./ModalStyle";

function CategoryModal() {
  const { closeModal } = useModal();

  return (
    <Modal onClose={closeModal}>
      <div>
        <List>
          <SelectButton
            className="button"
            hasVector={false}
            text="전체"
            type="opened"
          />
          <SelectButton className="button" text="공모전" type="unselected" />
          <SelectButton
            className="button"
            text="연합 동아리"
            type="unselected"
          />
          <SelectButton
            className="button"
            text="교내 동아리"
            type="unselected"
          />
          <SelectButton
            className="button"
            text="지역 동아리"
            type="unselected"
          />
          <SelectButton className="button" text="소모임" type="unselected" />
          <SelectButton className="button" text="프로젝트" type="unselected" />
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

export default CategoryModal;
