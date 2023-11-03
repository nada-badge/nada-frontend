import {
  Filter,
  TextWarpper,
  Img,
} from "../../../styles/Community/FilterModalStyle";
import classNames from "classnames";
import useModal from "../../../components/Modal/Community/useModal";
import { useSelector, useDispatch } from "react-redux";
import {
  setField,
  postWriteSelector,
} from "../../../module/Community/postWrite";

export const CategoryButton = ({ text }) => {
  const isActive = useSelector(postWriteSelector("ButtonActive", "category"));
  const { openModal } = useModal();
  const dispatch = useDispatch();

  const onClickButton1 = () => {
    openModal({ type: "CategoryModal" });
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "modal",
        value: 2,
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
