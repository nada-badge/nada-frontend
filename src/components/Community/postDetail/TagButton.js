/** TagButton area, field, category 정보를 태그 형식으로 출력하는 컴포넌트 */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { body_01 } from '../../../styles/fontStyle';

const TagButtons = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { area, field, category } = PostDetail;
  const combinedArray = [...area, ...field, category];

  const TagButton = ({ tag }) => {
    return (
      <Button>
        <TextWarpper>{tag}</TextWarpper>
      </Button>
    );
  };

  return (
    <TagList>
      {combinedArray.map((tag) => (
        <TagButton key={tag} tag={tag} />
      ))}
    </TagList>
  );
};

export default TagButtons;

export const TagList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
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
  ${body_01('var(--myspec-gray-scalegray-600)')}
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;
