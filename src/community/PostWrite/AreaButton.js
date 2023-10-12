import { Filter, TextWarpper, Img } from "../../styles/FilterModalStyle";
import classNames from "classnames";
import useModal from "../../components/Modal/useModal";
import { useSelector, useDispatch } from "react-redux";
import { setField, postWriteSelector } from "../../module/PostWriteStatus";

export const AreaButton = ({ text }) => {
  const isActive = useSelector(postWriteSelector("ButtonActive", "area"));
  const { openModal } = useModal();
  const dispatch = useDispatch();

  const onClickButton1 = () => {
    openModal({ type: "AreaModal" });
    dispatch(
      setField({
        form: "postWriteSelect",
        key: "modal",
        value: 0,
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
