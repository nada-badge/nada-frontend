import { useDispatch, useSelector } from "react-redux";
import { setSubmit, setField } from "../../module/Community/postWrite";

function useSetButtonActive() {
  const dispatch = useDispatch();
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);

  const setButtonActive = () => {
    dispatch(setSubmit({ value: PostDetail }));
    dispatch(setField({ form: "method", key: "isSubmit", value: false }));
    const valueArea = !(PostDetail.area[0] === "전국");
    const valueField = !(PostDetail.field[0] === "전체");
    const valueCategory = !(PostDetail.category === "전체");
    dispatch(
      setField({
        form: "ButtonActive",
        key: "mainCategory",
        value: true,
      })
    );
    dispatch(
      setField({
        form: "ButtonActive",
        key: "area",
        value: valueArea,
      })
    );
    dispatch(
      setField({
        form: "ButtonActive",
        key: "field",
        value: valueField,
      })
    );
    dispatch(
      setField({
        form: "ButtonActive",
        key: "category",
        value: valueCategory,
      })
    );
  };

  return setButtonActive;
}

export default useSetButtonActive;
