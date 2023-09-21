import { SelectButton } from "./SelectButton";
import styled from "styled-components";

export const FilterItems = ({ text }) => {
  const area = [
    "전국",
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충청",
    "경상",
    "전라",
    "제주",
    "세종",
    "해외",
  ];

  const field = [
    "전체",
    "인문/사회",
    "광고/마케팅",
    "디자인/미술",
    "경영/경제/무역",
    "자기계발",
    "IT/전자",
    "자연과학",
    "사진/영상",
    "보건/의료",
    "건축/토목",
    "교육",
    "봉사/사회공헌",
    "페스티벌/행사",
    "식품/요리",
    "체육",
    "도시/환경",
    "문화/예술",
    "역사/탐방",
  ];

  const category = [
    "전체",
    "공모전",
    "연합 동아리",
    "교내 동아리",
    "지역 동아리",
    "소모임",
    "프로젝트",
  ];

  const output = (text) => {
    //코드 수정
    switch (text) {
      case "지역":
        return area.map((current) => {
          return <SelectButton text={current} type="opened" />;
        });
      case "분야":
        return field.map((current) => {
          return <SelectButton text={current} type="opened" />;
        });
      case "종류":
        return category.map((current) => {
          return <SelectButton text={current} type="opened" />;
        });
      default:
        return undefined;
    }
  };

  return (
    <Items>
      <Item>{output(text)}</Item>
    </Items>
  );
};

const Items = styled.div`
  position: relative;
  width: 345px;
`;

const Item = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  position: relative;
  width: 345px;
`;
