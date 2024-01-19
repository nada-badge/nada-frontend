import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';

const ItemContainer = styled.div`
  position: relative;

  & > .title {
    ${applyFontStyles({ font: 'body-01', color: '' })};
    left: 25px;
    position: absolute;
    top: 11px;
  }

  & > .dateWrapper {
    ${applyFontStyles({
      font: 'caption-02',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
    left: 25px;
    position: absolute;
    top: 32px;
    white-space: nowrap;
  }
`;

const ColorBox = styled.div`
  background: ${(props) => props.color || '#acd2ff'};
  height: 58px;
  position: relative;
  left: 7px;
  width: 6px;
`;

const EventItem = ({ title, start, end, color }) => {
  return (
    <ItemContainer>
      <ColorBox color={color} />
      <div className="title">{title}</div>
      <div className="dateWrapper">
        {`${start.month}월 ${start.day}일`}
        {end && ` ~ ${end.month}월 ${end.day}일`}
      </div>
    </ItemContainer>
  );
};
export default EventItem;
