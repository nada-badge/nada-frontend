import React, { useState } from "react";
import useSubmit from "../../module/queries/PostWriteQuery";
import { AreaButton } from "./AreaButton";
import { FieldButton } from "./FieldButton";
import "../style.css";
import { MainCategoryButton } from "./MainCategoryButton";
import { CategoryButton } from "./CategoryButton";
import {
  PostContainer,
  Title,
  Frame,
  Content,
  Border,
  AreaImages,
} from "../../styles/PostWriteStyle";

export const PostWrite = () => {
  //header
  //title
  //filter
  //contents
  //gallery

  const { mutate } = useSubmit();

  const [board, setBoard] = useState({
    // 1)보드값을 ""로 초기화
    title: "",
    field: "",
    category: "",
    area: "",
    content: "",
    mainCategory: "",
  });

  const onChange = (event) => {
    const { value, name } = event.target; //2) event.target에서 name과 value만 가져오기

    setBoard({
      // 3) 해당 name에 value값 할당
      ...board,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    //5) 폼을 제출하여 게시물 등록하기 위한 mutate 호출
    e.preventDefault();
    const title = e.target.title.value;
    const field = e.target.field.value;
    const category = e.target.category.value;
    const area = e.target.area.value;
    const content = e.target.content.value;
    const mainCategory = e.target.mainCategory.value;

    if (title && mainCategory && field && category && area && content) {
      mutate({
        title,
        mainCategory,
        field,
        category,
        area,
        content,
      });
    }
  };

  return (
    <PostContainer>
      <form onSubmit={onSubmit}>
        <Title>
          <input
            className="div"
            name="title"
            onChange={onChange}
            value={board.title}
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
            value={board.content}
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
        <div>테스트 제출 버튼</div>
      </form>
    </PostContainer>
  );
};
