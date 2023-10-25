import { useSelector, useDispatch } from "react-redux";
import {
  communitySelector,
  setField,
  initializeForm,
  initializeSub,
} from "../module/Community/CommunityStatus";
import classNames from "classnames";
import { Categorylist, Wrapper } from "../styles/CategoryStyle";

const Category = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(communitySelector("buttonSelect", "maincategory"));

  const onClicks = (text) => {
    if (!(isOpen === text)) {
      dispatch(
        setField({ form: "buttonSelect", key: "maincategory", value: text })
      );
      dispatch(initializeSub());
      dispatch(initializeForm({ form: "buttonSelect", key: "filter" }));
    }
  };

  const categoryButton = (text) => {
    const isActive = text === isOpen;
    return (
      <Wrapper
        className={classNames({ isActive })}
        onClick={() => onClicks(text)}
      >
        <div className={classNames("Text", { isActive })}>{text}</div>
      </Wrapper>
    );
  };

  return (
    <div>
      <Categorylist>
        {categoryButton("모집")}
        {categoryButton("홍보")}
        {categoryButton("자유")}
      </Categorylist>
    </div>
  );
};

export default Category;
