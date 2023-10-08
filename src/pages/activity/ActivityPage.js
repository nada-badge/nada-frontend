import styled from 'styled-components';

const ActivityContainer = styled.div`
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

const ActivityPage = () => {
  return (
    <ActivityContainer>
      {/* 검색창 */}
      {/* 최근 본 활동 */}
      {/*  대외활동 리스트 */}
    </ActivityContainer>
  );
};

export default ActivityPage;
