import styled from 'styled-components';

const TitleBox = styled.div`
  height: 80px;
  position: relative;
  width: 345px;
  margin-bottom: 46px;

  & > h1 {
    color: #000000;
    font-family: 'Pretendard-Bold', Helvetica;
    font-size: 24px;
    font-weight: 700;
    height: 72px;
    letter-spacing: 0;
    line-height: 36px;
    margin: 0;
  }
`;

const Title = ({ text }) => {
  return (
    <TitleBox>
      <h1>
        {text}
        <br />
        입력해 주세요
      </h1>
    </TitleBox>
  );
};

export default Title;
