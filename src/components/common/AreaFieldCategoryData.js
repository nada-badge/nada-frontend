export const regionButtons = [
  { id: 1, text: '서울' },
  { id: 2, text: '부산' },
  { id: 3, text: '대구' },
  { id: 4, text: '인천' },
  { id: 5, text: '광주' },
  { id: 6, text: '대전' },
  { id: 7, text: '울산' },
  { id: 8, text: '경기' },
  { id: 9, text: '강원' },
  { id: 10, text: '충청' },
  { id: 11, text: '경상' },
  { id: 12, text: '전라' },
  { id: 13, text: '제주' },
  { id: 14, text: '세종' },
  { id: 15, text: '해외' },
];

export const fieldButtons = [
  { id: 1, text: '인문/사회' },
  { id: 2, text: '광고/마케팅' },
  { id: 3, text: '디자인/미술' },
  { id: 4, text: '경영/경제/무역' },
  { id: 5, text: '자기계발' },
  { id: 6, text: 'IT/전자' },
  { id: 7, text: '자연과학' },
  { id: 8, text: '사진/영상' },
  { id: 9, text: '보건/의료' },
  { id: 10, text: '건축/토목' },
  { id: 11, text: '교육' },
  { id: 12, text: '봉사/사회공헌' },
  { id: 13, text: '페스티벌/행사' },
  { id: 14, text: '식품/요리' },
  { id: 15, text: '체육' },
  { id: 16, text: '도시/환경' },
  { id: 17, text: '문화/예술' },
  { id: 18, text: '역사/탐방' },
];

export const categoryButtons = [
  { id: 1, text: '공모전' },
  { id: 2, text: '연합 동아리' },
  { id: 3, text: '교내 동아리' },
  { id: 4, text: '지역 동아리' },
  { id: 5, text: '소모임' },
  { id: 6, text: '프로젝트' },
  { id: 7, text: '대외활동' },
  { id: 8, text: '인턴' },
  { id: 9, text: '아르바이트' },
];

export function selectConfig(content, mainCategory) {
  const Config = {
    region: regionButtons,
    field: fieldButtons,
    category: categoryButtons,
  };

  if (content === 'category' && mainCategory === '모집') {
    return Config[content].slice(0, 6);
  }
  return Config[content];
}

export function selectAllConfig(content) {
  const Config = {
    region: '전국',
    field: '전체',
    category: '전체',
  };

  return Config[content];
}
