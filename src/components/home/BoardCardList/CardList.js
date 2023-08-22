import styled from 'styled-components';
import CardItem from './CardItem';

const CardsContainer = styled.div`
  background-color: var(--myspec-gray-scalewhite);
  box-shadow: 0px 2px 5px #00000005;
  height: 212px;
  left: 0;
  position: relative;
  /* top: 434px; */
  width: 375px;

  & > h1 {
    color: #000000;
    font-family: var(--subtitle-01-font-family);
    font-size: var(--subtitle-01-font-size);
    font-style: var(--subtitle-01-font-style);
    font-weight: var(--subtitle-01-font-weight);
    left: 16px;
    letter-spacing: var(--subtitle-01-letter-spacing);
    line-height: var(--subtitle-01-line-height);
    position: absolute;
    top: 11px;
    white-space: nowrap;
  }
`;

const CardListWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 12px;
  left: 15px;
  overflow-x: scroll;
  position: absolute;
  top: 52px;
  width: 345px;
`;

const cards = [
  { id: 1, title: '유용한 활동 사이..', category: '자유' },
  { id: 2, title: '같이 공모전 나가…', category: '홍보' },
  { id: 3, title: '팀원 모집합니다…', category: '홍보' },
];

const CardList = () => {
  return (
    <CardsContainer>
      <h1>지금 인기 있는 게시글이에요🔥</h1>
      <CardListWrapper>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default CardList;
