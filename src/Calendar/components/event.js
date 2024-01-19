import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const EventWrapper = styled.div`
  border-radius: 4px;
  height: 18px;
  overflow: hidden;

  & > div {
    background-color: #ffffff4c;
    height: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      ${applyFontStyles({ font: 'caption-03', color: '#191919' })};
      white-space: nowrap;
    }
  }
`;

const EventBox = ({ text }) => {
  return (
    <>
      <EventWrapper>
        <div>
          <div>{text}</div>
        </div>
      </EventWrapper>
    </>
  );
};

export default EventBox;
