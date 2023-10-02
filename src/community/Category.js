import styled from "styled-components";
import { useSelector } from "react-redux";
import { categoryActiveSelector } from "../module/CommunityStatus";
import { PageBy } from "./pageBy";

const categoryButton = (text) => {
  return (
    <Wrapper>
      <div className="Text">{text}</div>
    </Wrapper>
  );
};

const Category = () => {
  const isOpen = useSelector(categoryActiveSelector);

  return (
    <div>
      <Categorylist>
        {categoryButton("모집")}
        {categoryButton("홍보")}
        {categoryButton("자유")}
      </Categorylist>
      <PageBy text={isOpen} />
    </div>
  );
};

const Categorylist = styled.div`
  display: inline-flex;

  flex: 0 0 auto;
  gap: 12px;
  position: relative;
`;

const Wrapper = styled.div`
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-color: var(--myspec-gray-scalegray-500);
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  height: 24px;
  justify-content: center;
  position: relative;

  & > .Text {
    color: var(--myspec-gray-scalegray-500);
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    margin-top: -2px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export default Category;
