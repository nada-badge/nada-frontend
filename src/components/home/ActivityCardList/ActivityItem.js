import styled from 'styled-components';

const CardContainer = styled.div`
  height: 213px;
  position: relative;
  width: 169px;

  & > .imgContainer {
    background-image: url(https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/rectangle-4727@2x.png);
    background-size: 100% 100%;
    height: 167px;
    left: 0;
    position: absolute;
    top: 0;
    width: 167px;

    & > .Dday-wrapper {
      background-color: #1363ff;
      border-radius: 8px;
      height: 26px;
      left: 115px;
      position: relative;
      top: 10px;
      width: 41px;

      & > .Dday {
        color: #ffffff;
        font-family: var(--caption-01-font-family);
        font-size: var(--caption-01-font-size);
        font-style: var(--caption-01-font-style);
        font-weight: var(--caption-01-font-weight);
        height: 13px;
        left: 8px;
        letter-spacing: var(--caption-01-letter-spacing);
        line-height: var(--caption-01-line-height);
        position: absolute;
        text-align: center;
        top: 6px;
        white-space: nowrap;
      }
    }
  }
  & > .title {
    color: var(--gray-900);
    font-family: var(--sub-title-01-font-family);
    font-size: var(--sub-title-01-font-size);
    font-style: var(--sub-title-01-font-style);
    font-weight: var(--sub-title-01-font-weight);
    height: 42px;
    left: 0;
    letter-spacing: var(--sub-title-01-letter-spacing);
    line-height: var(--sub-title-01-line-height);
    position: absolute;
    top: 171px;
    width: 167px;
  }
`;

const ActivityItem = ({ card }) => {
  const { title, Dday } = card;

  return (
    <CardContainer>
      <div className="imgContainer">
        <div className="Dday-wrapper">
          <div className="Dday">{`D - ${Dday}`}</div>
        </div>
      </div>
      <p className="title">{title}</p>
    </CardContainer>
  );
};

export default ActivityItem;
