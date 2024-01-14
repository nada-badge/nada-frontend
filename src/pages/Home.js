import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import WeekCalendar from '../containers/calendar/WeekCalendar';
import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../modules/redux/bar';
import { useNavigate } from 'react-router-dom';
import BoardCardItem from '../components/cardList/BoardCardItem';
import ActivityItem from '../components/cardList/ActivityItem';
import { useActivityList } from '../modules/queries/activity/useGetActivity';
import '../styles/PageCommon.scss';
import { FixedSizeList as List } from 'react-window';

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
  const { data } = useActivityList();

  useEffect(() => {
    if (data) {
      setActivities(data);
    }
  }, [data, activities]);

  useEffect(() => {
    dispatch(
      changeBarStatus({
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

  const Column = ({ index, style }) => (
    <div
      style={{
        ...style,
        boxSizing: 'border-box',
        paddingRight: '12px',
      }}
      key={index}
    >
      {activities[index] && <ActivityItem cards={activities[index]} />}
    </div>
  );
  
  return (
    <div className="pageContainer">
      <Suspense
        fallback={<div className="loading" style={{ height: '118px' }}></div>}
      >
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
      <div>
        <CardList title={'추천 대외활동'} title_font={'subtitle-01'}>
          <List
            height={222}
            itemCount={activities.length + 1}
            itemSize={182}
            layout="horizontal"
            width={375}
            style={{ boxSizing: 'border-box' }}
          >
            {Column}
          </List>
        </CardList>
      </div>
    </div>
  );
};

export default Home;
