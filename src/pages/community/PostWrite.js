import { useState } from "react";
import useSubmit from "../../module/queries/PostWriteQuery";
import { useSelector } from "react-redux";
import { initializeAll } from "../../module/PostWriteStatus";
import { useDispatch } from "react-redux";
import { AreaButton } from "../../community/PostWrite/AreaButton";
import { FieldButton } from "../../community/PostWrite/FieldButton";
import { MainCategoryButton } from "../../community/PostWrite/MainCategoryButton";
import { CategoryButton } from "../../community/PostWrite/CategoryButton";
import {
  PostContainer,
  Title,
  Frame,
  Content,
  Border,
  AreaImages,
} from "../../styles/PostWriteStyle";

const PostWrite = () => {
  const { mutate } = useSubmit();
  const dispatch = useDispatch();

  const postwrite = useSelector(({ postwrite }) => postwrite.postWriteSubmit);
  const { mainCategory, area, field, category } = postwrite;
  const [inputValue, setInputValue] = useState({ title: "", content: "" });

  const onChange = (event) => {
    const { value, name } = event.target; //2) event.target에서 name과 value만 가져오기
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const OnSubmit = (e) => {
    //5) 폼을 제출하여 게시물 등록하기 위한 mutate 호출
    e.preventDefault();
    const userEmail = "20230904@nate.com";
    const userName = "오늘닉네임";
    const mainCategorys = mainCategory;
    const categorys = category;
    const fields = field;
    const areas = area;
    const title = e.target.title.value;
    const content = e.target.content.value;

    dispatch(initializeAll());

    mutate({
      userEmail,
      userName,
      mainCategorys,
      categorys,
      fields,
      areas,
      title,
      content,
    });
  };

  return (
    <PostContainer>
      <form onSubmit={OnSubmit}>
        <Title>
          <input
            className="div"
            name="title"
            onChange={onChange}
            value={inputValue.title}
            placeholder="제목을 입력하세요"
            required
          />
        </Title>
        <Border />
        <Frame>
          <MainCategoryButton />
          <AreaButton text="지역" Modalname="AreaModal" state="Area" />
          <FieldButton text="분야" Modalname="FieldModal" state="Field" />
          <CategoryButton
            text="종류"
            Modalname="CategoryModal"
            state="Category"
          />
        </Frame>
        <Content>
          <input
            className="text"
            name="content"
            onChange={onChange}
            value={inputValue.content}
            placeholder="내용을 입력하세요"
            required
          />
        </Content>

        <Border />
        <AreaImages>
          <div className="images">
            <div className="image">
              <div className="overlap-group">
                <div className="rectangle" />
                <img
                  className="img"
                  alt="Vector"
                  src="https://c.animaapp.com/prsgtMdH/img/vector-12.svg"
                />
                <div className="ellipse" />
                <div className="group">
                  <img
                    className="vector-2"
                    alt="Vector"
                    src="https://c.animaapp.com/prsgtMdH/img/vector.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </AreaImages>
        <button>테스트 제출 버튼</button>
      </form>
    </PostContainer>
  );
};

export default PostWrite;
