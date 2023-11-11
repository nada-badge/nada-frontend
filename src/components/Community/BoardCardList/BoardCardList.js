import {
  CardsContainer,
  CardListWrapper,
} from "../../../styles/Community/CardListStyle";
import BoardCardItem from "./BoardCardItem";

const cards = [
  { id: 1, title: "유용한 활동 사이트", category: "자유" },
  { id: 2, title: "같이 공모전 나가실 분", category: "홍보" },
  { id: 3, title: "팀원 모집합니다.", category: "홍보" },
  { id: 4, title: "대박 예정 프로젝트 팀원 모집합니다", category: "홍보" },
];

const BoardCardList = () => {
  return (
    <CardsContainer>
      <h1>지금 인기 있는 게시글이에요🔥</h1>
      <CardListWrapper>
        {cards.map((card) => (
          <BoardCardItem key={card.id} card={card} />
        ))}
      </CardListWrapper>
    </CardsContainer>
  );
};

export default BoardCardList;
