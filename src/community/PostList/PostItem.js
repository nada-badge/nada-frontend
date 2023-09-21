import styled from "styled-components";

const PostContainer = styled.div`
  height: 90px;
  position: relative;
  width: 345px;

  & > .title {
    color: #000000;
    font-family: var(--subtitle-03-font-family);
    font-size: var(--subtitle-03-font-size);
    font-style: var(--subtitle-03-font-style);
    font-weight: var(--subtitle-03-font-weight);
    left: 76px;
    letter-spacing: var(--subtitle-03-letter-spacing);
    line-height: var(--subtitle-03-line-height);
    position: absolute;
    top: 12px;
    white-space: nowrap;
    width: 269px;
    padding: 0px 12px;
    text-align: left;
  }

  & > .text {
    color: #000000;
    font-family: var(--body-01-font-family);
    font-size: var(--body-01-font-size);
    font-style: var(--body-01-font-style);
    font-weight: var(--body-01-font-weight);
    left: 76px;
    letter-spacing: var(--body-01-letter-spacing);
    line-height: var(--body-01-line-height);
    position: absolute;
    top: 36px;
    white-space: nowrap;
    width: 268px;
    padding: 0px 12px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  & > .image {
    height: 64px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 64px;
    background-image: url("https://c.animaapp.com/hs22pPSO/img/image-3.svg");
  }

  & > .frame {
    align-items: center;
    display: inline-flex;
    gap: 4px;
    left: 187px;
    position: absolute;
    top: 62px;

    & > .text-2 {
      color: var(--myspec-gray-scalegray-600);
      font-family: var(--caption-03-font-family);
      font-size: var(--caption-03-font-size);
      font-style: var(--caption-03-font-style);
      font-weight: var(--caption-03-font-weight);
      letter-spacing: var(--caption-03-letter-spacing);
      line-height: var(--caption-03-line-height);
      margin-top: -1px;
      position: relative;
      text-align: right;
      white-space: nowrap;
      width: fit-content;
    }
    & > .ellipse {
      background-color: var(--myspec-gray-scalegray-600);
      border-radius: 1px;
      height: 2px;
      position: relative;
      width: 2px;
    }
  }
`;

const PostItem = ({ card }) => {
  const { title, field, category, area, text, postAt } = card;

  return (
    <PostContainer>
      <div className="image" />
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className="frame">
        <div className="text-2">{area}</div>
        <div className="ellipse" />
        <div className="text-2">{field}</div>
        <div className="ellipse" />
        <div className="text-2">{category}</div>
        <div className="ellipse" />
        <div className="text-2">{postAt}</div>
      </div>
    </PostContainer>
  );
};

export default PostItem;
