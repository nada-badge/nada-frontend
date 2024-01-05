import styled from 'styled-components';
import { applyFontStyles } from './fontStyle';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 375px;
  margin: 0px auto;
  gap: 24px;

  & > .backBtnWrapper {
    padding: 17px 8px 8px 8px;
    width: fit-content;
  }
`;

// -----------EmailForm.js

export const Div = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 16px;
  width: 345px;
`;

export const ErrorMessage = styled.div`
  ${applyFontStyles({ font: 'body-02' })}
  margin-top: -1px;
  position: relative;
  width: fit-content;
`;
