/** FilterItems 활성화 된 filter의 내용을 출력하기 위한 filter아이템 관리 컨테이너*/
import { useEffect, useState } from 'react';
import { SelectButton } from '../../components/community/SelectButton';
import styled from 'styled-components';
import { SelectAllButton } from '../../components/community/SelectAllButton';
import { useSelector } from 'react-redux';
import { communitySelector } from '../../modules/Community/community';

export const FilterItems = ({ text }) => {
  const mainCategory = useSelector(
    communitySelector('buttonSelect', 'maincategory'),
  );

  const region = [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '경기',
    '강원',
    '충청',
    '경상',
    '전라',
    '제주',
    '세종',
    '해외',
  ];

  const field = [
    '인문/사회',
    '광고/마케팅',
    '디자인/미술',
    '경영/경제/무역',
    '자기계발',
    'IT/전자',
    '자연과학',
    '사진/영상',
    '보건/의료',
    '건축/토목',
    '교육',
    '봉사/사회공헌',
    '페스티벌/행사',
    '식품/요리',
    '체육',
    '도시/환경',
    '문화/예술',
    '역사/탐방',
  ];

  const [category, setCategory] = useState([
    '공모전',
    '연합 동아리',
    '교내 동아리',
    '지역 동아리',
    '소모임',
    '프로젝트',
    '대외활동',
    '인턴',
    '아르바이트',
  ]);

  //모집의 경우 category의 내용을 공모전~대외활동까지로 수정
  useEffect(() => {
    if (mainCategory === '모집') {
      setCategory(category.slice(0, 6));
    }
  }, []);

  const output = (text) => {
    //코드 수정
    switch (text) {
      case '지역':
        return region.map((current, index) => {
          return <SelectButton key={index} text={current} />;
        });
      case '분야':
        return field.map((current, index) => {
          return <SelectButton key={index} text={current} />;
        });
      case '종류':
        return category.map((current, index) => {
          return <SelectButton key={index} text={current} />;
        });
      default:
        return undefined;
    }
  };

  return (
    <Items>
      <Item>
        <SelectAllButton />
        {output(text)}
      </Item>
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
