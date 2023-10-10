import React, { useState } from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { useDispatch, useSelector } from "react-redux";
import { postWriteSelector, setField } from "../../module/PostWriteStatus";
import classNames from "classnames";
import {
  ListMain,
  Border,
  ButtonList,
  Cancel,
  Ok,
  MainCategory,
  Img,
} from "./ModalStyle";

function MainCategoryModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const [nowClick, setNowClick] = useState(
    useSelector(postWriteSelector("postWriteSelect", "mainCategory"))
  );

  const OnClick = (status) => {
    setNowClick(status);
  };

  const Output = (text, status) => {
    const active = status === nowClick;
    return (
      <MainCategory
        onClick={() => {
          OnClick(status);
        }}
      >
        <div className="text-wrapper">{text}</div>
        <Img className={classNames("vector", { active })} />
      </MainCategory>
    );
  };

  const SetStatus = () => {
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "mainCategory",
        value: nowClick,
      })
    );
    dispatch(
      setField({
        form: "postWriteActive",
        key: "mainCategory",
        value: true,
      })
    );
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <div>
        <ListMain>
          {Output("모집 게시판", "모집")}
          {Output("홍보 게시판", "홍보")}
          {Output("자유 게시판", "자유")}
        </ListMain>
        <Border />
        <ButtonList>
          <Cancel onClick={SetStatus}>
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
