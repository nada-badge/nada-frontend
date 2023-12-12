import styled from 'styled-components';
import CardList from '../../components/cardList/CardList';
import { SearchInput } from '../../components/search/SearchInput';
import { useEffect, useState } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import RecentActivityItem from '../../components/cardList/RecentActivityItem';
import { Border } from '../../styles/community/CommunityStyle';
import Category from '../../containers/community/Category';
import Filter from '../../containers/community/Filter';
import ActivityItem from '../../components/cardList/ActivityItem';
import { useActivityListQuery } from '../../modules/queries/ActivityQuery';

const ActivityContainer = styled.div`
  background-color: var(--myspec-gray-scalegray-100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 375px;
  margin: 0px auto;
  text-align: left;
  padding-bottom: 85px; // 하단 바

  & > div {
    background-color: white;
  }

  & > .acitivityList {
    & > :nth-last-child(1) {
      position: relative;
      top: 12px;
    }
  }
`;

const ActivityPage = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  // 게시글 불러오기
  const { data } = useActivityListQuery();

  useEffect(() => {
    if (data) {
      setActivities(data.activities);
    }
  }, [data]);

  // 최근 본 게시글
  const cards = [
    {
      _id: '65617b6a9c6d76464c132459',
      title: '2023년 성북구 청년소셜 커뮤니티',
      team: '청년재단',
      Dday: 14,
      see: 307,
    },
    { _id: 2, title: '강북구 청년소셜', team: '재단', Dday: 114, see: 37 },
    {
      _id: 3,
      title: '2023년 성북구 청년소셜',
      team: '청년재단',
      Dday: 14,
      see: 307,
    },
  ];

  useEffect(() => {
    dispatch(
      setBarStatus({ headerState: 'bell', text: '활동', isShowBottom: true }),
    );
  }, []);

  return (
    <ActivityContainer>
      <SearchInput />
      <CardList title={'최근 본 활동'} title_font={'subtitle-01'}>
        <RecentActivityItem cards={cards} />
      </CardList>
      <div className="acitivityList">
        <Category />
        <Border />
        <Filter />
        <CardList>
          <ActivityItem cards={activities} />
        </CardList>
      </div>
    </ActivityContainer>
  );
};

export default ActivityPage;
