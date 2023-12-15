import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import WeekCalendar from '../containers/calendar/WeekCalendar';
import styled from 'styled-components';
import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { setBarStatus } from '../modules/bar';
import { useNavigate } from 'react-router-dom';
import BoardCardItem from '../components/cardList/BoardCardItem';
import ActivityItem from '../components/cardList/ActivityItem';
import { useGetActivities } from '../modules/activity/useGetActivities';

const HomeContainer = styled.div`
  text-align: left;
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  padding-bottom: 85px;

  // 배너 크기만큼 공간 마련하기
  & > .loading {
    height: 118px;
  }

  & > div {
    background-color: white;
  }

  & > .bottomNav_place {
    position: relative;
    top: -12px;
    height: 85px;
  }
`;

const Home = () => {
  const BannerSlider = React.lazy(() =>
    import('../components/home/BannerSlider'),
  );

  const dispatch = useDispatch();
  const community_cards = [
    { id: 1, title: '유용한 활동 사이트', category: '자유' },
    { id: 2, title: '같이 공모전 나가실 분', category: '홍보' },
    { id: 3, title: '팀원 모집합니다.', category: '홍보' },
  ];

  const [activities, setActivities] = useState([]);

  // 활동글 불러오기
  const data = useGetActivities();

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

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

  const onClick = () => {
    navigate('/calendar');
  };

  return (
    <HomeContainer>
      <Suspense fallback={<div className="loading"></div>}>
        <BannerSlider />
      </Suspense>
      <div onClick={onClick}>
        <WeekCalendar className="calendarweek" />
      </div>
      <CardList
        title={'지금 인기 있는 게시글이에요🔥'}
        title_font={'subtitle-01'}
      >
        <BoardCardItem cards={community_cards} />
      </CardList>
      <CardList title={'추천 대외활동'} title_font={'subtitle-01'}>
        <ActivityItem cards={activities} />
      </CardList>
    </HomeContainer>
  );
};

export default Home;
