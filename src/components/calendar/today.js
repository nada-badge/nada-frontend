import styled from 'styled-components';

const TodayWrapper = styled.div`
  & > div {
    color: #ffffff;
    font-family: var(--body-01-font-family);
    font-size: var(--body-01-font-size);
    font-style: var(--body-01-font-style);
    font-weight: var(--body-01-font-weight);
    text-align: center;
    white-space: nowrap;

    p {
      position: relative;
      margin: 0;
      top: -1.5px;
    }
  }
`;

const TodayBox = ({ text }) => {
  return (
    <>
      <TodayWrapper>
        <div>
          <p>{text}</p>
        </div>
      </TodayWrapper>
    </>
  );
};

export default TodayBox;
