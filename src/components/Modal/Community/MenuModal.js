import Modal from "./Modal";
import useModal from "./useModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setField } from "../../../module/Community/postWrite";
import classNames from "classnames";
import useSetButtonActive from "../../community/SetButtonActive";
import ModalButton from "../../community/ModalButton";
import {
  Menu,
  List,
  Border,
  Layout,
} from "../../../styles/Community/BarModalStyle";

export const MenuModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setButtonActive = useSetButtonActive();
  const { closeModal, openModal } = useModal();

  const Output = (text) => {
    const isRed = text === "삭제하기";

    return (
      <Menu>
        <div className={classNames("text-wrapper", { isRed })}>{text}</div>
      </Menu>
    );
  };

  const Update = () => {
    dispatch(setField({ form: "method", key: "isSubmit", value: false }));
    setButtonActive();
    navigate("/community/PostWrite");
    close();
  };

  const MoveToDelete = () => {
    openModal({ type: "DeleteModal" });
  };

  const MoveToShare = () => {
    openModal({ type: "ShareModal" });
  };

  const close = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <List>
          <div onClick={Update}>{Output("수정하기")}</div>
          <div onClick={MoveToShare}>{Output("공유하기")}</div>
          <div onClick={MoveToDelete}>{Output("삭제하기")}</div>
        </List>
        <Border />
        <div onClick={close}>{ModalButton("닫기")}</div>
      </Layout>
    </Modal>
  );
};

export default MenuModal;
