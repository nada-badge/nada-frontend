import styled from 'styled-components';

export const Frame = styled.div`
  height: 501px;
  position: relative;
  width: 375px;

  & > .BackBtn {
    height: 88px;
    left: 0;
    position: absolute;
    top: 0;
    width: 375px;
  }
`;

export const ErrorMessage = styled.div`
  color: #000000;
  font-family: var(--body-02-font-family);
  font-size: var(--body-02-font-size);
  font-style: var(--body-02-font-style);
  font-weight: var(--body-02-font-weight);
  letter-spacing: var(--body-02-letter-spacing);
  line-height: var(--body-02-line-height);
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

// -----------EmailForm.js

export const Div = styled.div`
  height: fit-content;
  left: 15px;
  position: absolute;
  top: 104px;
  width: 345px;
`;

export const Title = styled.div`
  height: 80px;
  left: 0;
  position: absolute;
  top: 0;
  width: 345px;

  & > h1 {
    color: #000000;
    font-family: 'Pretendard-Bold', Helvetica;
    font-size: 24px;
    font-weight: 700;
    height: 72px;
    left: 0;
    letter-spacing: 0;
    line-height: 36px;
    position: absolute;
    top: 7px;
  }
`;

export const InputWrapper = styled.div`
  border: 2px solid;
  border-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 44px;
  left: ${(props) => props.$position.left || 0}px;
  overflow: hidden;
  position: absolute;
  top: ${(props) => props.$position.top || 0}px;
  width: 345px;

  & > input {
    color: var(--myspec-gray-scalegray-900);
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

export const Caution = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  left: 0;
  position: absolute;
  top: 182px;

  :nth-child(1) {
    border: 2px solid;
    border-color: #f74646;
    border-radius: 10px;
    height: 20px;
    position: relative;
    width: 20px;
  }

  & > img {
    height: 10px;
    left: 7px;
    position: absolute;
    top: 3px;
    width: 2px;
  }
`;

export const ButtonBox = styled.button`
  & {
    background-color: #1363ff;
    border-radius: 10px;
    height: 55px;
    left: 0;
    opacity: 0.3;
    position: absolute;
    top: 342px;
    width: 345px;
    border: none;

    & > div {
      color: var(--myspec-gray-scalewhite);
      font-family: var(--title-01-font-family);
      font-size: var(--title-01-font-size);
      font-style: var(--title-01-font-style);
      font-weight: var(--title-01-font-weight);
      height: 27px;
      left: 156px;
      letter-spacing: var(--title-01-letter-spacing);
      line-height: var(--title-01-line-height);
      position: absolute;
      text-align: center;
      top: 13px;
      white-space: nowrap;
    }
  }
`;

// ---------------------PasswordForm.js

export const Form = styled.form`
  & > div {
    position: relative;
    top: 126px;
  }
`;

export const CheckListBox = styled.div`
  height: 21px;
  left: 0;
  position: absolute;
  top: 56px;
  width: 323px;
`;

export const CheckList = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  left: ${(props) => props.$position.left || 0}px;
  position: absolute;
  top: ${(props) => props.$position.top || 0}px;

  & > img {
    height: 11.09px;
    margin-left: -0.67px;
    position: relative;
    width: 16.36px;
  }
`;
