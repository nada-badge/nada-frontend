/** ModalStyle 모달에서 공통적으로 사용하는 스타일 */
import styled from 'styled-components';
import { applyFontStyles } from './fontStyle';

export const List = styled.div`
  align-items: center;
  border-radius: 20px;
  display: inline-flex;
  flex-flow: row wrap;
  position: relative;
`;

export const Border = styled.div`
  height: 16px;
  position: relative;
  width: 280px;
`;

export const ListMain = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
`;

export const MainCategory = styled.div`
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 1.12px;
  border-color: var(--myspec-gray-scalegray-200);
  display: inline-flex;
  flex: 0 0 auto;
  gap: 142px;
  padding: 12px;
  position: relative;

  & > .text-wrapper {
    ${applyFontStyles({
      font: 'subtitle-02',
    })};
    margin-top: -1.12px;
    position: relative;
    width: fit-content;
  }
`;

export const Img = styled.div`
  height: 9px;
  position: relative;
  width: 16px;
  background-size: 100%;
  background-image: url('https://c.animaapp.com/qQD6JW1B/img/vector-7-2.svg');

  &.active {
    background-image: url('https://c.animaapp.com/NfzrR40k/img/vector-7.svg');
  }
`;
