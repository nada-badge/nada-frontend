import styled from 'styled-components';

const MarkerWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 10px;
  left: 157px;
  position: absolute;
  top: 76px;

  & > div {
    background-color: var(--myspec-primarymint-1);
    /* 다른 색 background-color: var(--myspec-gray-scalegray-400); */
    border-radius: 4px;
    height: 8px;
    position: relative;
    width: 8px;
  }
`;

export const SlideMarker = () => {
  return (
    <MarkerWrapper>
      <div className="ellipse" />
      <div className="ellipse-2" />
      <div className="ellipse-2" />
      <div className="ellipse-2" />
    </MarkerWrapper>
  );
};
