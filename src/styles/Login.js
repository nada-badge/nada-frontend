import styled from 'styled-components';
import { applyFontStyles } from './fontStyle';

// -------------------------- LoginPage.js

export const LoginBox = styled.div`
  background-color: #ffffff;
  border: 1px none;
  width: 375px;

  & > svg {
    display: flex;
    padding-top: 220px;
    margin: 0 auto;
    position: relative;
  }
`;

// ---------------------------AuthForm.js

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > input {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-600)',
    })}
    border-radius: 10px;
    background: var(--myspec-Gray-scale-Gray-200, #f2f2f2);
    padding: 12px 11px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  text-align: center;
  border: none;
  padding: 0;
  width: 100%;

  &:disabled {
    opacity: 0.3;
  }

  & > a,
  div {
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    ${applyFontStyles({ font: 'subtitle-01', color: '#fff' })}
    text-decoration: none;

    &:nth-child(1) {
      background: var(--myspec-primaryblue-1, #1363ff);
    }

    &:nth-child(2) {
      background: var(--myspec-gray-scalegray-600);
    }
  }
`;

// -------------- LoginFooter

export const FooterWrapper = styled.div`
  display: flex;
  gap: ${(props) => `${props.$gap}px`};
  ${applyFontStyles({
    font: 'body-01',
  })}

  & > div {
    align-items: center;
    display: flex;
    gap: 8px;
    justify-content: center;

    & > a {
      text-decoration: none;
    }
  }

  & > .LoginBtn {
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
  }
`;
