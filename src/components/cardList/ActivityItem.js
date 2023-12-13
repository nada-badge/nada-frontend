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

const ActivityItem = ({ cards, style }) => {
  const CardContainerStyle = {
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '169px',
    textAlign: 'left',
    ...style,
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

  const CardWrapper = (card) => (
    <div style={style} key={card.idx}>
      <div style={imgContainer}>
        <div style={DdayStyle}>{`D - ${card.Dday}`}</div>
      </div>
      <Title>{card.activityName}</Title>
    </div>
  );

  return (
    <>
      {Array.isArray(cards)
        ? cards.length &&
          cards.map((card, idx) => (
            <div style={CardContainerStyle} key={idx}>
              {CardWrapper(card)}
            </div>
          ))
        : cards && CardWrapper(cards)}
    </>
  );
};

export default ActivityItem;
