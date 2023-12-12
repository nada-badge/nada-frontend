import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

const Title = styled.p`
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
`;

const ActivityItem = ({ cards }) => {
  const CardContainerStyle = {
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '169px',
    textAlign: 'left',
  };

  const imgContainer = {
    backgroundImage:
      'url(https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/rectangle-4727@2x.png)',
    backgroundSize: '100% 100%',
    aspectRatio: '1 / 1',
    position: 'relative',
  };

  const DdayStyle = {
    ...applyFontStyles({ font: 'caption-01', color: 'white' }),
    boxSizing: 'border-box',
    padding: '6px 8px',
    backgroundColor: '#1363ff',
    borderRadius: '8px',
    height: '26px',
    margin: '10px',
    float: 'right',
    width: '41px',
    textAlign: 'center',
  };

  return (
    <>
      {cards.length &&
        cards.map(({ activityName, Dday = 7 }, idx) => (
          <div style={CardContainerStyle} key={idx}>
            <div style={imgContainer}>
              <div style={DdayStyle}>{`D - ${Dday}`}</div>
            </div>
            <Title>{activityName}</Title>
          </div>
        ))}
    </>
  );
};

export default ActivityItem;
