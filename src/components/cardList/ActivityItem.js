import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';
import { Link } from 'react-router-dom';

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

const ImgContainer = styled.div`
  background-image: ${(props) =>
    `url(
      ${props.$imgsrc})`};
  background-size: 100% 100%;
  aspect-ratio: 1 / 1;
  position: relative;
`;

const ActivityItem = ({ cards, style }) => {
  const CardContainerStyle = {
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '169px',
    textAlign: 'left',
    textDecoration: 'none',
    ...style,
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
    minWidth: '41px',
    textAlign: 'center',
  };

  const CardWrapper = (card) => (
    <Link
      style={{ style, textDecorationLine: 'none'}}
      key={card.idx}
      to={`/activity/${card._id}`}
    >
      <ImgContainer $imgsrc={card.imageUrl}>
        <div style={DdayStyle}>{`D - ${card.Dday}`}</div>
      </ImgContainer>
      <Title>{card.activityName}</Title>
    </Link>
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
