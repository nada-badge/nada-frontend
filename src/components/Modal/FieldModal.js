import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { SelectButton } from "../../community/SelectButton";
import { List, Border, ButtonList, Cancel, Ok } from "./ModalStyle";

function FieldModal() {
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
          <SelectButton className="button" text="인문/사회" type="unselected" />
          <SelectButton
            className="button"
            text="광고/마케팅"
            type="unselected"
          />
          <SelectButton
            className="button"
            text="디자인/미술"
            type="unselected"
          />
          <SelectButton
            className="button"
            text="경영/경제/무역"
            type="unselected"
          />
          <SelectButton className="button" text="자기계발" type="unselected" />
          <SelectButton className="button" text="IT/전자" type="unselected" />
          <SelectButton className="button" text="자연과학" type="unselected" />
          <SelectButton className="button" text="사진/영상" type="unselected" />
          <SelectButton className="button" text="보건/의료" type="unselected" />
          <SelectButton className="button" text="건축/토목" type="unselected" />
          <SelectButton className="button" text="교육" type="unselected" />
          <SelectButton
            className="button"
            text="봉사/사회공헌"
            type="unselected"
          />
          <SelectButton
            className="button"
            text="페스티벌/행사"
            type="unselected"
          />
          <SelectButton className="button" text="식품/요리" type="unselected" />
          <SelectButton className="button" text="체육" type="unselected" />
          <SelectButton className="button" text="도시/환경" type="unselected" />
          <SelectButton className="button" text="문화/예술" type="unselected" />
          <SelectButton className="button" text="역사/탐방" type="unselected" />
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

export default FieldModal;
