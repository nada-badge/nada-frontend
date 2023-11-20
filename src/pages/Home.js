import { useEffect } from 'react';
import CardList from '../components/cardList/CardList';
import WeekCalendar from '../containers/calendar/WeekCalendar';
import styled from 'styled-components';
import BannerSlider from '../components/home/BannerSlider';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../modules/bar';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: left;
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;

  & > div {
    background-color: white;
  }

  & > .bottomNav_place {
    height: 85px;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const community_cards = [
    { id: 1, title: '유용한 활동 사이트', category: '자유' },
    { id: 2, title: '같이 공모전 나가실 분', category: '홍보' },
    { id: 3, title: '팀원 모집합니다.', category: '홍보' },
  ];

  const activity_cards = [
    { id: 1, title: '2023년 성북구 청년 소셜 벤처 혁신 경연대회', Dday: 7 },
    {
      id: 2,
      title: '[파이꿈터 4기] 은둔고립청년 프로그램 꿈터에서 놀자!',
      Dday: 4,
    },
    { id: 3, title: '[성신여대] 창업동아리 NADA 팀원추가 모집', Dday: 3 },
  ];

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'logo',
        text: '',
        isShowBottom: true,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate('/calendar');
  };

  return (
    <HomeContainer>
      <BannerSlider />
      <div onClick={onClick}>
        <WeekCalendar className="calendarweek" />
      </div>
      <CardList
        title={'지금 인기 있는 게시글이에요🔥'}
        cards={community_cards}
        type={'board'}
      />
      <CardList
        title={'추천 대외활동'}
        cards={activity_cards}
        type={'activity'}
      />
      <div className="bottomNav_place" />
    </HomeContainer>
  );
};

export default Home;
