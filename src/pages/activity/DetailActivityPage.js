import Thumbnail from '../../containers/activity/Thumbnail.js';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;

  & > div {
    background-color: white;
  }
`;

const DetailActivityPage = () => {
  return (
    <DetailContainer>
      <Thumbnail />
      {/* 상세내용 */}
      {/* 팀원모집 */}
    </DetailContainer>
  );
};

export default DetailActivityPage;
