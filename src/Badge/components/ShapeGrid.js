import styled from 'styled-components';

const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 11px;
  padding-bottom: 120px;

  & > div {
    width: 167px;
    aspect-ratio: 1/1;
    border-radius: 20px;
    background-color: var(--myspec-gray-scalegray-100, #f8f8f8);
  }
`;
const ShapeGrid = () => {
  return (
    <GridContainer>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </GridContainer>
  );
};

export default ShapeGrid;
