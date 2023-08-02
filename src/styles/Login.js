import styled from 'styled-components';

export const Frame2 = styled.form`
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 345px;
`;

export const InputBox = styled.div`
  border: 2px solid;
  border-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 44px;
  left: 0;
  overflow: hidden;
  position: absolute;

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

export const EmailBox = styled(InputBox)`
  top: 0;
  width: 345px;
`;

export const PasswordBox = styled(InputBox)`
  top: 56px;
  width: 345px;
`;

export const ButtonBox = styled.button`
  background-color: var(--myspec-primaryblue-1);
  border-radius: 10px;
  height: 64px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 132px;
  width: 345px;
  border: none;
`;

export const LoginBtn = styled.div`
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
`;

export const Div3 = styled.div`
  height: 48px;
  left: 0;
  position: absolute;
  top: 212px;
  width: 346px;
`;

export const BtnKakao = styled.div`
  background-color: #fee500;
  border-radius: 10px;
  height: 48px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 168px;
`;
export const Div4 = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  left: 39px;
  position: relative;
  top: 15px;
`;

export const vector = styled.div`
  height: 15px;
  position: relative;
  width: 16px;
`;
export const TextWrapper3 = styled.div`
  color: #000000;
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
`;

export const BtnApple = styled.div`
  background-color: var(--myspec-gray-scalegray-900);
  border-radius: 10px;
  height: 48px;
  left: 178px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 168px;
`;

export const Div5 = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 8px;
  left: 39px;
  position: relative;
  top: 14px;
`;

export const img = styled.div`
  height: 19px;
  position: relative;
  width: 15px;
`;

export const TextWrapper4 = styled.div`
  color: var(--myspec-gray-scalewhite);
  font-family: var(--caption-02-font-family);
  font-size: var(--caption-02-font-size);
  font-style: var(--caption-02-font-style);
  font-weight: var(--caption-02-font-weight);
  letter-spacing: var(--caption-02-letter-spacing);
  line-height: var(--caption-02-line-height);
  margin-top: -0.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;
