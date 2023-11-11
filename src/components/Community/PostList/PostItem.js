/** PostItem, postList을 이루는 PostItem. */
import styled from "styled-components";

const PostItem = ({ card }) => {
  const { title, field, category, area, content, postAt } = card;

  return (
    <PostContainer>
      <div className="image" />
      <div className="innerBox">
        <div className="title">{title}</div>
        <div className="text">{content}</div>
        <div className="frame">
          <div className="text-2">{area}</div>
          <div className="ellipse" />
          <div className="text-2">{field}</div>
          <div className="ellipse" />
          <div className="text-2">{category}</div>
          <div className="ellipse" />
          <div className="text-2">{postAt}</div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostItem;

const PostContainer = styled.div`
  height: 90px;
  position: relative;
  width: 345px;
  display: flex;
  flex-direction: row;

  & > .image {
    height: 64px;
    left: 0;
    position: absolute;
    top: 13px;
    width: 64px;
    background-image: url("https://c.animaapp.com/hs22pPSO/img/image-3.svg");
  }

  & > .innerBox {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 269px;
    height: 64px;
    top: 13px;
    left: 76px;

    & > .title {
      color: #000000;
      font-family: var(--subtitle-03-font-family);
      font-size: var(--subtitle-03-font-size);
      font-style: var(--subtitle-03-font-style);
      font-weight: var(--subtitle-03-font-weight);
      letter-spacing: var(--subtitle-03-letter-spacing);
      line-height: var(--subtitle-03-line-height);
      position: relative;
      white-space: nowrap;
      width: 269px;
      text-align: left;
    }

    & > .text {
      color: #000000;
      font-family: var(--body-01-font-family);
      font-size: var(--body-01-font-size);
      font-style: var(--body-01-font-style);
      font-weight: var(--body-01-font-weight);

      letter-spacing: var(--body-01-letter-spacing);
      line-height: var(--body-01-line-height);
      position: relative;
      top: 5px;
      white-space: nowrap;
      width: 268px;
      text-align: left;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    & > .frame {
      align-items: center;
      position: relative;
      margin-left: auto;
      display: flex;
      gap: 4px;
      top: 12px;

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
  }
`;
