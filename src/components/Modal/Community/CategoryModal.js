import { useEffect, useState } from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeForm,
  submitForm,
  postWriteSelector,
  setField,
} from "../../../module/Community/PostWriteStatus";
import { SelectButton } from "../../../community/PostWrite/SelectButton";
import { SelectAllButton } from "../../../community/PostWrite/SelectAllButton";

import { List, Border, ButtonList, Cancel, Ok } from "./ModalStyle";

function CategoryModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector("postWriteSubmit", "category")
  );
  const mainCategory = useSelector(
    postWriteSelector("postWriteSubmit", "mainCategory")
  );

  const status = useSelector(postWriteSelector("postWriteSelect", "category"));

  const buttonAll = { text: "전체" };

  const [buttons, setButtons] = useState([
    { id: 1, text: "공모전" },
    { id: 2, text: "연합동아리" },
    { id: 3, text: "교내동아리" },
    { id: 4, text: "지역동아리" },
    { id: 5, text: "소모임" },
    { id: 6, text: "프로젝트" },
    { id: 7, text: "대외활동" },
    { id: 8, text: "인턴" },
    { id: 9, text: "아르바이트" },
  ]);

  useEffect(() => {
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "category",
        value: Initialization,
      })
    );
    if (mainCategory === "모집") {
      setButtons(buttons.slice(0, 6));
    }
  }, []);

  const SetStatus = () => {
    dispatch(
      submitForm({
        key: "category",
      })
    );

    const value = !(status[0] === buttonAll.text);
    dispatch(
      setField({
        form: "ButtonActive",
        key: "category",
        value: value,
      })
    );

    closeModal();
  };

  const Cancels = () => {
    dispatch(initializeForm({ form: "postWriteSelect", key: "category" }));
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <div>
        <List>
          <SelectAllButton />
          {buttons.map((button, index) => (
            <div key={index}>
              <SelectButton text={button.text} />
            </div>
          ))}
        </List>
        <Border />
        <ButtonList>
          <Cancel onClick={Cancels}>
            <div className="text-wrapper">취소</div>
          </Cancel>
          <Ok onClick={SetStatus}>
            <div className="text-wrapper">확인</div>
          </Ok>
        </ButtonList>
      </div>
    </Modal>
  );
}

export default CategoryModal;
