import styled from 'styled-components';
import ActivityItem from './ActivityItem';

const CardsContainer = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  box-shadow: 0px 2px 5px #00000005;
  position: relative;
  margin: 12px 0px;

  /* height: 277px; */
  /* left: 0; */
  /* overflow-x: clip; */
  /* top: 658px; */
  /* width: 375px; */

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
    padding: 16px 0px;
    margin: 0;
    /* top: 11px; */
  }
`;

const CardListWrapper = styled.div`
  gap: 8px;
  align-items: flex-start;
  display: flex;
  left: 15px;
  overflow-x: scroll;
  position: relative;
  padding-bottom: 12px;
  /* top: 52px; */
`;

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
