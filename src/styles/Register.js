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

// -----------EmailForm.js

export const Div = styled.div`
  height: fit-content;
  left: 15px;
  position: absolute;
  top: 104px;
  width: 345px;
`;

export const InputWrapper = styled.div`
  border: 2px solid;
  border-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 44px;
  overflow: hidden;
  position: relative;
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

// ---------------------PasswordForm.js

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  position: relative;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;
