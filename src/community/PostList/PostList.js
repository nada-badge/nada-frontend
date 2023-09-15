import PostItem from "./PostItem";

const cards = [
  {
    id: 1,
    title: "출사 동아리 ‘픽처’에서 팀원을 모집합니다",
    field: "사진",
    area: "부산",
    category: "연합 동아리",
    text: "저희와 함께 사진 찍으실 분 구합니다.",
    postAt: "8분 전",
  },
  {
    id: 2,
    title: "공모전 함께 나가실 분!",
    field: "경제",
    category: "공모전",
    area: "서울",
    text: "지금 경영학과 학생들로 구성되어있고 2명 더 구합니다",
    postAt: "13분 전",
  },
  {
    id: 3,
    title: "스터디 함께 하실 분 구해요",
    field: "자기계발",
    category: "소모임",
    area: "영종도",
    text: "아침마다 모여서 공부 인증하고 성공합시다!",
    postAt: "43분 전",
  },
];

const PostList = () => {
  return (
    <div>
      {cards.map((card) => (
        <PostItem key={card.id} card={card} />
      ))}
    </div>
  );
};

export default PostList;
