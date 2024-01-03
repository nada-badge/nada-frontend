import styled from 'styled-components';

export const Border = styled.div`
  height: 16px;
  position: relative;
`;

export const Contents = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  height: 546px;
  position: relative;
  width: 375px;
  box-sizing: border-box;
  padding: 12px 15px;

  & > .Content {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    left: 15px;
    position: relative;
    top: 12px;
  }
`;
