import { useEffect } from "react";
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
import { List, Border } from "./ModalStyle";
import ModalButtonDiv from "../../Community/ModalButtonDiv";

function AreaModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const Initialization = useSelector(
    postWriteSelector("postWriteSubmit", "area")
  );
  const status = useSelector(postWriteSelector("postWriteSelect", "area"));
  const buttonAll = { text: "전국" };

  const buttons = [
    { id: 1, text: "서울" },
    { id: 2, text: "부산" },
    { id: 3, text: "대구" },
    { id: 4, text: "인천" },
    { id: 5, text: "광주" },
    { id: 6, text: "대전" },
    { id: 7, text: "울산" },
    { id: 8, text: "경기" },
    { id: 9, text: "강원" },
    { id: 10, text: "충청" },
    { id: 11, text: "경상" },
    { id: 12, text: "전라" },
    { id: 13, text: "제주" },
    { id: 14, text: "세종" },
    { id: 15, text: "해외" },
  ];

  useEffect(() => {
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "area",
        value: Initialization,
      })
    );
  }, []);

  const SetStatus = () => {
    dispatch(
      submitForm({
        key: "area",
      })
    );

    const value = !(status[0] === buttonAll.text);
    dispatch(
      setField({
        form: "ButtonActive",
        key: "area",
        value: value,
      })
    );

    closeModal();
  };

  const Cancels = () => {
    dispatch(initializeForm({ form: "postWriteSelect", key: "area" }));
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

        {ModalButtonDiv({
          cancelText: "취소",
          cancel: Cancels,
          actText: "확인",
          act: SetStatus,
          actColor: false,
        })}
      </div>
    </Modal>
  );
}

export default AreaModal;
