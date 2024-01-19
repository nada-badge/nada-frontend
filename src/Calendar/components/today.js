import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const TodayWrapper = styled.div`
  & > div {
    ${applyFontStyles({ font: 'body-01', color: '#ffffff' })};
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
