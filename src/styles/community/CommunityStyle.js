import styled from 'styled-components';

export const CommunityPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;
  text-align: left;
  gap: 12px 0px;
  background-color: var(--myspec-gray-scalegray-100);
  margin: 0px auto;
`;

export const Border = styled.div`
  height: 16px;
  position: relative;
`;

export const Contents = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 546px;
  position: relative;
  width: 375px;

  & > .Content {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    left: 15px;
    position: relative;
    top: 12px;
  }
`;
