import Modal from "./Modal";
import useModal from "./useModal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setField } from "../../../module/Community/PostWriteStatus";
import classNames from "classnames";
import {
  Menu,
  List,
  Border,
  Close,
  Layout,
} from "../../../styles/Community/BarModalStyle";

export const MenuModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    navigate("/community/PostWrite");
    Closes();
  };

  const MoveToDelete = () => {
    openModal({ type: "DeleteModal" });
  };

  const Closes = () => {
    closeModal();
  };

  return (
    <Modal onClose={closeModal}>
      <Layout>
        <List>
          <div onClick={Update}>{Output("수정하기")}</div>
          {Output("공유하기")}
          <div onClick={MoveToDelete}>{Output("삭제하기")}</div>
        </List>
        <Border />
        <Close onClick={Closes}>
          <div className="text-wrapper">취소</div>
        </Close>
      </Layout>
    </Modal>
  );
};

export default MenuModal;
