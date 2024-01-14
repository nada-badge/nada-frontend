import styled from 'styled-components';
import React from 'react';

const TitleBox = styled.h1`
  text-align: left;
  color: #000000;
  font-family: 'Pretendard-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  height: 72px;
  letter-spacing: 0;
  line-height: 36px;
  margin: 0;
`;

const Title = ({ text }) => {
  return (
    <TitleBox>
      {text}
      <br />
      입력해 주세요
    </TitleBox>
  );
};

export default React.memo(Title);
