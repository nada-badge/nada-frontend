/** ModalStyle 모달에서 공통적으로 사용하는 스타일 */
import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const List = {
  alignItems: 'center',
  display: 'inline-flex',
  flexFlow: 'row wrap',
  position: 'relative',
  width: '280px',
  gap: '9px',
  boxSizing: 'border-box',
};
export const Border = {
  height: '16px',
  position: 'relative',
  width: '256px',
};

export const ListMain = {
  alignItems: 'flex-start',
  display: 'inline-flex',
  flex: '0 0 auto',
  flexDirection: 'column',
  position: 'relative',
};

export const MainCategory = {
  alignItems: 'center',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1.12px',
  borderColor: 'var(--myspec-gray-scalegray-200)',
  display: 'inline-flex',
  flex: '0 0 auto',
  gap: '142px',
  padding: '12px',
  position: 'relative',
};

export const TextWrapper = {
  ...applyFontStyles({
    font: 'subtitle-02',
  }),
  marginTop: '-1.12px',
  position: 'relative',
  width: 'fit-content',
};

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
