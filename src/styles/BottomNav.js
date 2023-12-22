/*BottomNav 하단 네비게이션 바의 styled components */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { applyFontStyles } from './fontStyle';

//하단바를 아래 위치하기
export const Navi = styled.nav`
  background-color: #ffffff;
  border-color: #0000000f;
  border-top-style: solid;
  border-top-width: 1px;
  height: 84px;
  position: fixed;
  width: 375px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 1;
`;

//하단바의 각 버튼 요소
export const NavLinks = styled(NavLink)`
  height: 42px;
  position: relative;
  top: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  gap: 3px;
  &:link {
    text-decoration: none;
  }
`;

//개별 버튼의 텍스트 설정
export const Text = styled.div`
${applyFontStyles({
  font: 'caption-01',
  color: 'var(--myspec-gray-scalegray-600)',
})};
  position: relative;
  text-align: center;

  &.isActive {
    color: var(--myspec-primaryblue-1);
  }
  }
`;
