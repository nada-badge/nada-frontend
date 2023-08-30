import styled from 'styled-components';

const explain_set = {
  0: ['내 대외활동 기록을', '인증된 뱃지를 통해 관리해보세요.'],
  1: ['내가 북마크한 대외활동 일정을', '캘린더에서 바로 확인할 수 있어요.'],
  2: ['내가 모집 중인 팀의', '꼭 맞는 팀원을 추천해드려요'],
  3: ['강점과 약점, 맞춤 활동 추천까지', 'AI가 알아서 정리해 줄게요.'],
};

const ItemContainer = styled.div`
  margin-top: 132px;
  position: absolute;
`;

const ExplainBox = styled.div`
  color: var(--myspec-gray-scalegray-900);
  font-family: var(--title-02-font-family);
  font-size: var(--title-02-font-size);
  font-style: var(--title-02-font-style);
  font-weight: var(--title-02-font-weight);
  height: 54px;
  letter-spacing: var(--title-02-letter-spacing);
  line-height: var(--title-02-line-height);
  text-align: center;
`;

export const SlideItem = ({ number, isActive }) => {
  return (
    <ItemContainer>
      <ExplainBox>
        {explain_set[number][0]} <br /> {explain_set[number][1]}
      </ExplainBox>
      <div>
        <img src={require('./img/display.png')} alt="slider1" />
      </div>
    </ItemContainer>
  );
};
