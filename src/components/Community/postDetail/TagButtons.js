/** TagButton region, field, category 정보를 태그 형식으로 출력하는 컴포넌트 */
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TagButton from '../../common/TagButton';

const TagButtons = () => {
  const PostDetail = useSelector(({ postdetail }) => postdetail.PostDetail);
  const { region, field, category } = PostDetail;
  const combinedArray = [...region, ...field, category];

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
