import ActivityItem from './ActivityItem';
import BoardCardItem from './BoardCardItem';
import styled from 'styled-components';
import RecentActivityItem from './RecentActivityItem';
import { BadgeItem } from './BadgeItem';
import { applyFontStyles } from '../../styles/fontStyle';

const CardsContainer = styled.div`
  box-shadow: 0px 2px 5px #00000005;
  position: relative;

  & > .card-container {
    width: calc(
      375px - 15px
    ); // scroll 작동하기 위해선 부모 요소 width에 크기를 정하고
    overflow-x: scroll; // overflow 속성을 적용해야함.
  }
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
  // 부모 속성에서 width, overflow 속성을 적용해야합니다. (여기선 삭제)
  width: fit-content;
  gap: 12px;
  align-items: flex-start;
  display: flex;
  left: 15px;
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
      <div className="card-container">
        <CardListWrapper>
          {cards.map((card) => (
            <ItemComponents key={card.id} card={card} />
          ))}
        </CardListWrapper>
      </div>
    </CardsContainer>
  );
};

export default CardList;
