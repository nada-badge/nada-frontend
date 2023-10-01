import styled from 'styled-components';

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
      color: #191919;
      font-family: var(--caption-03-font-family);
      font-size: var(--caption-03-font-size);
      font-style: var(--caption-03-font-style);
      font-weight: var(--caption-03-font-weight);
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
