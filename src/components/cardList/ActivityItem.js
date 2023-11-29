import styled from 'styled-components';
import { caption_01, subtitle_01 } from '../../styles/fontStyle';

const CardContainer = styled.div`
  border-radius: 10px;
  position: relative;
  width: 169px;

  & > .imgContainer {
    background-image: url(https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/rectangle-4727@2x.png);
    background-size: 100% 100%;
    height: 167px;
    position: relative;
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
        ${caption_01('#ffffff')}
        height: 13px;
        left: 8px;
        position: absolute;
        text-align: center;
        top: 6px;
        white-space: nowrap;
      }
    }
  }
  & > .title {
    ${subtitle_01()};
    white-space: inherit;
    position: relative;
    /* ▼ 임의로 지정한 height */
    height: 70px;
    overflow: hidden;
    width: 167px;
    margin: 0;
    padding: 4px 2px;
  }
`;

const ActivityItem = ({ cards }) => {
  return (
    <>
      {cards.map(({ title, Dday }) => (
        <CardContainer>
          <div className="imgContainer">
            <div className="Dday-wrapper">
              <div className="Dday">{`D - ${Dday}`}</div>
            </div>
          </div>
          <p className="title">{title}</p>
        </CardContainer>
      ))}
    </>
  );
};

export default ActivityItem;
