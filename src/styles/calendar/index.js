import styled from 'styled-components';
import { title_02 } from '../fontStyle';

export const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > .CalendarWrapper {
    width: calc(100vw - 30px);
    min-height: calc(100vh - 80px - 85px);
    padding-bottom: 85px;
    overflow: auto;

    @media screen and (max-width: 345px) {
      width: 100%;
    }

    @media screen and (min-width: 376px) {
      width: 375px;
    }
  }
`;

// ----------------------------------------------------------
// **** DetailEvent.js : 캘린더에서 날짜 클릭시 모달
export const ModalBackGround = styled.div`
  background-color: rgba(136, 136, 136, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 375px;
  height: 100%;
  position: fixed;
  z-index: 3;

  & > .EventsContainer {
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px -4px 12px #0000000a;
    height: 400px;
    overflow: hidden;
    position: fixed;
    top: 206px;
    width: 358px;

    & > h2 {
      color: #000000;
      ${title_02()}
      text-align: center;
      top: 25px;
      white-space: nowrap;
      width: 100%;
    }
  }
`;
