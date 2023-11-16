/** FieldButton 분야 버튼 */
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import useModal from "../../../components/Modal/Community/useModal";
import {
  Filter,
  TextWarpper,
  Img,
} from "../../../styles/Community/FilterModalStyle";
import {
  setField,
  postWriteSelector,
} from "../../../modules/Community/postWrite";

export const FieldButton = ({ text }) => {
  const isActive = useSelector(postWriteSelector("ButtonActive", "field"));
  const { openModal } = useModal();
  const dispatch = useDispatch();

  const onClickButton1 = () => {
    openModal({ type: "FieldModal" });
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "modal",
        value: 1,
      })
    );
  };

  return (
    <Filter className={classNames({ isActive })} onClick={onClickButton1}>
      <TextWarpper className={classNames({ isActive })}>{text}</TextWarpper>
      <Img className={classNames({ isActive })} />
    </Filter>
  );
};
