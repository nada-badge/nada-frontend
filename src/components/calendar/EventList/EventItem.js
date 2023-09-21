import { setDate } from 'date-fns';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  position: relative;

  & > .title {
    color: #000000;
    font-family: var(--body-01-font-family);
    font-size: var(--body-01-font-size);
    font-style: var(--body-01-font-style);
    font-weight: var(--body-01-font-weight);
    left: 25px;
    letter-spacing: var(--body-01-letter-spacing);
    line-height: var(--body-01-line-height);
    position: absolute;
    top: 11px;
  }

  & > .dateWrapper {
    color: var(--myspec-gray-scalegray-600);
    font-family: var(--caption-02-font-family);
    font-size: var(--caption-02-font-size);
    font-style: var(--caption-02-font-style);
    font-weight: var(--caption-02-font-weight);
    left: 25px;
    letter-spacing: var(--caption-02-letter-spacing);
    line-height: var(--caption-02-line-height);
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
