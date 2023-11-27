import ActivityItem from './ActivityItem';
import BoardCardItem from './BoardCardItem';
import styled from 'styled-components';
import RecentActivityItem from './RecentActivityItem';
import { BadgeItem } from './BadgeItem';
import { applyFontStyles } from '../../styles/fontStyle';

const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;
`;

const Title = styled.div`
  ${(props) => applyFontStyles({ font: props.fontStyle, color: '' })}
  left: 16px;
  position: relative;
  padding: 16px 0px; // 커스텀
  margin: 0;
  text-align: left;
`;

const CardListWrapper = styled.div`
  width: calc(375px - 15px); // 화면 넓이 - padding-left
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  overflow-x: scroll;
  position: relative;
  padding-bottom: 12px; // 커스텀
`;

const CardList = ({ title, cards, type, title_font }) => {
  const typeSet = {
    board: BoardCardItem,
    activity: ActivityItem,
    recentActivity: RecentActivityItem,
    badge: BadgeItem,
  };

  const ItemComponents = typeSet[type];

  return (
    <CardsContainer>
      <Title fontStyle={title_font}>{title}</Title>
      <CardListWrapper>
        {cards.map((card) => (
          <ItemComponents key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default CardList;
