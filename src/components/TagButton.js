import styled from "styled-components";
import { useSelector } from "react-redux";

const TagButtons = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { area, field, category } = PostDetail;
  const combinedArray = [...area, ...field];
  combinedArray.push(category);

  return (
    <TagList>
      {combinedArray.map((tag) => (
        <TagButton key={tag} tag={tag} />
      ))}
    </TagList>
  );
};

export default TagButtons;

const TagButton = ({ tag }) => {
  return (
    <Button>
      <TextWarpper>{tag}</TextWarpper>
    </Button>
  );
};

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-warp: wrap;
  gap: 8px;
`;

export const Button = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;
`;

export const TextWarpper = styled.div`
  font-family: var(--body-01-font-family);
  font-size: var(--body-01-font-size);
  font-style: var(--body-01-font-style);
  font-weight: var(--body-01-font-weight);
  letter-spacing: var(--body-01-letter-spacing);
  line-height: var(--body-01-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  color: var(--myspec-gray-scalegray-600);
`;
