import { useSelector } from 'react-redux';
// 뱃지 모양 보여주는 그리드 컴포넌트
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
const ShapeGrid = ({ onClick }) => {
  const { index: selected } = useSelector(({ badge }) => badge.shape);
  const handleClick = (e) => {
    const { dataset } = e.currentTarget;
    onClick(dataset);
  };
  const array = Array.from({ length: 6 }, () => 0);
  return (
    <GridContainer>
      {array.map((el, index) => (
        <div
          className={index === selected ? 'active' : ''}
          onClick={(e) => handleClick(e)}
          data-name={'shape'}
          key={index}
          data-value={index}
        >
          {el}
        </div>
      ))}
    </GridContainer>
  );
};

export default ShapeGrid;
