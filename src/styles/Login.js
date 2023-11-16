import styled from 'styled-components';

// -------------------------- LoginPage.js

export const LoginBox = styled.div`
  background-color: #ffffff;
  border: 1px none;
  width: 100vmin;
  @media screen and (min-width: calc(375px * 3)) {
    width: 30vw;
  }
`;

export const LogoBox = styled.div`
  padding-top: calc(100% / 812 * 220);
  height: 40px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  width: 345px;
`;

export const Logo = styled.img`
  height: 40px;
  position: relative;
  width: 100%;
`;

// ---------------------------AuthForm.js

export const InputBox = styled.div`
  border: 2px solid;
  border-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 44px;
  left: 0;
  overflow: hidden;
  position: absolute;

  &.email {
    top: 0;
    width: 345px;
  }

  &.password {
    top: 56px;
    width: 345px;
  }

  & > input {
    color: var(--myspec-gray-scalegray-600);
    font-family: var(--body-01-font-family);
    font-size: var(--body-01-font-size);
    font-style: var(--body-01-font-style);
    font-weight: var(--body-01-font-weight);
    height: 21px;
    left: 12px;
    letter-spacing: var(--body-01-letter-spacing);
    line-height: var(--body-01-line-height);
    position: absolute;
    top: 10px;
    white-space: nowrap;
    border: none;
    outline: none;
  }
`;

export const LoginBtn = styled.button`
  background-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 64px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.$position.top || 0}px;
  width: 345px;
  border: none;

  &.team {
    background-color: var(--myspec-gray-scalegray-600);
  }

  & > div {
    color: #ffffff;
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    height: 24px;
    left: 138px;
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: absolute;
    text-align: center;
    top: 19px;
    white-space: nowrap;
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
