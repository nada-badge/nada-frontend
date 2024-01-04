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

export const Logo = styled.img`
  height: 40px;
  position: relative;
  width: 100%;
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
    padding: 12px 250px 11px 12px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  display: flex;
  /* margin-top: 316px; */
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  text-align: center;
  border: none;
  padding: 0;
  width: 100%;

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

//  ---------------------- SocialLogin.js

export const Div3 = styled.div`
  height: 48px;
  left: 0;
  position: absolute;
  top: 212px;
  width: 346px;
`;

export const SocialBtn = styled.div`
  border-radius: 10px;
  height: 48px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 168px;

  &.kakao {
    background-color: #fee500;
    left: 0;

    & > div > div {
      color: #000000;
    }
  }

  &.apple {
    background-color: var(--myspec-gray-scalegray-900);
    left: 178px;

    & > div > div {
      color: var(--myspec-gray-scalewhite);
    }
  }

  & > div {
    align-items: center;
    display: inline-flex;
    gap: 8px;
    left: 39px;
    position: relative;
    top: 15px;
  }

  & > img {
    position: relative;
  }

  & > div > div {
    font-family: var(--caption-02-font-family);
    font-size: var(--caption-02-font-size);
    font-style: var(--caption-02-font-style);
    font-weight: var(--caption-02-font-weight);
    letter-spacing: var(--caption-02-letter-spacing);
    line-height: var(--caption-02-line-height);
    margin-top: -1px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    width: fit-content;
  }
`;

// -------------- LoginFooter

export const Div6 = styled.div`
  position: absolute;
  top: ${(props) => props.$position.top || '0px'};
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 24px;

  & > div {
    align-items: center;
    display: inline-flex;
    gap: 8px;

    :nth-child(1) {
      color: #000000;
      font-family: var(--body-01-font-family);
      font-size: var(--body-01-font-size);
      font-style: var(--body-01-font-style);
      font-weight: var(--body-01-font-weight);
      letter-spacing: var(--body-01-letter-spacing);
      line-height: var(--body-01-line-height);
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }

  & > img {
    height: 12.71px;
    margin-right: -0.71px;
    position: relative;
    width: 7.06px;
  }
`;
