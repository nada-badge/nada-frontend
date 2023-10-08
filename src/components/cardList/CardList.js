import ActivityItem from './ActivityItem';
import BoardCardItem from './BoardCardItem';
import styled from 'styled-components';

const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;

  & > h1 {
    color: #000000;
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    left: 16px;
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: relative;
    white-space: nowrap;
    padding: 16px 0px; // 커스텀
    margin: 0;
  }
`;

const CardListWrapper = styled.div`
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  overflow-x: scroll;
  position: relative;
  padding-bottom: 12px; // 커스텀
`;

const CardList = ({ title, cards, type }) => {
  const typeSet = {
    board: BoardCardItem,
    activity: ActivityItem,
  };

  const ItemComponents = typeSet[type];

  return (
    <CardsContainer>
      <h1>{title}</h1>
      <CardListWrapper>
        {cards.map((card) => (
          <ItemComponents key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default CardList;
