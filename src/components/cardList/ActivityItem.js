import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const CardContainer = styled.div`
  border-radius: 10px;
  position: relative;
  width: 169px;
  text-align: left;

  & > .imgContainer {
    background-image: url(https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/rectangle-4727@2x.png);
    background-size: 100% 100%;
    height: 167px;
    position: relative;
    width: 167px;

    & > .Dday {
      box-sizing: border-box;
      padding: 6px 8px;
      background-color: #1363ff;
      border-radius: 8px;
      height: 26px;
      left: 115px;
      position: relative;
      top: 10px;
      width: 41px;
      ${applyFontStyles({ font: 'caption-01', color: '#ffffff' })};
      text-align: center;
    }
  }
  & > .title {
    ${applyFontStyles({ font: 'subtitle-01' })};
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
    box-sizing: border-box;
    height: 51px;
    width: 171px;
    margin: 0;
    padding: 4px 2px;
  }
`;

const ActivityItem = ({ cards }) => {
  return (
    <>
      {cards.length &&
        cards.map(({ activityName, Dday = 7 }, idx) => (
          <CardContainer key={idx}>
            <div className="imgContainer">
              <div className="Dday">{`D - ${Dday}`}</div>
            </div>
            <p className="title">{activityName}</p>
          </CardContainer>
        ))}
    </>
  );
};

export default ActivityItem;
