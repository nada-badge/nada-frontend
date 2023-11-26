import ActivityItem from './ActivityItem';
import BoardCardItem from './BoardCardItem';
import styled from 'styled-components';
import RecentActivityItem from './RecentActivityItem';
import { subtitle_01 } from '../../styles/fontStyle';

const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;

  & > h1 {
    color: #000000;
    ${subtitle_01('#000000')}
    left: 16px;
    position: relative;
    padding: 16px 0px; // 커스텀
    margin: 0;
    text-align: left;
  }
`;

const CardListWrapper = styled.div`
  width: calc(375px - 15px); // 화면 넓이 -left
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  overflow-x: scroll;
  position: relative;
  padding-bottom: 12px; // 커스텀
`;

const CardList = ({ title, cards, type, gapSize }) => {
  const typeSet = {
    board: BoardCardItem,
    activity: ActivityItem,
    recentActivity: RecentActivityItem,
  };

  const ItemComponents = typeSet[type];

  return (
    <CardsContainer>
      <h1>{title}</h1>
      <CardListWrapper style={{ gap: gapSize + 'px' }}>
        {cards.map((card) => (
          <ItemComponents key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default CardList;
