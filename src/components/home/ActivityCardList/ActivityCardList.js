import { CardsContainer, CardListWrapper } from '../CardList';
import ActivityItem from './ActivityItem';

const cards = [
  { id: 1, title: '2023년 성북구 청년 소셜 벤처 혁신 경연대회', Dday: 7 },
  {
    id: 2,
    title: '[파이꿈터 4기] 은둔고립청년 프로그램 꿈터에서 놀자!',
    Dday: 4,
  },
  { id: 3, title: '[성신여대] 창업동아리 NADA 팀원추가 모집', Dday: 3 },
];

const ActivityCardList = () => {
  return (
    <CardsContainer>
      <h1>추천 대외활동</h1>
      <CardListWrapper>
        {cards.map((card) => (
          <ActivityItem key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default ActivityCardList;
